const gulp = require('gulp');
const sass = require('gulp-sass');
const watchSass = require("gulp-watch-sass");
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

gulp.task('sass', function() {
  gulp.src('scss/**/*.scss')
  	.pipe(sourcemaps.init())
  	.pipe(sass({style: 'expanded'}))
  	
  	.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
  	
    .pipe(sourcemaps.write())
    .pipe(concat('styles.scss'))
  .pipe(gulp.dest('css'))
});

gulp.task("sass:watch", () => {
  gulp.watch("scss/*.scss", ["sass"]);

})

