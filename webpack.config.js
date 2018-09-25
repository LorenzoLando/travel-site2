//vogliamo creare un oggetto che configuri webpack
module.exports = {
  //indichiamo quale file webpack deve guardare per applicare le sue funzionalita`
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    //qui e dove vogliamo che il boudled file venga inserito
    path: "./app/temp/scripts",
    filename: "[name].js"
  },
  //da qui parte la configurazione di Babel
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        //regualr expression che dice a babel che lo vogliamo applicare solo ai file .js
        test: /\.js$/,
        //voglio escludere dal babel i file.js che sono i moduli di node
        exclude: /node_modules/
      }
    ]
  }
}