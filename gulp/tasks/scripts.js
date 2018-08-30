//importiamo gulp
var gulp = require('gulp'),
//importiamo webpack dopo averlo installato localmente
webpack = require('webpack');

gulp.task('scripts', function(callback) {
//richiedo il file di configurazione  
  webpack(require('../../webpack.config.js'), function(err, stats) {
    
  	//se ce un errore
    if (err) {
    	//logghiamo el statistiche di errore in una string
      console.log(err.toString());
    }

    console.log(stats.toString());
    //faccio capire a gulp quando webpack e` completato
    callback();
  });
});