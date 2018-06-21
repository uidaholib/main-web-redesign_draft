 $(document).ready(function() {
		$('#nav2').find('a').on('click', function() {
			ga('send', 'event', 'IWDL DigInit', 'Click', 'Tabs/' + $(this).text());
			ga('legacyTracker.send', 'event', 'IWDL DigInit', 'Click', 'Tabs/' + $(this).text());
		});
        $('#top').find('a').on('click', function() {
			ga('send', 'event', 'TopBanner', 'Click', '"'+$(this).text() + '" from  '+document.URL);
			ga('legacyTracker.send', 'event', 'TopBanner', 'Click', '"'+$(this).text() + '" from  '+document.URL);
		});
		$('#headerbanner').find('a').on('click', function() {
			ga('send', 'event', 'Header Banner', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
			ga('legacyTracker.send', 'event', 'Header Banner', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
		});	
		$('#mainnav').find('a').on('click', function() {
			ga('send', 'event', 'Header Navigation', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
			ga('legacyTracker.send', 'event', 'Header Navigation', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
		});
		$('#mobilenav').find('a').on('click', function() {
			ga('send', 'event', 'Header Mobile Navigation', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
			ga('legacyTracker.send', 'event', 'Header Mobile Navigation', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
		});
		$('#homepagejumbo').find('a').on('click', function() {
			ga('send', 'event', 'Homepage', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
			ga('legacyTracker.send', 'event', 'Homepage', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
		});
		$('#flickitydiv').find('a').on('click', function() {
			ga('send', 'event', 'Homepage Icons', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
			ga('legacyTracker.send', 'event', 'Homepage Icons', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
		});
		$('#alerted').find('a').on('click', function() {
			ga('send', 'event', 'Homepage Alerts', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
			ga('legacyTracker.send', 'event', 'Homepage Alerts', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
		});
		$('#homepagejumbo').find('input').on('click', function() {
			ga('send', 'event', 'Homepage', 'Search', 'PRIMO Searchbox from '+document.URL);
			ga('legacyTracker.send', 'event', 'Homepage', 'Search', 'PRIMO Searchbox from '+document.URL);
		});
		$('#databasetitle').find('option').on('click', function() {
			ga('send', 'event', 'Homepage', 'Browse', 'Browse Database Title / ' + $(this).text());
			ga('legacyTracker.send', 'event', 'Homepage', 'Browse', 'Browse Database Title / ' + $(this).text());
		});
		$('#newsblock').find('a').on('click', function() {
			ga('send', 'event', 'News', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
			ga('legacyTracker.send', 'event', 'News', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
		});
		$('#dashboard_content').find('a').on('click', function() {
			ga('send', 'event', 'Dashboard', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
			ga('legacyTracker.send', 'event', 'Dashboard', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
		});
		$('#dashboard_content').find('input').on('click', function() {
			ga('send', 'event', 'Dashboard', 'Search', 'Searchbox from  '+document.URL);
			ga('legacyTracker.send', 'event', 'Dashboard', 'Search', 'Searchbox from  '+document.URL);
		});
		$('#database_select_subject').find('option').on('click', function() {
			ga('send', 'event', 'Dashboard', 'Browse', 'Browse Database Subject / ' + $(this).text());
			ga('legacyTracker.send', 'event', 'Dashboard', 'Browse', 'Browse Database Subject / ' + $(this).text());
		});
		$('#database_select_title').find('option').on('click', function() {
			ga('send', 'event', 'Dashboard', 'Browse', 'Browse Database Title / ' + $(this).text());
			ga('legacyTracker.send', 'event', 'Dashboard', 'Browse', 'Browse Database Title / ' + $(this).text());
		});
		$('#journals_subject').find('option').on('click', function() {
			ga('send', 'event', 'Dashboard', 'Browse', 'Browse Journal Title / ' + $(this).text());
			ga('legacyTracker.send', 'event', 'Dashboard', 'Browse', 'Browse Journal Title / ' + $(this).text());
		});
		$('#dashboard_content').find('a').on('click', function() {
			ga('send', 'event', 'Dashboard', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
			ga('legacyTracker.send', 'event', 'Dashboard', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
		});
		$('#breadcrumbdiv').find('a').on('click', function() {
			ga('send', 'event', 'Breadcrumb', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
			ga('legacyTracker.send', 'event', 'Breadcrumb', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
		});
		$('#leftnavmenu').find('a').on('click', function() {
			ga('send', 'event', 'Left Menu', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
			ga('legacyTracker.send', 'event', 'Left Menu', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
		});
		$('#right_content').find('a').on('click', function() {
			ga('send', 'event', 'Right Content', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
			ga('legacyTracker.send', 'event', 'Right Content', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
		});
		$('#right_content').find('input').on('click', function() {
			ga('send', 'event', 'Right Content', 'Search', 'Searchbox from '+document.URL);
			ga('legacyTracker.send', 'event', 'Right Content', 'Search', 'Searchbox from '+document.URL);
		});
		$('#databasetitle').find('option').on('click', function() {
			ga('send', 'event', 'Right Content', 'Browse', 'Browse Database Title / ' + $(this).text());
			ga('legacyTracker.send', 'event', 'Right Content', 'Browse', 'Browse Database Title / ' + $(this).text());
		});
		$('#helpcontainer').find('a').on('click', function() {
			ga('send', 'event', 'Help', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
			ga('legacyTracker.send', 'event', 'Help', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
		});
		$('#footer').find('a').on('click', function() {
			ga('send', 'event', 'Footer', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
			ga('legacyTracker.send', 'event', 'Footer', 'Click', '"'+$(this).text() + '"  from  '+document.URL);
		});
		$('#footer').find('input').on('click', function() {
			ga('send', 'event', 'Footer', 'Search', 'Searchbox  from  '+document.URL);
			ga('legacyTracker.send', 'event', 'Footer', 'Search', 'Searchbox  from  '+document.URL);
		});
		
});