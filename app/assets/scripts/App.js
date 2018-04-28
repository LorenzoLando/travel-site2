// in questo progetto usando una versione vecchia di webpack per far andare il comando dobbiamo usare nella console
// npm run webpack
// importiamo jquery
var $ = require('jquery');
// importiamo il contenuto del file Person.js
var Person = require('./modules/Person'); 

// con la parola chiave new si crea una nuova istanza dell`oggetto Person
var lorenzo = new Person("Lorenzo Lando", "red");
var jane  = new Person("Jane Smith", "yellow");

lorenzo.greet(); 
jane.greet();

