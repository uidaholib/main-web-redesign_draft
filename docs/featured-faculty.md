# Featured faculty

Appear on:

- home page via includes `featurebar.html` + `js/home.js`
- /recognitions/featured-faculty.html 
- plus one page for each past year

Based on `_data/vivo_featured_researchers.csv`.
Images are in `/media/vivo-featured/` and should match `id` column + `.jpg`, i.e. vivo id.

CSV is created by Juan from VIVO export. (process??)

Add new featured researchers with a new value in year column to the table.

**Note:**

Images were originally named using lastname, which didn't work because they aren't unique. 
I renamed them to match vivo id, using https://www.advancedrenamer.com/user_guide/csvimport 
