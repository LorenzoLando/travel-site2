function Person(fullName, favColor ) {
	this.name = fullName, 
	this.favColor = favColor,
	this.greet = function() {
		console.log("Hello my name is " + this.name + " and my favourite color is " + this.favColor + " .");
	}
}
//Quando c`e` una funzione require questa si aspetta un oggetto
//Dobbiamo indicare esattamente cosa il file esporta quando e` richiesto
// export e` l`oggetto che viene richiamato da una funzione require in un altro file
// module e` l`oggetto parent di export
// quello che vogliamo esportare e la nostra funzione constructor il che si fa scrivendo: 
module.exports = Person;  //


