// A build file for our project to minify css and javascript

const gulp = require("gulp");
const uglifycss = require("gulp-uglifycss");
const minify = require('gulp-minify');
const path = require("path")
const del = require("del")

const builddir = "./build/";

let unhappydir = "unhappy_images";
let happydir = "happy_images";

function minifycss () {
   return gulp.src("css/*.css")
      .pipe(uglifycss({"uglyComments":true}))
      .pipe(gulp.dest(builddir));
}

function minifyjs () {
   return gulp.src("app/*.js")
      .pipe(minify())
      .pipe(gulp.dest(builddir));
}

function processhtml() {
   return gulp.src("index.html").pipe(gulp.dest(builddir))
}

function removehappyimages() {
   return del(path.join(builddir, happydir), {force:true});
}

function removeunhappyimages() {
   return del(path.join(builddir, unhappydir), {force:true});
}

function addhappyimages() {
   return gulp.src(path.join(happydir, "*.png"))
          .pipe(gulp.dest(builddir))
}

function addunhappyimages() {
   return gulp.src(path.join(unhappydir, "*.png"))
          .pipe(gulp.dest(builddir));
}

function watch_files() {
   gulp.watch("app/*.js", minifyjs);
   gulp.watch("css/*.css", minifycss);
   gulp.watch("index.html", processhtml);
   gulp.watch(path.join(happydir, "/*.png"), addhappyimages);
   gulp.watch(path.join(unhappydir, "/*.png"), addunhappyimages);
}

const defaulttask = gulp.parallel(minifyjs, minifycss, processhtml, addhappyimages, addunhappyimages);
exports.default = defaulttask;
exports.watch = watch_files;