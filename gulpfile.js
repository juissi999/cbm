// A build file for our project to minify css and javascript

const gulp = require("gulp");
const uglifycss = require("gulp-uglifycss");
const minify = require('gulp-minify');

const builddir = "./build/";

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

function watch_files() {
   gulp.watch("app/*.js", minifyjs);
   gulp.watch("css/*.css", minifycss);
}


const defaulttask = gulp.parallel(minifyjs, minifycss);
exports.default = defaulttask;
exports.watch = watch_files;