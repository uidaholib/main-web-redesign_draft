# Web Site Data

The library website uses spreadsheet data to generate many features on various pages. 
Any content made up of repeating chunks of information is a good candidate to be managed as a spreadsheet rather than written directly as markdown/html (e.g., tables, FAQs, lists of services, etc.).
Maintaining this content as a spreadsheet can also facilitate collaboration using Google Sheets. 

## Important notes

- All data is UTF-8 character encoding (UTF-8 *without BOM*)
- DO NOT open CSVs with Excel! Excel will sometimes corrupt UTF-8 files just by opening. If you open a site CSV with Excel, and changes show up in Git, please do **not** commit them. 
- DO NOT create CSVs with Excel! Excel can not correctly create CSVs for Jekyll. Excel only creates UTF-8 with BOM--the BOM breaks Jekyll (and most other applications). If you have data in Excel, save as an ".xlsx" file, then open with OpenRefine, LibreOffice, or Google Sheets to create a CSV.

## Google Sheets

To facilitate collaboration, some website data is created, edited, and managed as Google Sheets.

All Sheets should be in the "mainweb_data" shared Google folder so they can be found and managed together. 
The "mainweb_data" folder is shared to the web project team and common collaborator accounts (such as SPEC account).
Individual Sheets in the folder can be shared to other relevant collaborators specific to that data.

Some Sheets correspond directly to one CSV (with filename matching the web project version), while others contain multiple related sheets that each correspond to a CSV in the web project (with filename matching the specific section).

Please keep the Sheet version and the CSV in "_data" in sync! 
When updating data please first check both versions to make sure they haven't gotten out of sync since it is easy to forget.

If doing updates in the main-web repository version, please upload the changed data to the Sheet in Google Drive--follow the "Import" option documented in the tips below.
Using the "Import" option to create a new individual sheet in a Sheet file helps avoid issues with corruption and data loss (pasting in data from other spreadsheets can sometimes create odd issues).

Not all data is reproduced in the "mainweb_data" folder--only CSVs with content that is regularly edited by non-GitHub users or with content that is complicated to edit in plain text are included.

## Data tools

Tips for tools to work with site data:

### OpenRefine

<https://openrefine.org/>

- Start OpenRefine.
- Select your ".csv" and click "Next".
- On the "Configure Parsing Options", choose *all* these options to parse correctly:
    - In "Parse data as" select "CSV / TSV / separator-based files".
    - In "Character encoding" click the box and select "UTF-8" (*this is essential to avoid losing special characters on Windows*).
    - If necessary rename project to match original filename.
    - Click "Create Project" to finish parsing / importing the data
- Use Refine's "Export" option "Comma-separated value", file is ready to go in web project.

### LibreOffice Calc

<https://www.libreoffice.org/>

- Open LibreOffice Calc, then File > Open and choose your ".csv" 
- This will open the "Text Import" parsing options, choose these options:
    - "Character set" select "Unicode (UTF-8)"
    - "Separator Options" choose "Separated by" and check *only* "Comma".
    - "Fields" use the box to select all the columns, then select "Column type" "text" (this will prevent it from reformatting dates and numbers).
    - Click "Okay" to finish parsing.
- Calc will allow you to safely save as CSV, file is ready to go in web project.  

### Google Sheets

- Open a new blank Sheet
- Click "File" > "Import" > "Upload", and choose your ".csv".
- This will open the "Import file", choose these options:
    - "Import location" select "Replace current sheet".
    - "Separator type" select "Tab".
    - "Convert text to numbers, dates, and formulas" select "No" (to avoid reformatting dates and numbers and running into issues with full text field).

### Excel

Please do **not** commit any changes created by Excel when opening a CSV in the project. 
Should generally not be used on web project, but can be used to create or prep data if desired. 

You can import UTF-8 CSVs without corruption if you follow the import data method (different versions have the menu options labeled differently, so these steps are just a vague approximation. As far as I can tell online Excel 365 can't import data and can't really be used for this process at all):

- Open a new blank spreadsheet in Excel (*do not double click the ".csv" or open with Excel directly*)
- Click "Data" > "From Text/CSV" (in "Get data" area left side of ribbon)
- This should pop open an "Import" options menu similar to the one described above for LibreOffice Calc--choose similar options. In "File origin" be sure to choose "Unicode (UTF-8)" or the parsing will have errors. (Excel 365 flashes some notices like "connecting" and "loading" data, as if you are setting up a live database connection--you can ignore this mysticism, its just importing data like normal).

Excel can **not** export a correctly formatted CSV.
Save the file in .xlsx, and use a different program to create the CSV (such as OpenRefine or Sheets).

--------------------------

## Data files

File naming convention is to use the section where the data is used (i.e. find, services, about, etc) + underscore + descriptive name. 
Files that configure site wide properties are prefixed with "config_".

Please try to document filename and data source if fleshing out this section!

**Current files and notes:**

about_people.csv - full data for directory

about_directory.csv - old people directory table

about_floor_maps.csv - list of floor maps and floor info

about_liaisons.csv - liaison list

about_recognitions-bookplates.csv - faculty bookplate list

collections_index.csv - Collections section index page

config_hours.yml - configure hours js

config_pagesnav.yml - contains all the info to create side nav for sections of the site

config_theme-colors.csv - theme colors

covid19_infosources.csv 
covid19_libraryresources.csv

digital_all_collections.csv - see "docs/all-collections.md"

elsevier_contract.csv

equipment_fines.csv - studio and circulation equipment fines

find_access-tools.csv

find_geoapps.csv

find_index.csv - index of Find section

find_kanopy_expiration.csv - no longer used

find_microfilm.csv

gisday_resources.csv - gis repository metadata

gisday_schedule.csv - gis day event schedule

gisday_sponsors.csv

giving_tower_news_embed.csv

index_carousel.csv

index_carousel_oldersaved.csv

journals-review.csv

journals-review-faq.csv

loanable_equipment.csv - equipment that the library is circulating

mill_faq.csv

mill_newsletters.csv

mill_people.csv

mill_tools.csv

mylibrary_profiles.csv

oapf_faq.csv

oapf_funded.csv

open_pages.csv

open_thinkopenfellows.csv

services_index.csv

services_instruction_topics.csv

services_reserves_faq.csv

services_rooms.csv - rooms available for booking

services_workshops_resources.csv 

spec_accession_list.csv 

spec_books.csv

spec_carousel.csv

spec_categories.csv

spec_collections_main.csv

spec_faq.csv

spec_histphoto_dropdown.csv

spec_histphoto_full.csv

spec_idahobio.csv

spec_searchtools.csv

spec_tabraham-files.csv

studio_equipment.csv - equipment currently in the Studio

studio_faq.csv - Studio-related FAQs

vivo_featured_researchers.csv
