# Floor maps 

The library floor maps are maintained by the Physic Spaces team. 
The source files are stored in the Sharepoint, shared > Website > Floor maps.
Source is PSD files which should be used for making updates.

For the website, JPG images should be exported, and named like "stackmap1.jpg". 
From the full sized image a medium image should be created with a 400px width, and named like "stackmap1_md.jpg".

Files are at "/media/stackmaps/".

The floor maps are described in "_data/about_floor_maps.csv" (which is used to generate content on "about/maps.html"). 

## helpful

```
for f in *.jpg; do magick "$f" -resize 400x "${f%.jpg}_sm.jpg"; done
```
