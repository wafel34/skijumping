/**
 * Module Dependencies
 */

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    nodemon = require('gulp-nodemon');

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

gulp.task('default', ['browser-sync'], function () {
  gulp.watch(['public/*.html'], reload);
});
