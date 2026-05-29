---
title: Guide to Open Formats for VERSO Deposits
section: VERSO
permalink: /verso/formats.html
layout: page
lazyload: true
---

When depositing research datasets, code, and supplementary materials
into VERSO, choosing the right file format is essential for ensuring
your work remains accessible and reusable over time.

Open, non-proprietary, and machine-readable formats maximize the
long-term value of your deposit by ensuring that future
researchers---and future software---can access and use your work without
barriers.

## Why Open Formats Matter

Proprietary formats depend on specific commercial software that may
become obsolete, discontinued, or inaccessible. Open formats, by
contrast, have publicly available specifications and can be read by
multiple applications, both now and in the future.

Machine-readable formats enable automated processing, analysis, and
integration with other datasets. This supports computational
reproducibility and allows other researchers to build on your work more
easily.

## Guidelines for Choosing Formats

- **Choose non-proprietary formats.** Open standards with publicly documented specifications are more likely to remain accessible as technology evolves.
- **Prioritize plain text and structured text formats.** Plain text files (with standard character encoding like UTF-8) are among the most durable and accessible formats.
- **Use uncompressed or losslessly compressed formats when possible.** Lossy compression (like JPEG for images) permanently discards information. For preservation, use formats that retain all original data.
- **Select formats commonly used in your discipline.** Widespread adoption ensures tool availability and community support. Check disciplinary repositories and journals for guidance on accepted formats.
- **Document any proprietary formats.** If you must include proprietary formats (e.g., specialized instrument output), also provide open-format versions or detailed documentation on how to extract the data.
- **Consider both current usability and long-term preservation.** The best format balances immediate accessibility with durability. When in doubt, include multiple formats (e.g., both Excel and CSV versions of tabular data).

### Recommended Formats by Data Type

#### Tabular Data (Spreadsheets, Data Tables)

**Preferred:**

- **CSV (Comma-Separated Values)** - Simple, universal, readable by virtually all statistical and spreadsheet software
- **TSV (Tab-Separated Values)** - Similar to CSV but uses tabs as delimiters
- **JSON (JavaScript Object Notation)** - Structured text format ideal for nested or hierarchical data

**Acceptable:**

- **ODS (OpenDocument Spreadsheet)** - Open standard for spreadsheets with formatting

**Avoid for preservation:** XLS, XLSX (proprietary Microsoft Excel
formats) - If you must use these for working files, also export a CSV
version for deposit.

**Tip:** When converting spreadsheets to CSV, save each worksheet as a
separate CSV file and include a README explaining the relationship
between files. See our [File and Folder Naming](https://www.lib.uidaho.edu/services/data/data-management/guide/sharing/naming/) guide for best
practices.

#### Textual Documents

**Preferred:**

- **Plain text (TXT)** - Use UTF-8 encoding for universal character support
- **Markdown (MD)** - Plain text with simple formatting syntax, widely supported
- **HTML** - Web-standard format, universally readable
- **PDF/A** - ISO-standardized PDF variant designed for long-term preservation (PDF/A-1, PDF/A-2, PDF/A-3)
- **XML** - Structured text format with extensive tool support

**Acceptable:**

- **ODT (OpenDocument Text)** - Open standard for formatted documents
- **LaTeX source files** - Plain text source with compiled PDF

**Avoid for preservation:** DOC, DOCX (proprietary Microsoft Word formats) - Export to PDF/A or ODT for archival purposes.

#### Images

**Preferred:**

- **TIFF (Tagged Image File Format)** - Uncompressed or losslessly compressed, retains all image data
- **PNG (Portable Network Graphics)** - Lossless compression, excellent for diagrams, screenshots, and images with text
- **JPEG 2000** - Open standard with both lossless and lossy options

**Acceptable for derivative copies:**

- **JPEG/JPG** - Widely compatible but uses lossy compression. Suitable for derivative versions but not as the only copy of original images.

**Avoid:** GIF (limited color palette), proprietary RAW formats (unless also providing TIFF or DNG versions)

**Tip:** For master copies of photographs or scanned documents, use TIFF. You can provide JPEG versions for easier viewing, but keep the TIFF as the preservation copy.

#### Geospatial Data

**Preferred:**

- **GeoJSON** - Open standard for vector geographic features, widely supported by web mapping tools
- **Shapefile** - De facto standard for vector data (although technically proprietary, it has open specifications and universal support)
- **GeoTIFF** - TIFF format with embedded georeferencing, standard for raster data
- **NetCDF** - Open standard for multidimensional scientific data, widely used in climate and atmospheric sciences

**Acceptable:**

- **KML (Keyhole Markup Language)** - XML-based format for geographic visualization
- **GML (Geography Markup Language)** - XML standard for geographic features

**Avoid:** Proprietary geodatabase formats (e.g., Esri File Geodatabase) - Export to open formats for deposit.

See our [Commonly Used Metadata Standards](https://www.lib.uidaho.edu/services/data/data-management/guide/documenting/standards/) for information on geospatial metadata conventions.

#### Audio and Video

**Preferred for audio:**

- **WAV (Waveform Audio)** - Uncompressed, preserves all audio data
- **FLAC (Free Lossless Audio Codec)** - Open, lossless compression
- **AIFF** - Uncompressed audio format

**Acceptable for derivative copies:**

- **MP3** - Widely compatible but lossy; suitable for access copies but not preservation masters
- **Ogg Vorbis** - Open lossy format

**Preferred for video:**

- **MP4 (MPEG-4)** - Open standard, widely supported
- **MKV (Matroska)** - Open container format supporting multiple codecs
- **AVI (uncompressed or losslessly compressed)** - Container format with good preservation characteristics when using appropriate codecs

**Avoid:** Proprietary or heavily compressed formats without open specifications

#### Code and Software

**Preferred:**

- **Plain text source code files** - Use standard extensions (.py, .r, .m, .cpp, etc.) with UTF-8 encoding
- **Jupyter Notebooks (.ipynb)** - JSON-based, combines code, output, and documentation
- **R Markdown (.Rmd)** - Plain text with code and narrative

**Best practices for code deposits:**

- Include a README file explaining the purpose, requirements, and usage
- Specify software dependencies with version numbers
- Include example data or test cases
- Apply an appropriate open source license
- Document the computing environment (e.g., using environment.yml,requirements.txt, or similar)

#### Databases and Structured Data

**Preferred:**

- **SQL dump files** - Plain text SQL statements to recreate database structure and content
- **XML** - Structured, self-describing, excellent for complex hierarchical data
- **JSON** - Lightweight, human-readable, widely supported
- **CSV files with data dictionary** - Export each table as CSV and include documentation of relationships

**Avoid:** Proprietary database formats (e.g., Microsoft Access .mdb)
without export to open formats

#### Specialized Scientific Data

Many disciplines have established open format standards:

- **NetCDF** - Climate, oceanographic, and atmospheric data
- **HDF5** - Hierarchical data format for complex scientific datasets
- **FITS (Flexible Image Transport System)** - Astronomy and astrophysics
- **NeXus** - Neutron, x-ray, and muon science
- **GenBank/FASTA** - Genomic sequences
- **SDF (Structure-Data File)** - Chemical structure data

Consult with your [subject librarian](https://www.lib.uidaho.edu/services/data/data-management/guide/contact/) or disciplinary repository for guidance on field-specific standards.

### Documentation Requirements

Regardless of format choice, all VERSO deposits should include:

- **README file** - Plain text or Markdown file explaining:
    - What the dataset contains
    - How files are organized
    - Software or tools needed to use the data
    - Any known issues or limitations
- **Data dictionary or codebook** - For tabular data, document:
    - Variable names and definitions
    - Units of measurement
    - Codes for categorical variables
    - Missing value indicators
- **Methodology documentation** - How the data were collected, processed, or generated
- **File format specifications** - For uncommon formats, include links to format documentation or specifications

See our [Data Documentation & Metadata](https://www.lib.uidaho.edu/services/data/data-management/guide/documenting/) guide for detailed guidance on creating documentation.

### Working Files vs. Preservation Files

We recognize that researchers often work with proprietary formats during
active research. When depositing to VERSO:

- **Provide both versions when possible.** For example, deposit both your Excel workbook (for immediate usability) and CSV exports (for long-term preservation).
- **Prioritize the preservation format.** If you can only include one version, choose the open format. Users can often import open formats into proprietary software.
- **Document any conversion process.** Note any transformations or limitations when converting between formats (e.g., \"Excel formulas not preserved in CSV export\").

### Compression and Containers

When depositing multiple files, it\'s often helpful to package them together:

**Preferred container formats:**

- **ZIP** - Universal support, lossless compression
- **TAR with GZIP (.tar.gz)** - Common in Unix/Linux environments

**Best practices:**

- Use compression for collections of many small files or large text files
- Don\'t compress already-compressed formats (e.g., don\'t ZIP a collection of MP3s)
- Include a README in the root of the archive explaining its contents

### Questions About Formats?

If you\'re unsure about the best format for your data, [contact the Data Services team](https://www.lib.uidaho.edu/services/data/data-management/guide/contact/).
We can help you:

- Identify appropriate open formats for your discipline
- Convert proprietary formats to open standards
- Create documentation for unusual or specialized formats
- Ensure your deposit meets funder or publisher requirements

### Related Resources

- [File Formats (Data Management Guide)](https://www.lib.uidaho.edu/services/data/data-management/guide/sharing/formats/)
- [FAIR Data Principles](https://www.lib.uidaho.edu/services/data/data-management/guide/fair/)
- [Data Documentation & Metadata](https://www.lib.uidaho.edu/services/data/data-management/guide/documenting/)
- [File and Folder Naming](https://www.lib.uidaho.edu/services/data/data-management/guide/sharing/naming/)
- [Data Repositories & Sharing](https://www.lib.uidaho.edu/services/data/data-management/guide/deposit/)
