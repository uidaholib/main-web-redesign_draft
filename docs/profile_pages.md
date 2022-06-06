# Staff Profile Pages

Profile pages for all employees are generated from "_data/about_people.csv" using the "profile.html" layout, via the "cb_page_gen" plugin.
The page url comes from the the "id" column, which should match the base of their email. 

## Image

Headshots are stored in "media/directory/".
Since the provide pages look best with a square image, I generally crop them to square, and add `_sq` to the filename.

I generally crop using [GIMP](https://www.gimp.org/).
If images are too big, I use [Squoosh](https://squoosh.app/) to optimize.

## Audio pronunciation

Audio files are stored in "media/directory/audio/".
The audio is added to the page as a very simple play button, using JS via html5 audio features.

People can record themselves on Windows using the built in "Voice Recorder" app.

The most compatible format with widest support is mp3 (see [html5 audio](https://en.wikipedia.org/wiki/HTML5_audio)).
To convert the format people provide (mp4, m4a, wav) to mp3, it is easiest to use [FFMpeg](https://ffmpeg.org/):

`ffmpeg -i example.mp4 output.mp3`

You might get some warnings, but the mp3 file should still be valid.
