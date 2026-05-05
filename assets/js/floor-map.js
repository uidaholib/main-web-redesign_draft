/**
 * Floor Map Interactive Application
 * Handles SVG loading, room selection, search, and URL state management
 */

(function() {
  'use strict';

  // State
  let currentFloor = null;
  let allFloorsData = {}; // Store data for all floors
  let floorData = null;
  let selectedRoomId = null;
  let svgDocument = null;
  let panZoomInstance = null;
  let currentMode = 'browse'; // 'browse' or 'tour'
  let currentTourStop = 0;

  /**
   * Initialize the floor map application
   */
  function init() {
    // Load all floor data first
    loadAllFloorData();

    // Find all floor map containers on the page
    const containers = document.querySelectorAll('.floor-map-container');

    containers.forEach(container => {
      const floor = parseInt(container.getAttribute('data-floor'));
      initFloor(floor);
    });
  }

  /**
   * Load data for all floors into memory
   */
  function loadAllFloorData() {
    for (let i = 1; i <= 4; i++) {
      const dataScript = document.getElementById(`floor-${i}-data`);
      if (dataScript) {
        try {
          allFloorsData[i] = JSON.parse(dataScript.textContent);
        } catch (e) {
          console.error(`Error parsing floor ${i} data:`, e);
        }
      }
    }
  }

  /**
   * Initialize a specific floor
   */
  function initFloor(floor) {
    currentFloor = floor;

    // Load floor data from JSON
    const dataScript = document.getElementById(`floor-${floor}-data`);
    if (!dataScript) {
      console.error(`Floor ${floor} data not found`);
      return;
    }

    try {
      floorData = JSON.parse(dataScript.textContent);
    } catch (e) {
      console.error(`Error parsing floor ${floor} data:`, e);
      return;
    }

    // Load SVG
    loadSVG(floor, floorData.svg_path);

    // Set up event listeners
    setupEventListeners(floor);

    // Handle initial URL parameters
    handleURLParams(floor);
  }

  /**
   * Load and enhance SVG with data attributes
   */
  function loadSVG(floor, svgPath) {
    // Use the first floor's wrapper for all floors (there's only one SVG container)
    const wrapper = document.getElementById(`svg-wrapper-1`);
    if (!wrapper) return;

    fetch(svgPath)
      .then(response => response.text())
      .then(svgContent => {
        // Insert SVG into wrapper
        wrapper.innerHTML = svgContent;

        // Get SVG document
        const svg = wrapper.querySelector('svg');
        if (!svg) {
          console.error('SVG not found in loaded content');
          return;
        }

        svgDocument = svg;

        // Enhance SVG elements with data attributes
        enhanceSVG(floor, svg);

        // Initialize pan/zoom
        initializePanZoom(floor, svg);

        // Set up SVG interactions
        setupSVGInteractions(floor, svg);
      })
      .catch(error => {
        console.error('Error loading SVG:', error);
        wrapper.innerHTML = '<div class="alert alert-danger m-3">Error loading map. Please refresh the page.</div>';
      });
  }

  /**
   * Initialize svg-pan-zoom on the SVG element
   */
  function initializePanZoom(floor, svg) {
    // Check if svg-pan-zoom is available
    if (typeof svgPanZoom === 'undefined') {
      console.warn('svg-pan-zoom library not loaded');
      return;
    }

    // Add ID to SVG if it doesn't have one (required by svg-pan-zoom)
    if (!svg.id) {
      svg.id = `floor-${floor}-svg`;
    }

    // Wait a tick for the SVG to be fully rendered in the DOM
    setTimeout(() => {
      try {
        // Destroy existing instance if any
        if (panZoomInstance) {
          panZoomInstance.destroy();
          panZoomInstance = null;
        }

        // Initialize pan/zoom
        panZoomInstance = svgPanZoom(`#${svg.id}`, {
          zoomEnabled: true,
          controlIconsEnabled: false, // We'll use our custom button
          fit: true,
          center: true,
          minZoom: 0.5,
          maxZoom: 10,
          zoomScaleSensitivity: 0.5,
          dblClickZoomEnabled: false,
          mouseWheelZoomEnabled: true,
          preventMouseEventsDefault: false,
          contain: false,
          eventsListenerElement: null
        });

        // Fit and center the SVG initially
        panZoomInstance.resize();
        panZoomInstance.fit();
        panZoomInstance.center();

        // Add reset zoom button
        addResetZoomButton(floor);

      } catch (e) {
        console.error('Error initializing pan/zoom:', e);
      }
    }, 100);
  }

  /**
   * Add a reset zoom button to the map
   */
  function addResetZoomButton(floor) {
    const mapPane = document.getElementById(`map-pane-1`);
    if (!mapPane) return;

    // Remove existing reset button if any
    const existingBtn = mapPane.querySelector('.reset-zoom-btn');
    if (existingBtn) {
      existingBtn.remove();
    }

    // Create reset button
    const resetBtn = document.createElement('button');
    resetBtn.className = 'reset-zoom-btn';
    resetBtn.setAttribute('aria-label', 'Reset zoom');
    resetBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 3a7 7 0 00-7 7h2a5 5 0 015-5V3z"/>
        <path d="M3 10a7 7 0 007 7v-2a5 5 0 01-5-5H3z"/>
        <path d="M10 17a7 7 0 007-7h-2a5 5 0 01-5 5v2z"/>
        <path d="M17 10a7 7 0 00-7-7v2a5 5 0 015 5h2z"/>
      </svg>
    `;
    resetBtn.title = 'Reset zoom and center map';

    resetBtn.addEventListener('click', function() {
      if (panZoomInstance) {
        panZoomInstance.resetZoom();
        panZoomInstance.center();
        panZoomInstance.fit();
      }
    });

    mapPane.appendChild(resetBtn);
  }

  /**
   * Enhance SVG elements with data attributes based on room data
   */
  function enhanceSVG(floor, svg) {
    floorData.rooms.forEach(room => {
      const element = svg.getElementById(room.svg_id);
      if (element) {
        element.setAttribute('data-zone', room.zone);
        element.setAttribute('data-room-id', room.room_id);
        element.classList.add('room');
      }
    });
  }

  /**
   * Set up SVG click interactions
   */
  function setupSVGInteractions(floor, svg) {
    // Add click handlers to all room elements
    const rooms = svg.querySelectorAll('.room');
    rooms.forEach(roomElement => {
      roomElement.addEventListener('click', function() {
        const roomId = this.getAttribute('data-room-id');
        selectRoom(floor, roomId);
      });

      // Add hover effect for accessibility
      roomElement.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
      });
    });
  }

  /**
   * Set up event listeners for UI elements
   */
  function setupEventListeners(floor) {
    // Room list item clicks - handle cross-floor navigation
    const roomListItems = document.querySelectorAll(`#room-list-1 .room-list-item`);
    roomListItems.forEach(item => {
      item.addEventListener('click', function() {
        const roomId = this.getAttribute('data-room-id');
        const roomFloor = parseInt(this.getAttribute('data-floor'));

        // If clicking a room on a different floor, switch floors first
        if (roomFloor !== currentFloor) {
          switchToFloor(roomFloor, roomId);
        } else {
          selectRoom(floor, roomId);
        }
      });
    });

    // Search input
    const searchInput = document.getElementById(`room-search-1`);
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        filterRooms(floor, this.value);
      });
    }

    // Back button in detail view
    const backBtn = document.querySelector(`#detail-view-1 .back-btn`);
    if (backBtn) {
      backBtn.addEventListener('click', function() {
        deselectRoom(floor);
      });
    }

    // Floor tabs (desktop)
    const floorTabs = document.querySelectorAll(`#side-pane-1 .floor-tab`);
    floorTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const targetFloor = parseInt(this.getAttribute('data-floor'));
        if (targetFloor !== currentFloor) {
          switchToFloor(targetFloor);
        }
      });
    });

    // Floor dropdown (mobile)
    const floorSelect = document.getElementById(`floor-select-1`);
    if (floorSelect) {
      floorSelect.addEventListener('change', function() {
        const targetFloor = parseInt(this.value);
        if (targetFloor !== currentFloor) {
          switchToFloor(targetFloor);
        }
      });
    }

    // Mode buttons (Browse / Tour)
    const modeBtns = document.querySelectorAll(`#side-pane-1 .mode-btn`);
    modeBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const mode = this.getAttribute('data-mode');
        switchMode(floor, mode);
      });
    });
  }

  /**
   * Switch to a different floor
   */
  function switchToFloor(targetFloor, roomId = null) {
    if (!allFloorsData[targetFloor]) {
      console.error(`Floor ${targetFloor} data not found`);
      return;
    }

    // Update current floor and floor data
    currentFloor = targetFloor;
    floorData = allFloorsData[targetFloor];

    // Update floor tabs
    updateFloorTabs(targetFloor);

    // Load new SVG
    loadSVG(targetFloor, floorData.svg_path);

    // If a specific room was requested, select it after SVG loads
    if (roomId) {
      setTimeout(() => {
        selectRoom(targetFloor, roomId);
      }, 200);
    } else {
      // Update URL with new floor
      updateURL(targetFloor, null);
    }
  }

  /**
   * Update floor tabs to show active floor
   */
  function updateFloorTabs(targetFloor) {
    // Update desktop tabs
    const allTabs = document.querySelectorAll('.floor-tab');
    allTabs.forEach(tab => {
      const tabFloor = parseInt(tab.getAttribute('data-floor'));
      if (tabFloor === targetFloor) {
        tab.classList.add('is-active');
      } else {
        tab.classList.remove('is-active');
      }
    });

    // Update mobile dropdown
    const allSelects = document.querySelectorAll('.floor-select');
    allSelects.forEach(select => {
      select.value = targetFloor.toString();
    });
  }

  /**
   * Switch between Browse and Tour modes
   */
  function switchMode(floor, mode) {
    currentMode = mode;

    // Update mode buttons
    const modeBtns = document.querySelectorAll(`#side-pane-1 .mode-btn`);
    modeBtns.forEach(btn => {
      if (btn.getAttribute('data-mode') === mode) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    });

    // Show/hide mode content
    const browseContent = document.querySelector(`#side-pane-1 .mode-content[data-mode-content="browse"]`);
    const tourContent = document.querySelector(`#side-pane-1 .mode-content[data-mode-content="tour"]`);
    const detailView = document.getElementById(`detail-view-1`);

    if (mode === 'browse') {
      if (browseContent) browseContent.style.display = 'flex';
      if (tourContent) tourContent.style.display = 'none';
      // Keep detail view as is
    } else if (mode === 'tour') {
      if (browseContent) browseContent.style.display = 'none';
      if (tourContent) tourContent.style.display = 'flex';
      if (detailView) detailView.style.display = 'none';

      // Initialize tour
      initializeTour(floor);
    }
  }

  /**
   * Initialize tour mode
   */
  function initializeTour(floor) {
    const tourView = document.getElementById(`tour-view-1`);
    if (!tourView) return;

    const tourStops = floorData.tour_stops || [];

    if (tourStops.length === 0) {
      tourView.innerHTML = '<div class="tour-intro"><p>No tour available for this floor.</p></div>';
      return;
    }

    // Reset tour position
    currentTourStop = 0;

    // Build tour UI
    const tourHTML = `
      <div class="tour-intro">
        <p>${floorData.tour_intro || 'Explore the highlights of this floor.'}</p>
      </div>
      <div class="tour-progress">Stop <span id="tour-current">1</span> of ${tourStops.length}</div>
      <div class="tour-stop-info">
        <h3 id="tour-stop-name">${tourStops[0].name}</h3>
      </div>
      <div class="tour-controls">
        <button class="btn btn-outline-secondary" id="tour-prev" disabled>Previous</button>
        <button class="btn btn-primary" id="tour-next">Next</button>
      </div>
    `;

    tourView.innerHTML = tourHTML;

    // Set up tour controls
    const prevBtn = document.getElementById('tour-prev');
    const nextBtn = document.getElementById('tour-next');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => navigateTour(floor, -1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => navigateTour(floor, 1));
    }

    // Show first tour stop
    showTourStop(floor, 0);
  }

  /**
   * Navigate to previous/next tour stop
   */
  function navigateTour(floor, direction) {
    const tourStops = floorData.tour_stops || [];
    const newStop = currentTourStop + direction;

    if (newStop >= 0 && newStop < tourStops.length) {
      currentTourStop = newStop;
      showTourStop(floor, newStop);
    }
  }

  /**
   * Show a specific tour stop
   */
  function showTourStop(floor, stopIndex) {
    const tourStops = floorData.tour_stops || [];
    if (stopIndex < 0 || stopIndex >= tourStops.length) return;

    const stop = tourStops[stopIndex];

    // Update tour progress
    const currentSpan = document.getElementById('tour-current');
    if (currentSpan) {
      currentSpan.textContent = stopIndex + 1;
    }

    // Update stop name
    const nameEl = document.getElementById('tour-stop-name');
    if (nameEl) {
      nameEl.textContent = stop.name;
    }

    // Update button states
    const prevBtn = document.getElementById('tour-prev');
    const nextBtn = document.getElementById('tour-next');

    if (prevBtn) {
      prevBtn.disabled = (stopIndex === 0);
    }
    if (nextBtn) {
      if (stopIndex === tourStops.length - 1) {
        nextBtn.textContent = 'Finish Tour';
      } else {
        nextBtn.textContent = 'Next';
      }
    }

    // Highlight and zoom to room on map
    updateSVGSelection(floor, stop.svg_id);
    zoomToRoom(stop.svg_id);
  }

  /**
   * Select a room and show its detail view
   */
  function selectRoom(floor, roomId) {
    selectedRoomId = roomId;

    // Find room data
    const room = floorData.rooms.find(r => r.room_id === roomId);
    if (!room) {
      console.error(`Room ${roomId} not found`);
      return;
    }

    // Update SVG selection
    updateSVGSelection(floor, room.svg_id);

    // Zoom to room
    zoomToRoom(room.svg_id);

    // Update room list selection
    updateRoomListSelection(floor, roomId);

    // Show detail view
    showDetailView(floor, room);

    // Update URL
    updateURL(floor, roomId);
  }

  /**
   * Zoom and pan to center on a specific room
   */
  function zoomToRoom(svgId) {
    if (!panZoomInstance || !svgDocument) return;

    const roomElement = svgDocument.getElementById(svgId);
    if (!roomElement) return;

    try {
      // Get the bounding box of the room
      const bbox = roomElement.getBBox();

      // Calculate room center in SVG coordinates
      const roomCenterX = bbox.x + bbox.width / 2;
      const roomCenterY = bbox.y + bbox.height / 2;

      // Get viewport dimensions
      const sizes = panZoomInstance.getSizes();
      const viewportWidth = sizes.width;
      const viewportHeight = sizes.height;


      // Calculate zoom to fit room with padding
      const padding = 1.5;
      const zoomX = viewportWidth / (bbox.width * padding);
      const zoomY = viewportHeight / (bbox.height * padding);
      let targetZoom = Math.min(zoomX, zoomY);

      // Clamp zoom
      targetZoom = Math.max(0.8, Math.min(targetZoom, 3));

      // Reset to fit/center state (zoom = 1 relative to fit)
      panZoomInstance.resetZoom();
      panZoomInstance.resetPan();

      // Get the "real" zoom after reset (this is the scale factor to fit SVG in viewport)
      const realZoom = panZoomInstance.getSizes().realZoom;

      // We want an absolute minimum effective zoom of 1.2x for mobile visibility
      // effectiveZoom = realZoom * zoomBy, so: zoomBy = desiredEffective / realZoom
      const minEffectiveZoom = 1.2;
      const desiredEffectiveZoom = Math.max(targetZoom, minEffectiveZoom);

      // Calculate how much to zoom relative to the fit state
      const relativeZoom = desiredEffectiveZoom / realZoom;


      // Apply the zoom
      panZoomInstance.zoomBy(relativeZoom);

      // The effective zoom is now what we desired
      const effectiveZoom = desiredEffectiveZoom;

      // Calculate pan to center the room
      const panX = (viewportWidth / 2) - (roomCenterX * effectiveZoom);
      const panY = (viewportHeight / 2) - (roomCenterY * effectiveZoom);


      // Apply the pan
      panZoomInstance.pan({x: panX, y: panY});

    } catch (e) {
      console.error('Could not zoom to room:', e);
    }
  }

  /**
   * Deselect current room and return to browse view
   */
  function deselectRoom(floor) {
    selectedRoomId = null;

    // Clear SVG selection
    clearSVGSelection(floor);

    // Clear room list selection
    clearRoomListSelection(floor);

    // Hide detail view and show browse view
    hideDetailView(floor);

    // Update URL
    updateURL(floor, null);
  }

  /**
   * Update SVG to show selected room
   */
  function updateSVGSelection(floor, svgId) {
    if (!svgDocument) return;

    // Remove previous selection
    clearSVGSelection(floor);

    // Add selection to new room
    const roomElement = svgDocument.getElementById(svgId);
    if (roomElement) {
      roomElement.classList.add('is-selected');
    }

    // Add has-selection class to map pane
    const mapPane = document.getElementById(`map-pane-1`);
    if (mapPane) {
      mapPane.classList.add('has-selection');
    }
  }

  /**
   * Clear SVG selection
   */
  function clearSVGSelection(floor) {
    if (!svgDocument) return;

    const selectedElements = svgDocument.querySelectorAll('.is-selected');
    selectedElements.forEach(el => el.classList.remove('is-selected'));

    const mapPane = document.getElementById(`map-pane-1`);
    if (mapPane) {
      mapPane.classList.remove('has-selection');
    }
  }

  /**
   * Update room list to show selected room
   */
  function updateRoomListSelection(floor, roomId) {
    const items = document.querySelectorAll(`#room-list-1 .room-list-item`);
    items.forEach(item => {
      if (item.getAttribute('data-room-id') === roomId) {
        item.classList.add('is-selected');
      } else {
        item.classList.remove('is-selected');
      }
    });
  }

  /**
   * Clear room list selection
   */
  function clearRoomListSelection(floor) {
    const items = document.querySelectorAll(`#room-list-1 .room-list-item`);
    items.forEach(item => item.classList.remove('is-selected'));
  }

  /**
   * Show detail view for a room
   */
  function showDetailView(floor, room) {
    const detailView = document.getElementById(`detail-view-1`);
    const browseView = document.querySelector(`#side-pane-1 .mode-content[data-mode-content="browse"]`);

    if (!detailView) return;

    // Get zone info
    const zone = floorData.zones[room.zone];

    // Populate detail view
    const zoneTag = document.getElementById('detail-zone-tag');
    const name = document.getElementById('detail-name');
    const roomNumber = document.getElementById('detail-room-number');
    const shortDesc = document.getElementById('detail-short-desc');
    const longDesc = document.getElementById('detail-long-desc');
    const moreInfoBtn = document.getElementById('detail-more-info');
    const actionBtn = document.getElementById('detail-action');

    if (zoneTag && zone) {
      zoneTag.textContent = zone.label;
      zoneTag.style.backgroundColor = zone.color;
    }

    if (name) name.textContent = room.name;

    if (roomNumber) {
      if (room.room_number) {
        roomNumber.textContent = `Room ${room.room_number}`;
        roomNumber.style.display = 'block';
      } else {
        roomNumber.style.display = 'none';
      }
    }

    if (shortDesc) {
      if (room.short_description) {
        shortDesc.textContent = room.short_description;
        shortDesc.style.display = 'block';
      } else {
        shortDesc.style.display = 'none';
      }
    }

    if (longDesc) {
      if (room.long_description) {
        longDesc.textContent = room.long_description;
        longDesc.style.display = 'block';
      } else {
        longDesc.style.display = 'none';
      }
    }

    // Handle action buttons
    if (moreInfoBtn) {
      if (room.more_info_url) {
        moreInfoBtn.href = room.more_info_url;
        moreInfoBtn.style.display = 'inline-block';
      } else {
        moreInfoBtn.style.display = 'none';
      }
    }

    if (actionBtn) {
      if (room.action_url && room.action_label) {
        actionBtn.href = room.action_url;
        actionBtn.textContent = room.action_label;
        actionBtn.style.display = 'inline-block';
      } else {
        actionBtn.style.display = 'none';
      }
    }

    // Show detail view, hide browse view
    if (browseView) browseView.style.display = 'none';
    detailView.style.display = 'flex';
  }

  /**
   * Hide detail view and show browse view
   */
  function hideDetailView(floor) {
    const detailView = document.getElementById(`detail-view-1`);
    const browseView = document.querySelector(`#side-pane-1 .mode-content[data-mode-content="browse"]`);

    if (detailView) detailView.style.display = 'none';
    if (browseView) browseView.style.display = 'flex';
  }

  /**
   * Filter rooms based on search query
   */
  function filterRooms(floor, query) {
    const lowerQuery = query.toLowerCase().trim();
    const items = document.querySelectorAll(`#room-list-1 .room-list-item`);
    const floorGroups = document.querySelectorAll(`#room-list-1 .floor-group`);

    if (!lowerQuery) {
      // Show all rooms and groups
      items.forEach(item => item.classList.remove('is-hidden'));
      floorGroups.forEach(group => group.style.display = 'block');
      return;
    }

    // Filter rooms across all floors
    items.forEach(item => {
      const roomId = item.getAttribute('data-room-id');
      const itemFloor = parseInt(item.getAttribute('data-floor'));

      // Get room data from the appropriate floor
      const itemFloorData = allFloorsData[itemFloor];
      if (!itemFloorData) {
        item.classList.add('is-hidden');
        return;
      }

      const room = itemFloorData.rooms.find(r => r.room_id === roomId);
      if (!room) {
        item.classList.add('is-hidden');
        return;
      }

      // Search in room name, description, and room number
      const searchText = [
        room.name,
        room.short_description,
        room.long_description,
        room.room_number
      ].filter(Boolean).join(' ').toLowerCase();

      if (searchText.includes(lowerQuery)) {
        item.classList.remove('is-hidden');
      } else {
        item.classList.add('is-hidden');
      }
    });

    // Hide floor groups with no visible items
    floorGroups.forEach(group => {
      const visibleItems = group.querySelectorAll('.room-list-item:not(.is-hidden)');
      if (visibleItems.length === 0) {
        group.style.display = 'none';
      } else {
        group.style.display = 'block';
      }
    });
  }

  /**
   * Handle URL parameters on page load
   */
  function handleURLParams(floor) {
    const params = new URLSearchParams(window.location.search);
    const floorParam = params.get('floor');
    const roomParam = params.get('room');

    // Check if this floor should be active based on URL
    if (floorParam && parseInt(floorParam) !== floor) {
      return; // This floor is not the one specified in URL
    }

    // Select room if specified
    if (roomParam) {
      // Small delay to ensure SVG is loaded
      setTimeout(() => {
        selectRoom(floor, roomParam);
      }, 100);
    }
  }

  /**
   * Update URL with current state
   */
  function updateURL(floor, roomId) {
    const params = new URLSearchParams();
    params.set('floor', floor);

    if (roomId) {
      params.set('room', roomId);
    }

    const newURL = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({floor, room: roomId}, '', newURL);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
