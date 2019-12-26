// A build file for our project to minify css and javascript

const gulp = require("gulp");
const uglifycss = require("gulp-uglifycss");
const minify = require('gulp-minify');

const builddir = "./build/";

gulp.task("css", function () {
   return gulp.src("css/*.css")
   .pipe(uglifycss({"uglyComments":true}))
   .pipe(gulp.dest(builddir))
});

gulp.task("minifyjs", function() {
  return gulp.src("app/*.js")
    .pipe(minify())
    .pipe(gulp.dest(builddir))
});