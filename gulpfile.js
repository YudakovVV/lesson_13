const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concatCss    = require('gulp-concat-css');
const cleanCSS     = require('gulp-clean-css');

gulp.task('hello', function(done){
  console.log('Привет, мир!')
  done();
})

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {

  return gulp.src("src/sass/*.sass")
  
  .pipe(sass().on('error', sass.logError))
  
  .pipe(autoprefixer({
  
  browsers: ['last 2 versions'],
  
  cascade: false
  
  }))
.pipe(concatCss("style.css"))

.pipe(gulp.dest("src/css"))

.pipe(browserSync.stream());

});

gulp.task('mincss', function() {

return gulp.src("src/css/*.css")

.pipe(rename({suffix: ".min"}))

.pipe(cleanCSS())

.pipe(gulp.dest("app/css"));

})