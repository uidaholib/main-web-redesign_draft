# LibApps customization

Custom header and footer for LibApps are maintained in this project in the "lib-apps" folder. 
There is four parts.
First, three chunks of code that are pasted into the LibApps platform's customization options:

- "custom-header.html" (pasted into the System Settings - Pages Look & Feel > Header & Footer > Header box) - adds standard library header
- "custom-footer.html" (pasted into the System Settings - Pages Look & Feel > Header & Footer > Footer box) - adds standard library footer
- "custom-js-css.html" (pasted into the System Settings - Pages Look & Feel > Custom JS/CSS  > Custom CSS box) - adds our google analytics, university fonts, custom external css file, some custom css overrides

Second, a customized version of our main CSS file that provides our styles and overrides for LibApps styles:

- assets/css/libapps-custom.scss (bootstrap 3 version)
- assets/css/libapps-custom5.scss (bootstrap 5 version)
- _sass/_libapp.scss (partial with css)

This custom css file lives on the library server with other website assets.
It is referenced in the "custom-js-css.html" customization.

## Background 

LibGuides/LibCal/LibAnwsers currently use bootstrap 3. 
The library website uses bootstrap 4, and required extensive css workaround to make the header and footer work. 

LibApps is rolling out a new bootstrap 5 based version, starting with A-Z list in Jun 2024. 
Thus, a separate bootstrap 5 version of the customizations is now maintained.
