const gulp         = require('gulp');
const browserSync  = require('browser-sync').create();
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concatCss    = require('gulp-concat-css');
const cleanCSS     = require('gulp-clean-css');
const rename       = require("gulp-rename");

gulp.task('serve', ['sass'], function() {

browserSync.init({

server: "src/"

});

gulp.watch("../sass/*.sass", ['sass']);

gulp.watch("../*.html").on('change', browserSync.reload);

});

gulp.task('sass', function() {

return gulp.src("../sass/*.sass")

.pipe(sass().on('error', sass.logError))

.pipe(autoprefixer({

browsers: ['last 2 versions'],

cascade: false

}))

.pipe(concatCss("style.css"))

.pipe(gulp.dest("../css"))

.pipe(browserSync.stream());

});

gulp.task('mincss', function() {

return gulp.src("../css/*.css")

.pipe(rename({suffix: ".min.css"}))

.pipe(cleanCSS())

.pipe(gulp.dest("../css"));

})