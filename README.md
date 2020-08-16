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

https://juissi999.github.io/cbm/

## What to do?

Repeat the procedure of finding positive face.

## Scientific background

Wikipedia article:
https://en.wikipedia.org/wiki/Cognitive_bias_modification

Search scientifical articles for more detailed information.

## Installation

Run following commands on terminal

    git clone https://github.com/juissi999/cbm.git
    cd cbm
    npm install
    npm run build

The site is build to folder docs/.

## Using with custom images

See installation first. After npm install add happy images to folder

    src/assets/happy_images

add unhappy images to

    src/assets/unhappy_images

build site by typing to terminal

    npm run build

and host the site.
