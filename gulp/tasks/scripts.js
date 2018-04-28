//richiedo gulp
var gulp = require('gulp'),
//richiedo webpack installato localmente
webpack = require('webpack'); 

//creo una task che permetta di richiedere il file di configurazione di webpack
// il paramentro callback serve a far si che gulp sappia quando webpack ha completato
gulp.task('scripts', function(callback) {
	// posso utilizzare la variabile webpack che contiene webpack tutto intero
	webpack(require('../../webpack.config.js'), function(err, stats) {
// if statement che serve a loggare eventuali errori
		if (err) {
			// il fatto che venga portato a to.string rende leggibile l`errore
			console.log(err.toString());
		}
		// voglio comunque loggare eventuali stats
		console.log(stats.toString());
		// callback() permette a gulp di capire quando webpack e` stato completato
		callback();
	});
});