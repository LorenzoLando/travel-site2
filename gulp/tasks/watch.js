var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });
  //controllo calbiamenti nel html e in caso il browser reload
  watch('./app/index.html', function() {
    browserSync.reload();
  });
  //constrollo cambiamenti nel css e gli ignetto nel file css budled
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });
  //controllo cambaimenti nel javascript 
  watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  })

});


gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

//scriptsRefresh non si avvia fiche la task scripts nell altro file non si e completata
gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
});