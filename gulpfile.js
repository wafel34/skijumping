/**
 * Module Dependencies
 */

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber');

var sassSources = './resources/sass/style.sass',
    outputDir;

    outputDir = './app/public';


var onError = function (err) {
    console.log(err);
    this.emit('end');
};
/**
 * Gulp Tasks
 **/

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync({
    proxy: "localhost:5000",  // local node app address
    port: 7000,  // use *different* port than above
    notify: true,
    watch: ['app/server.js']
  });
});

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'app/server.js',
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  })
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', function () {
    setTimeout(function () {
      reload({ stream: false });
  }, 1000);
  });
});

//SASS TO CSS
gulp.task('sass', function () {
    return gulp.src(sassSources)
            .pipe(plumber({
              errorHandler: onError
            }))
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(sourcemaps.write())
            //.pipe(gulpIf(env === 'production', minifyCss()))
            .pipe(gulp.dest(outputDir + '/css'))
            .pipe(browserSync.stream())
});

gulp.task('default', ['browser-sync', 'sass'], function () {
  gulp.watch(['public/*.html'], reload);
});
