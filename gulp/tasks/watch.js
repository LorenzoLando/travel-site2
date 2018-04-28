var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create(); //new way to write variables



gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here.");
});



//we create a task named watch 

gulp.task('watch', function() {


  //we use the init to initialise the package


  browserSync.init({

    //it sets a local server and we poit it to the folder with the index

    server: {
      baseDir: "app"
    }

  });

  //it uses the gulp plug-in watch the first argument is the file to watch the second the action in this case is start the
  //task named 


  watch('./app/index.html', function() {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });
// guardo tutti i file .js contenuti nella cartella scripts
  watch('./app/assets/scripts/**/*.js', function() {
 // se vengono modificati e salvati parte la task scriptsRefresh definita in questo file 
    gulp.start('scriptsRefresh');
  })

});

//explanation
//1-create a new task this task is triggered even in gulp watch
//because is in the function of the watch css function
//aggiungendo un terzo argomento styles alla task noi obblighiamo far muovere tutti lo style prima

gulp.task('cssInject',['styles'] ,function(){

 return  gulp.src('./app/temp/styles/styles.css')
          .pipe(browserSync.stream());

});

// la task scriptRefresh parte solo dopo completamento si [scripts]
gulp.task('scriptsRefresh',['scripts'], function() {
  // reload brvser sinc in questa maniera browser sync funziona anche per il file .js
  browserSync.reload();
});