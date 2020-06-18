# Web Committee 2019

> Thursday, June 13, 2019

## Meeting Notes

### Website Year in Review

- UI wide rebranding and new logos = need for complete redesign! 
- Instituted new development style using GitHub and static site generator Jekyll (based on Evan and Devin's work on Digital sites)
    - Website's source code is shared on GitHub, [main-web-redesign_draft](https://github.com/uidaholib/main-web-redesign_draft )
    - Pulling the code from github allows easier collaboration and project management
    - We develop and test the site on our local machines, then build out the site, and put it on the main server.
- Redesign project:
    - Migration of old content-- Evan harvested everything and used some automated scripts to migrate all existing pages to new template, prepped for new Jekyll-base system. Migrating a lot of content to spreadsheet files rather than html pages. Careful to not break any existing URLs.
    - Many rounds of iterative development of the look and feel, based on look of main UI site and features of old library site. Devin worked a lot on design. Lots of feedback during sprint meetings.
    - Olivia and Jylisa helped clean up all content. 
    - Jessica and Jylisa did user testing and feedback with library student employees. We were able to make changes based on students’ feedback
    - Lots of code contributors, checkout the [github stats chart](https://github.com/uidaholib/main-web-redesign_draft/graphs/contributors)
    - p.s. also migrated Primo recently! Rami did a lot of work to customize.
    - p.s.s. also migrated CONTENTdm from Bill's servers to a hosted version
- New content throughout the year
    - Carousel feature, many contributed ideas and content, "featured resources"
    - Alert notification area on front page (snow days, restrooms closed!)
    - UI OAPF pages, Jylisa
    - Open pages, Marco
    - My Library, Cindy, Corey
    - lots of edits, bug fixes, broken links discovered and suggested by many. thanks!
    - a lot of recovery work on old content when it was discovered missing... from random files to Terry [Abraham Web Archive](https://www.lib.uidaho.edu/special-collections/t-abraham/)
- Lighthouse report, auditing software to view your website’s performance:
    - [uidaho.edu, needs improvement](https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=http://www.uidaho.edu)
    - [lib.uidaho.edu, pretty good!](https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=https://www.lib.uidaho.edu/) and I can fix a couple of the issues fairly painlessly
    - [lib.uidaho.edu/digital/ferl, very good test rating!](https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=https://www.lib.uidaho.edu/digital/ferl/) one of our most recently built CollectionBuilder based sites

### Migration to new servers this Summer

- Bill has been working with ITS to find a solution to get off the aging servers in his office
- migrating to ITS hosted basic web servers without PHP
- Working to clean code before migrating, removing PHP
- reorganizing files and media
- MILL migrating from WordPress to lib.uidaho.edu/mill pages on the main website

### Ideas / Comments / Suggestions

- Spaces page
	- icon + "spaces" added to the main nav bar
	- Spaces: MILL, CDIL, tutoring, fishbowl, SPEC reading room, Studio, Map room, etc
    - [idea seems popular with the group]
    - Different purpose than "book a room"
	- some overlap with "services", "find", and "collections", but okay
- Analytics dashboards ideas
    - Bruce mentioned displaying usage stats for geospatial collections. Example: [ArcGIS usage at UMichigan](https://www.arcgis.com/apps/opsdashboard/index.html#/f94fe24ef07a4c2a8dc0e284594094c9)
    - Rami mentioned pulling data from Alma to build similar dashboards
- UX testing
	- Another round of user testing with students to get feedback?
    - possible Card Sort activity: have people organize pages according to how they think they should be grouped
- Home page featured links
	- Database and articles links are confusing
    - need to cater to novice users (since advanced users will figure it out)
		- popular databases should be right on the homepage, i.e. Academic search premier should be easier to get to
        - people don't really use the quick menu
        - is the Databases A-Z dropdown necessary? would it be simpler as a direct link?
        - remove Worldcat
        - add second row below search box:
            - more research tools: articles, books, journals, ILL, research guides, reserves
            - Featured resources: academic search prem, WoS, Databases A-Z
- Help links / features
    - potential different label on Ask Us button?
		- make solid-colored?
		- let people know it’s not an email link - an icon that indicates it does something and looks more clickable. i icon (for information) 
	- Help page link in upper right corner? next to "book a room"
- Change “Faculty and Staff” button in menu to “People”?
- Add YouTube channel to social media icons
