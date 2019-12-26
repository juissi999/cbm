// A build file for our project to minify css and javascript

const {src, dest} = require("gulp");
const uglifycss = require("gulp-uglifycss");
const minify = require('gulp-minify');

const builddir = "./build/";


function minifycss (cb) {
   src("css/*.css")
      .pipe(uglifycss({"uglyComments":true}))
      .pipe(dest(builddir));
   cb();
}

function minifyjs (cb) {
  src("app/*.js")
      .pipe(minify())
      .pipe(dest(builddir));
   cb();
}

function defaulttask(cb) {
   minifycss(cb);
   minifyjs(cb);
}

exports.default = defaulttask;