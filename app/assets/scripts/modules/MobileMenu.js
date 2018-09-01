//importo jquery e lo do al simbolo del dollaro cosi posso utilizzarlo normalmente
import $ from 'jquery';


class MobileMenu {

	constructor() {
	//seleziono l`intero site-header per aggiungere il gradiente per il menu mobile
	this.siteHeader = $('.site-header');
	//seleziono l `icona che viene premuta quando sono su piccoli schermi`
	 this.menuIcon = $('.site-header__menu-icon');
	 //questo e il div nascosto che contiene il menu`
	 this.menuContent = $('.site-header__menu-content');
	 //per fare in modo che l`evento sia richiamato quando il browser carica dobbiamo richiamare il metodo 
	 this.events();
	}
    //definisco l`evento
	events() {
	//.bind(this) bind identifica cosa significa this al momento, senza bind togglethemenu avrebbe puntato sul menu content
	//scriveno this invece richiama il this iniziale che punta all`oggetto
	this.menuIcon.click(this.toggleTheMenu.bind(this));

	
	}
	//definisco la funzione che avverra` on click
	toggleTheMenu() {
	//il contenuto del menu e reso vusibile
	 this.menuContent.toggleClass("site-header__menu-content--is-visible");
	 //il contenuto ha un background che lo rende leggibile
	 this.siteHeader.toggleClass("site-header--is-expanded");
	 //l`icona viene tramutata in una x
	 this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}

}

//sistema interno a es6 per esportare classi 
	//export default nomeDellaClasse
export default MobileMenu;