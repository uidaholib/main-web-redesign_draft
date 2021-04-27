---
title: Data Management @ the University of Idaho Library
section: Data Management Guide
permalink: /services/data/data-management/index2.html
layout: page
--- 

# Data Management Resources and Services

The University of Idaho Library strives to help researchers at the University of Idaho become familiar with data management practices. 
Library faculty endeavor to communicate information about data storage standards and protocols, metadata reporting requirements and best practices, and the requirements and recommendations of national funding bodies and/or professional associations.

## Data Management Planning

### Why Manage Your Data?

- **Meet grant requirements:** Many funding agencies now require that researchers deposit any data which they collect as part of a research project in a repository or archive.
- **Increase the visibility and impact of your research:** Making your data available to other researchers through widely-searched repositories may increase your prominence and demonstrate continued use of the data and relevance of your research
- **Preserve your data:** Depositing your data in a repository guarantees their availability to you and other researchers. Doing so safeguards your investments of time and resources and preserves your unique contribution to research.
- **Facilitate new discoveries:** Enabling other researchers to use your data reinforces open scientific inquiry and may lead to new and unanticipated discoveries. Doing so also prevents duplication of effort by enabling others to use your data rather than trying to gather the data themselves.
- **Increase your research efficiency:** Documenting your data throughout their life cycles increases efficiency by ensuring you and others will be able to understand and use your data in the future. It will also ensure the integrity and proper description of your data are maintained.
- **Simplify your life:** Enabling a repository to house and disseminate your data allows you to focus on your research rather than responding to requests or worrying about data that may be housed on your web site.
- **Support open access:** Researchers are becoming increasingly aware of the need to manage their work and consider issues of scholarly communication.

### Data Management Guidelines by Funding Agency

Many funding agencies require that research data produced as part of a funded project be made publicly available and formal data management plans are now required. 
The [SPARC/Johns Hopkins Data Sharing Policy](http://datasharing.sparcopen.org/) project has an up-to-date list of requirements.

Researchers can comply with these data sharing requirements by depositing their data into one of the many available [data repositories](#depositing).

### Data Management Planning Checklist

The following are questions that can assist in developing a strong data management plan. Not all questions may apply to your project.

**Describing Your Expected Data:**

- What datasets are expected to be produced from the project? Include both raw data and processed data and any anticipated derivative applications or models.
- What form(s) and format(s) are the data in? <span class="small">[\[more\]](#formats)</span>
- What consistent naming methods are being used for data files or folders? <span class="small">[\[more\]](#naming)</span>
- Has any data in the set been collected from other sources, a.k.a. third-parties? If so, have you cleared any copyright concerns to use and re-publish this data? <span class="small">[\[more\]](#copyright_ip)</span>
- What specific tools or software are needed to view, process, or visualize the data? Is any proprietary software needed?"
- Who owns the data?
- Who is responsible for managing the data?
- Who will have access to the data during the project?

**Enabling Discovery of Your Data:**

- Who will be responsible for documenting the data (creating the metadata)? <span class="small">[\[more\]](#metadata)</span>
- What standards will be used for the metadata (e.g. XML-based like EML, Dublin Core)? <span class="small">[\[more\]](#standards)</span>
- Have you used any formal specialized vocabularies, code lists, thesauri, or taxonomies (e.g. [phylogenetic taxonomies](http://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html/index.cgi?chapter=resources), [ISO topics](https://marinemetadata.org/references/isotopics))?
- Have you used any customized abbreviations or shorthand? Are they explained in full in the data documentation? <span class="small">[\[more\]](#bestpractices)</span>

**Enabling Long-term Storage of Your Data:**

- Where will the data be stored during the project? <span class="small">[\[more\]](#storing)</span>
- What backup measures will be implemented?
- Where will the data be archived for long-term storage? <span class="small">[\[more\]](#depositing)</span>
- Will you expect to alter or update archived data, or is it permanently finished once archived?
- How long should the data be stored by an archive or repository?
- How large is the dataset, and if relevant, what is its anticipated rate of growth? (e.g. MB/year)

**Enabling Sharing of Your Data:**

- How should the data be made accessible?
- Who are the potential audiences for the data?
- How could the data be re-used and re-purposed?

**Copyright, Security, Privacy Concerns:**

- Does the dataset include any sensitive information subject to confidentiality concerns?
- If possible, describe any required or special measures required by funders, lab, or IRB.
- Will the data be collected in the United States or other? If so, where?
- Do the data have unique identifiers?

**Enabling Citation of Your Data:**

- What publications, discoveries, or further datasets have resulted from the data?
- Who will receive credit for authoring the data? In what order, if any, should the authors be given?
- What organizational name should be referenced in citing the data?

### Data Management Plan (DMP) Examples and Templates

[DMPTool](https://dmptool.org) - helps to generate a data management plan compliant with funding agency requirements, including NSF and NIH.

<div id="iframe" class="text-center">
    <iframe src="//player.vimeo.com/video/82408192" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

[DMP Template from DataONE](http://www.dataone.org/data-management-planning)

[Example Plans from UC San Diego](https://library.ucsd.edu/research-and-collections/data-curation/dmp-samples.html)

[Example Plans from the Inter-University Consortium for Social and Political Research (ICPSR)](http://www.icpsr.umich.edu/icpsrweb/content/datamanagement/dmp/resources.html) - includes examples from the natural sciences

[How to Write an NSF Data Management Plan](https://lternet.edu/writing-a-data-management-plan-for-your-nsf-proposal/) - From James Brunt of LTER

[NSF Data Management Plans](http://wikis.ala.org/acrl/index.php/NSF_Data_Management_Plans) - A list of resources from the Association for College and Research Libraries

------------------------------------------------------------------------

## Data Documentation & Metadata

### What is Metadata?

Metadata is "data about data." This is a circular definition; so to simplify, think of a book you like. 
The title of that book is a piece of metadata; also the author, date published, etc.

Pieces of information about an item are called **metadata fields** (think of a column heading in a spreadsheet), i.e. "Title," "Author," "Date," etc.

A group or list of those fields that apply to one item (think of a row in a spreadsheet) equals a **metadata record**.

Often, these records are formatted in a specific way, based on a **metadata standard**. A standard is a recognized and established format for the recording of metadata records.

For example, Dublin Core, a simple and effective standard, requires that each record include, at minimum these 15 elements:

> 1\. Title 2. Creator 3. Subject 4. Description 5. Publisher 6. Contributor 7. Date 8. Type 9. Format 10. Identifier 11. Source 12. Language 13. Relation 14. Coverage 15. Rights
>
> (These elements are explained [here](http://dublincore.org/documents/dces/).)

All this is done in order to contextualize the information stored electronically so that other people, as well as computers, can find and understand your data in the future. 
This is because indexes, catalogs and search engines run searches on metadata, not data.
If you want others to find your data, you first have to create metadata.

### Commonly Used Metadata Standards

In the case of datasets, metadata provides information regarding the who, what, when, where, how, etc. of a a dataset. 
This information will likely need to be recorded in a certain format in order to meet a recognizable standard. 
Check with a [librarian]({{ '/about/liaisons.html' | relative_url }}) or the depository into which you plan to deposit your data before you establish a plan for your metadata, to be sure you are following the correct guidelines.

Here is some information on common metadata standards, as well as some examples:

<div class="table-responsive-sm">
    <table class="table table-bordered">
    <caption>List of commonly used metadata standards</caption>
    <thead class="thead-light">
        <tr>
        <th scope="col" rowspan="1" colspan="1">Disciplinary Area</th>
        <th scope="col" rowspan="1" colspan="1">Metadata Standard</th>
        <th scope="col" rowspan="1" colspan="1">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td class="align-middle">General</td>
        <td class="align-middle">
            <a href="http://dublincore.org/" target="blank">Dublin Core (DC)</a>
        </td>
        <td class="align-middle">Widely used in disciplinary and institutional repositories.</td>
        </tr>
        <tr>
        <td rowspan="2" scope="rowgroup" class="align-middle">Life Sciences</td>
        <td scope="row" class="align-middle">
            <a href="http://rs.tdwg.org/dwc/index.htm" target="blank">Darwin Core</a>
        </td>
        <td class="align-middle">Designed to facilitate the sharing of information about biological diversity. It is primarily based on taxa, their occurrence in nature as documented by observations, specimens, and samples and related information.</td>
        </tr>
        <tr>
        <td scope="row" class="align-middle">
            <a href="http://knb.ecoinformatics.org/software/eml/" target="blank">Ecological Metadata Language (EML)</a>
        </td>
        <td class="align-middle">Consists of XML modules that can be used to document ecological datasets. A good standard for non-spatial environmental data.</td>
        </tr>
        <tr>
        <td rowspan="2" scope="rowgroup" class="align-middle">Humanities</td>
        <td scope="row" class="align-middle">
            <a href="http://jennriley.com/metadatamap/" target="blank">Seeing Standards: A Visualization of the Metadata Universe</a>
        </td>
        <td class="align-middle">Information on 105 cultural heritage metadata standards.</td>
        </tr>
        <tr>
        <td scope="row" class="align-middle">
            <a href="http://tei-c.org/" target="blank">Text Encoding Initiative (TEI)</a>
        </td>
        <td class="align-middle">A widely-used standard for representing textual materials in XML.</td>
        </tr>
        <tr>
        <td rowspan="2" scope="rowgroup" class="align-middle">Social Sciences</td>
        <td scope="row" class="align-middle">
            <a href="http://www.ddialliance.org/" target="blank">Data Documentation Initiative (DDI)</a</td> <td class="align-middle">A metadata specification for the social and behavioral sciences created by the Data Documentation Initiative. Used to document data through its lifecycle and to enhance dataset interoperability.</td>
        </tr>
        <tr>
        <td scope="row" class="align-middle">
            <a href="http://sdmx.org/?page_id=10" target="blank">Statistical Data and Metadata Exchange (SDMX)</a>
        </td>
        <td class="align-middle">A self-describing data format that both provides metadata and a method of data transmission. It is primarily used in "the world of offical statistics," such as the EU, WHO, UNESCO, World Bank, and US Reserve Banks.</td>
        </tr>
        <tr>
        <td rowspan="2" scope="rowgroup" class="align-middle">Geospatial</td>
        <td scope="row" class="align-middle">
            <a href="http://www.fgdc.gov/metadata/geospatial-metadata-standards" target="blank">Content Standard for Digital Geospatial Metadata (CSDGM)</a>
        </td>
        <td class="align-middle">CSDGM, Vers. 2 (FGDC-STD-001-1998) is the current US Federal Metadata standard. The Federal Geographic Data Committee (FGDC) originally adopted the CSDGM in 1994 and revised it in 1998. According to Executive Order 12096, all Federal agencies are ordered to use this standard to document geospatial data created as of January 1995. The standard is often referred to as the 'FGDC Metadata Standard' and has been implemented beyond the federal level with State and local governments adopting the metadata standard as well. See
            <a href="http://www.fgdc.gov/metadata/documents/preparing-for-international-metadata-guidance.pdf">this PDF document</a> for guidance on moving from CSDGM to ISO.</td>
        </tr>
        <tr>
        <td scope="row" class="align-middle">
            <a href="http://geo-ide.noaa.gov/wiki/index.php?title=ISO_FAQ" target="blank">ISO 19115-2:2009</a> (Click "Proceed Anyway")</td>
        <td class="align-middle">Geographic information - Metadata - Part 2: Extensions for imagery and gridded data. This is an international standard for describing geographic information and services. Part 2 added content for ISO 19115 that supports the documentation of imagery, gridded data and other remotely sensed data such as monitoring stations.</td>
        </tr>
        <tr>
        <td rowspan="2" scope="rowgroup" class="align-middle">Physical Sciences</td>
        <td scope="row" class="align-middle">
            <a href="http://www.cgd.ucar.edu/cms/eaton/netcdf/CF-20010629.htm" target="blank">NetCDF Climate and Forecast (CF) Metadata Conventions</a>
        </td>
        <td class="align-middle">The NetCDF Climate and Forecast (CF) Metadata Conventions are designed to promote the interoperable processing and sharing of data from netCDF files. They are focused on data use while the NetCDF Attribute Conventions are focused on data discovery.</td>
        </tr>
        <tr>
        <td scope="row" class="align-middle">
            <a href="http://his.cuahsi.org/wofws.html#waterml" target="blank">WaterML</a>
        </td>
        <td class="align-middle">Water Markup Language is an XML-based information exchange schema used in water data services by the Hydrological Information System (HIS). Produced by the Consortium of Universities for the Advancement of Hydrologic Science (CUAHSI), this schema helps enable the discovery and analysis of water-related data.</td>
        </tr>
    </tbody>
    </table>
</div>

### Best Practices for Metadata

Metadata should be recorded both at the project level and at the data level. 
At the project level, this information is often referred to as documentation.

Good data documentation includes information on:

- the context of data collection: project history, aims, objectives and hypotheses
- data collection methods: data collection protocol, sampling design, instruments, hardware and software used, data scale and resolution, temporal coverage and geographic coverage
- dataset structure of data files, cases, relationships between files
- data sources used
- data validation, checking, proofing, cleaning and other quality assurance procedures carried out
- modifications made to data over time since their original creation and identification of different versions of datasets
- information on data confidentiality, access and use conditions, where applicable

At the data-level, datasets should also be documented with:

- names, labels and descriptions for variables, records and their values
- explanation of codes and classification schemes used
- codes of, and reasons for, missing values
- derived data created after collection, with code, algorithm or script used to create them
- weighting and grossing variables created
- data listing with descriptions for cases, individuals or items studied

More best practices information - especially for the ecological and environmental sciences can be found on the [DataONE website](http://www.dataone.org/all-best-practices).

------------------------------------------------------------------------

## Data Sharing & Preservation

### File Formats

The format you use to represent your data is one of the main factors for determining how likely someone else will be able to use your data in the future.

Eventually, much of the hardware and software we use today will likely become obsolete, so it's important to make the effort now to *use formats that are most likely to remain accessible* in the future. 
It's also important to use formats that save as much of the original information as possible.

**Guidelines for choosing appropriate file formats:**

- Choose formats that are non-proprietary.
    Example: Instead of saving your spreadsheet as an Excel file (.xls), save it as a Comma Separated Values file (.csv).
- Use formats that do not compress your data.
    Example: For images, use a TIFF format rather than a GIF or JPEG format that automatically compresses (and therefore deletes!) information in your file.
- Use formats that are in common usage by the research community.
    Example: HTML and CSV files are formats that have been widely adopted for use and are readable by a wide variety of software.
- Use formats that are unencrypted. Data security, we know, is important, but an encrypted dataset whose key has been lost (say the password is forgotten) is no dataset at all.

**Preferred formats:**

- Image: JPEG, JPG-2000, PNG, TIFF
- Text: HTML, XML, PDF/A, UTF-8, ASCII
- Audio: AIFF, WAVE
- Containers: TAR, GZIP, ZIP
- Databases: prefer XML or CSV to native binary formats

### File and Folder Naming

There are many guidelines out there regarding the best ways to name your files. 
These guidelines help one organize their files, prevent accidental deletion, and help others in the future better understand the file's contents from its filename.

**General Guidelines**

- Decide on a naming and organizational convention among you and your collaborators.
- Be consistent using it for files, folders, and directory structures. It will help others sharing your files and others accessing your files in the future to better intuit the nature and organization of your files.
- Use names that describe the contents of the file or folder: Include relevant location, date, and version information in the filename.
  - **For locations**: Use abbreviations for frequently used sites and include a plain text file in the file's folder that explains any abbreviations used in the naming.
  - **For dates**: Use the format recommended by the International Standards Organization (ISO 8601): YYYY-MM-DD.
  - **For versioning**: Include a version number at the end of the file name (such as "v01"). Change the number each time you save, and substitute the word "FINAL" for the final version number.
- Use names for files and folders that include a Unique Identifier (i.e. Project name or Grant \#).
- At the same time, try to keep names under 32 characters or less.
- Avoid using the following characters in your names: "/ \\ : \* ? " \< \> \[ \] & $. These characters have specific meanings in your computer's operating system that could result in misreading or deleting these files
- When using sequential numbering, make sure to use leading zeros to allow for multi-digit versions. For example, a sequence of 1-10 should be numbered 01-10; a sequence of 1-100 should be numbered 001-100 (e.g. the 11th item would be numbered 011).
- Use only one period and have it appear before the file extension (e.g. name\_paper.doc NOT name **.** paper **.** doc OR name\_paper **..** doc)
- Use underscores (\_) rather than spaces to separate terms.

### Storing and Backing Up Your Data (Short Term Archiving)

In order to to properly safeguard your data files, you should both **STORE** your data in a secure location that you can readily access and **BACKUP** your data in a separate physical location from those files in storage.

Here is what we mean by Storage and Backup: 
**Storage** refers to preserving your data files in a secure location you can access readily. 
**Backup** refers to preserving additional copies of your data in a separate physical location from data files in storage.

Storage systems often provide mirroring, in which data is written simultaneously to two drives. 
This is not the same thing as backup since alterations in the primary files will be mirrored in the second copy.

Backup preserves older copies so you can restore your data if accidental deletion/alteration or a disaster such as fire, flood, or hardware malfunction damages your data in storage.

When it comes to safeguarding your important data assets, remember both storage and backup are essential!

#### Storing Your Data

Your data should be stored somewhere that is accessible and secure at the very least. 
Using a service like [Dropbox](http://dropbox.com/), [Mozy](http://mozy.com/), [Carbonite](http://www.carbonite.com), or [ADrive](http://www.adrive.com/) will help you store and maintain the integrity of your data files across different computers and locations.

Many of these services provide mirroring services that will link a folder on your computer's hard drive with a folder stored on an online server. 
This means that when you save or make changes to files stored on your hard drive, those files are added or revised to in their online storage locations as well.

#### Backing up Your Data

Following a good storage routine is one way to ensure your data is backed-up to some extent. 
However, to mitigate any losses of data, one should backup their data on a regular basis to another server or external hard drive that resides in a different physical location than your stored data.

A simple way to do this is to backup your data on a regular basis to an external hard drive that you store at your home rather than at your office. 
You can also upload your data to another cloud storage service (such as those mentioned above) on an ongoing basis.

**Caution:** Having too many backups can be as detrimental to the authenticity and preservation of your files as having none at all. 
Once you establish a protocol, follow it, and when you backup your data, make sure you do not create multiple copies of the same files or versions of files in different locations.
Backup to one location, and keep that location ordered and updated.

#### Storing and Backing Up Your Lab's Data

Labs present a special problem for the storage and backup of data, as the large amount of data and the varying number of people who have access to that data can threaten the preservation of that data. 
Establishing protocols for both the storage and backup of that data can help avoid problems in this regard. 
Particularly, using a mirroring service, like those mentioned above, or a shared server, can help members of the lab to avoid losing any data.

### Depositing Your Data in a Repository (Long Term Archiving)

There are many reasons to share your data with the world at large. 
Not least among these reasons is that several publishers and national funding agencies require you to do so. 
Sharing your data also, and more altruistically, allows your data to be used to answer other questions, both now and in the future. 
Most importantly, sharing data makes your papers more likely to be cited by other scientists: [One study](http://dx.doi.org/10.1371/journal.pone.0000308) found a 69% increase in citations for articles whose associated data were available online.

#### At the University of Idaho

#### Northwest Knowledge Network (NKN)

The University of Idaho is developing the Northwest Knowledge Network, a data repository for the Northwest. 
NKN can accommodate most types of data, with an early emphasis on environmental and ecological data.

For more information, visit the website: <http://www.northwestknowledge.net>

#### INSIDE Idaho - Geospatial Data

INSIDE Idaho is the official geospatial data clearinghouse for the State of Idaho. 
INSIDE Idaho serves as a comprehensive geospatial data digital library, providing access to, and a context within which to use, geospatial data and information by, for, and about Idaho.

For more information, visit the website: [www.insideidaho.org](https://www.insideidaho.org/)

#### Other Options

View the [Re3data.org](http://www.re3data.org/) list of disciplinary repositories. 
Note: Not all of the repositories listed can ensure long-term preservation of your data; contact each one for more details. 
This list contains suggestions and is not necessarily complete.

------------------------------------------------------------------------

## Copyright and Intellectual Property of Data

Copyright as it applies to data can be very complex. 
The information on this page is provided for informational purposes only, and should not be relied upon as definitive. 
If you are at all uncertain as to your specific rights, researchers are advised to seek counsel.

#### Some general guidelines:

- Data cannot be copyrighted, but a particular expression of data (e.g. graph, chart) can be. These expressions generally fall under the same guidelines as [copyright protection for literature]({{ '/copyright/' | relative_url }}).
  - Although the expression may be copyrighted, the underlying data is still not protected.
- As with any copyright, copyright for data varies from country to country.
- A [Creative Commons](http://creativecommons.org/) license can be attached to your data to explicitly promote sharing and unlimited use.

#### Data from other sources:

- **Original Data**
  - Be aware of any restrictions or licensing issues with any *third-party* original data that you are using.
  - If there is any question about your ability to use or reproduce data, contact the owner and/or publisher of the data.

- **Databases**
  - As [defined](http://www.copyright.gov/docs/regstat092303.html) by the US Copyright Office, a "database" is compilation - "a work formed by the collection and assembling of preexisting materials or of data." [17 U.S.C. 101](https://www.law.cornell.edu/uscode/text/17/101)
  - A database can be copyrighted if the compilation is sufficiently original. For example, the US Supreme Court decided in Feist Publications v. Rural Telephone Service Co.(1991) that the information contained in telephone directory white pages is not copyrightable due to the lack of originality in the compilation, selection or arrangement. However, in a decision by the US Second Circuit appeals court in Key Publications, Inc. v. Chinatown Today Publishing Enterprises Inc. (1991), yellow pages listings do show sufficient originality to be copyrighted.

Additional resources:

- [Summary of court decisions related to databases](http://www.copyright.gov/reports/db4.pdf) \[PDF\]
- [Creative Commons for Science](http://creativecommons.org/science/)
- [National Academy of Engineering - *The Responsible Collection, Retention, Sharing, and Interpretation of Data*](http://www.onlineethics.org/cms/research/modindex/moddata.aspx)

------------------------------------------------------------------------

## Citing Data

Why cite data? 
Keep in mind that citing data helps increase its visibility and acceptance, incorporates it into the scholarly record, gives credit to the creators of the data, provides authentication to your research, and encourages others to do the same.

Data citation formats are still a work in progress. 
Some data centers and style manuals provide guidelines and examples. 
If you are following a particular style manual, try to form the citation according to the general rules of that style. 
It is usually better to provide more information rather than less.

#### Parts of a General Citation:

1.  Responsible party
2.  Title of dataset
3.  Edition or version of dataset, if applicable
4.  Name and location of data center, repository, or publisher
5.  Date data was published
6.  Analysis software, if required
7.  Date accessed
8.  URL, DOI, or other persistent link
9.  Parameters selected, if applicable

#### APA 6th Edition Data Citation Guidelines

Dataset

- Author/Rightsholder. (Year). Title of data set (Version number) \[Description of form\]. Location: Name of producer.

or

- Author/Rightsholder. (Year). Title of data set (Version number) \[Description of form\]. Retrieved from http://...

Unpublished raw data from study, untitled work

- Author, F. N. (Year). \[Description of study topic\]. Unpublished raw data.

#### American Chemical Society Guidelines

- *Title*; Publisher: Place of Publication, Date; Data Entry Number, Figure Titles or other identifying information.

#### Data Citation Examples:

> Bachman, Jerald G., Lloyd D. Johnston, and Patrick M. O'Malley. Monitoring the Future: A Continuing Study of American Youth (12th-Grade Survey), 1998 \[Computer file\]. Conducted by University of Michigan, Survey Research Center. ICPSR02751-v1. Ann Arbor, MI: Inter-university Consortium for Political and Social Research \[producer and distributor\], 2006-05-15. http://dx.doi.org/10.3886/ICPSR02751.

> Hall, D. K., G. A. Riggs, and V. V. Salomonson (2000), MODIS/Terra Snow Cover 5-Min L2 Swath 500m, Version 4, October 2007 to April 2008, http://nsidc.org/data/mod10\_l2.html, Natl. Snow and Ice Data Cent., Boulder, Colo. (Updated daily.)

> Pew Hispanic Center. (2008). 2007 Hispanic Healthcare Survey \[Data file and code book\]. Retrieved from http://pewhispanic.org/datasets/

> Smith, J.A. (2006). \[Personnel survey\]. Unpublished raw data.

#### Additional Resources:

[Earth Science Information Federation (ESIP) Citation Guidelines for Data](http://wiki.esipfed.org/index.php/Interagency_Data_Stewardship/Citations#Citation_Guidelines)

[Dryad Data Citation Guidelines](http://wiki.datadryad.org/Citing_Data)

[Inter-university Consortium for Political and Social Research (ICPSR) Data Citation Guidelines](http://www.icpsr.umich.edu/icpsrweb/content/DATAPASS/citations.html)

[Roper Center Data Citations](https://ropercenter.cornell.edu/how-to-cite-roper-center-data/)

------------------------------------------------------------------------

## Contact Us

If you have any questions about data management, please contact [Jeremy Kenyon](mailto:jkenyon@uidaho.edu) or the library [Reference Desk](https://www.lib.uidaho.edu/help/)

#### Data Services Team

**Jeremy Kenyon**, Natural Resources Librarian, <jkenyon@uidaho.edu>, (208) 885-7955

**Devin Becker**, Head, Data & Digital Services, <dbecker@uidaho.edu>, (208) 885-7040

**Jylisa Doney**, Social Science Librarian, <jylisadoney@uidaho.edu>, (208) 885-0959

**Bruce Godfrey**, GIS Specialist, INSIDE Idaho, <bgodfrey@uidaho.edu>, (208) 292-1407

**Evan Williamson**, Digital Infrastructure Librarian, <ewilliamson@uidaho.edu>, (208) 885-6260

------------------------------------------------------------------------

## Acknowledgements

We would like to thank the following libraries and teams for permission to adapt content from their pages. 
We extend this courtesy to others who find our content useful.

- [California Digital Library](http://www.cdlib.org/services/uc3/dmp/index.html)
- [MIT Libraries](https://libraries.mit.edu/data-management/)
- [National Archives](http://www.archives.gov/records-mgmt/initiatives/sustainable-faq.html)
- [National Snow and Ice Data Center](http://nsidc.org/about/use_copyright.html)
- [University of Minnesota Libraries](http://www.lib.umn.edu/datamanagement)
- [University of Nebraska Libraries](http://libraries.unl.edu/datacuration)
- [University of Oregon](http://library.uoregon.edu/datamanagement/index.html)
- The University of Virginia's [Scientific Data Consulting Group](http://www2.lib.virginia.edu/brown/data/)
- [University of Wisconsin Libraries](http://researchdata.wisc.edu/)
