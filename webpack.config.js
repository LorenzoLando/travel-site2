// serve importare path in modo  da rendere il path di sotto assoluto e non relativo
	// 
var path = require('path');


module.exports = {
	// vogliamo indicare il file principale a webpack
	entry: "./app/assets/scripts/App.js",
	output: {
		// utilizziamo il metodo di path resolve
			// resolve accetta due parametri __dirname, il percorso relativo che occorre
				// in questo modo il percorso e` visto da webpack come assoluto
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "App.js"
	}
}