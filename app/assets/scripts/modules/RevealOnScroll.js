import $ from 'jquery';
// per imprtare waypoints dobbiamo indicare il file specifico
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
 // selezioniamo gli elementi che vogliamo rivelare
 constructor(els, offset) {
 	this.itemsToReveal = els;
 	this.offsetPercentage = offset;
 	// vogliamo che gli elelementi siano nascosti appena la pagina carica
 		// chimiamo quindi immediatamente nel constructor il metodo per nascondere
 	this.hideInitially();
 	//vogliamo che il metodo relativo crei i waypointa appena la pagina carica
 	this.createWaypoints();
 
 }
//metodo per nascondere inizialmente gli elementi
 hideInitially() {
 	this.itemsToReveal.addClass("reveal-item"); 
 }

 //creo il metodo che permetta di utilizzare i waypoits
 createWaypoints() {
 	//per utilizzare this successivamente dobbiamo salvarla in una variabile a inizio metodo
 	var that = this;
 	//vogliamo creare un waypoint per ciascun(each) item della collection itemsToReveal
 	this.itemsToReveal.each(function(){
 		//currentItem e` l`elemento che e nel loop in quel momento
 		var currentItem = this;
 		//possiamo accedere l`oggetto waypoint perche abbiamo importato il file dalla waypoint library
 			//Waypoint object ha bisogno di proprieta`:
 				 //element = l`elelento della dom 
 				 //handler = funzione che dice cosa vogliamo che accada
 				 //offset = quando levento e triggerato di defaul e 0 ossia il top del nostro schermo 
 		new Waypoint({
 			element: currentItem,
 			handler: function(){
 				$(currentItem).addClass("reveal-item--is-visible");
 			},
 			offset: that.offsetPercentage
 		});
 	}); 
 }


}

export default RevealOnScroll;