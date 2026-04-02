# Floor maps 

## Source Files

The library floor maps are maintained by Andrew, with the Physic Spaces team. 
The source files are stored in the Sharepoint, shared > Website > Floor maps.
Source is PSD files which should be used for making updates.

For the website, PNG images should be exported, and named like "stackmap1.png". 
From the full sized image a medium image should be created with a 400px width, and named like "stackmap1_md.png".

A PDF file "library_virtual_tour.pdf" is also created. 

## On the Website

Image files are at "/media/stackmaps/".

The floor maps are described in "_data/about_floor_maps.csv" (which is used to generate content on "about/maps.html"). 

## helpful

```
for f in *.png; do magick "$f" -resize 400x "${f%.png}_md.png"; done
```
