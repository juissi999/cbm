# cbm
Some years ago I saw a documentary related to happiness, anxiety etc.
In the program psychologists used a program to display multiple
faces to participants. One of the faces was having a happy emotion
while other faces had other emotions. The task was to find the face 
having happy emotion among others. This method was called Cognitive Bias
Modification.


These kind of programs were not available so one had to be made. Here is a simple
website-program performing CBM with JavaScript.

## Demo
https://juissi999.github.io/cbm/build/

## What to do?
Repeat the procedure of finding positive face.

## Scientific background
Wikipedia article:
https://en.wikipedia.org/wiki/Cognitive_bias_modification

Search scientifical articles for more detailed information.

## Using with custom images
Download and run on web-browser. Currently you need to add urls of face-images
manually to the code. In this version adding images requires you to add images
to happy_images/ and unhappy_images folders. After that you need to run 

`python build_imagedata.py`

to build javascript linker-file. You can also use images from the
internet by putting the whole URL to imagedata.js.
