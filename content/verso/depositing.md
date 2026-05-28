---
title: Depositing Data or Documents 
section: VERSO
permalink: /verso/depositing.html
layout: page
lazyload: true
---

## VERSO Deposit Format Quick Reference

*A quick guide to choosing open, preservation-friendly formats for your
VERSO deposit*

### Quick Format Selection

| Data Type | Best Format | Also Acceptable | Avoid |
|---|---|---|---|
| **Spreadsheets/Tables** | CSV, TSV, JSON | ODS | XLS, XLSX; include CSV version |
| **Text Documents** | TXT (UTF-8), Markdown, PDF/A, HTML | ODT, LaTeX | DOC, DOCX; export to PDF/A |
| **Images** | TIFF, PNG | JPEG 2000, JPEG for derivatives | GIF, proprietary RAW without TIFF |
| **Geospatial (Vector)** | GeoJSON, Shapefile | KML, GML | Proprietary geodatabases |
| **Geospatial (Raster)** | GeoTIFF, NetCDF | — | Proprietary formats |
| **Audio** | WAV, FLAC, AIFF | MP3 for access copies | Proprietary formats |
| **Video** | MP4, MKV | Uncompressed AVI | Heavily compressed proprietary |
| **Code/Scripts** | Plain text: `.py`, `.r`, `.m`, etc. | Jupyter notebooks, R Markdown | Compiled binaries without source |
| **Databases** | SQL dump, XML, JSON | CSV + data dictionary | `.mdb`, `.accdb` without export |

### Deposit Checklist

#### Before You Deposit

* Have you converted proprietary formats to open equivalents?
* Are all text files saved with UTF-8 encoding?
* Have you checked that compressed formats (JPEG, MP3) are only used for
derivative/access copies?
* Are file and folder names descriptive and free of special characters?
* Have you organized files logically (e.g., separate folders for data,
code, documentation)?

#### Required Documentation

* **README file** (TXT or Markdown) explaining:
-   What the dataset contains
-   File organization
-   Software requirements
-   Known limitations

* **Data dictionary or codebook** (for tabular data) documenting:
-   Variable names and definitions
-   Units and measurement scales
-   Codes for categorical variables
-   Missing data indicators

* **Methodology documentation** describing:
-   Data collection methods
-   Processing or analysis steps
-   Quality control procedures

* **Format documentation** (for specialized formats):
-   Links to format specifications
-   Required software or tools
-   Version information

#### For Code and Software Deposits

* Source code in plain text format
* README with installation and usage instructions
* List of dependencies with version numbers
* Example data or test cases
* License information, such as MIT, GPL, or Apache
* Environment documentation, such as `requirements.txt`, `environment.yml`, etc.


#### Compression and Packaging

* Multiple files packaged as ZIP or .tar.gz
* README included at the root level of the archive
* Already-compressed files (JPEG, MP3) not re-compressed

### Common Format Conversions

| From (Proprietary)     | To (Open Format) | How                                                                           |
| ---------------------- | ---------------- | ----------------------------------------------------------------------------- |
| Excel `.xls`, `.xlsx`  | CSV              | File → Save As → CSV UTF-8<br>*Export each sheet separately*                  |
| Word `.doc`, `.docx`   | PDF/A or ODT     | File → Save As → PDF, select PDF/A<br>or Save As → OpenDocument Text          |
| Photoshop `.psd`       | TIFF             | File → Export → Export As → TIFF<br>*Use LZW compression, lossless*           |
| Access Database `.mdb` | SQL or CSV       | Export each table to CSV<br>Include data dictionary explaining relationships  |
| SPSS `.sav`            | CSV + codebook   | File → Export → CSV<br>Create codebook from variable view                     |
| Stata `.dta`           | CSV + codebook   | `export delimited using filename.csv`<br>Create codebook with variable labels |


### Format Selection Decision Tree

**Ask yourself:**

1.  **Is there a discipline-specific standard for this data type?**
    -   Yes → Use that standard (e.g., NetCDF for climate data, FASTA
        for sequences)
    -   No → Continue to question 2
2.  **Can the data be represented in plain text or structured text?**
    -   Yes → Use CSV, JSON, XML, or TXT
    -   No → Continue to question 3
3.  **Is there an open standard for this file type?**
    -   Yes → Use the open standard (e.g., ODS instead of XLS)
    -   No → Continue to question 4
4.  **Must you use a proprietary format?**
    -   Include comprehensive documentation
    -   Provide an open-format version if possible
    -   Export key data to CSV or JSON

### When in Doubt

If you\'re uncertain about format choices for your deposit:

-   **Check with your discipline.** Look at established repositories in
    your field (e.g., GenBank, ICPSR, Dryad) to see what formats they
    accept.
-   **Consult funder requirements.** Many funders specify preferred
    formats in their data management policies.
-   **Contact Data Services.** We can help you identify appropriate
    formats, perform conversions, and create documentation. Email us at
    <lib-verso@uidaho.edu> or [schedule a
    consultation](https://www.lib.uidaho.edu/services/data/data-management/guide/contact/).

### Resources

-   [Complete VERSO Open Formats Guide](#)
-   [U of I File Formats
    Guide](https://www.lib.uidaho.edu/services/data/data-management/guide/sharing/formats/)
-   [FAIR Data
    Principles](https://www.lib.uidaho.edu/services/data/data-management/guide/fair/)
-   [Data Documentation &
    Metadata](https://www.lib.uidaho.edu/services/data/data-management/guide/documenting/)
-   [Library of Congress Recommended Formats
    Statement](https://www.loc.gov/preservation/digital/formats/fdd/descriptions.shtml)

------------------------------------------------------------------------

*Last updated: February 2026*

Questions? Contact <lib-verso@uidaho.edu>
