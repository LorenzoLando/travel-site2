//importo jquery e lo do al simbolo del dollaro cosi posso utilizzarlo normalmente
import $ from 'jquery';


class MobileMenu {

	constructor() {
	//seleziono l `icona che viene premuta quando sono su piccoli schermi`
	 this.menuIcon = $('.site-header__menu-icon');
	 //questo e il div nascosto che contiene il menu`
	 this.menuContent = $('.site-header__menu-content');
	 //per fare in modo che l`evento sia richiamato quando il browser carica dobbiamo richiamare il metodo 
	 this.events();
	}
    //definisco l`evento
	events() {
	this.menuIcon.click(this.toggleTheMenu);
	
	}
	//definisco la funzione che avverra` on click
	toggleTheMenu() {
	
	 this.menuContent.toggleClass(".site-header__menu-content--is-visible");

	}

}

//sistema interno a es6 per esportare classi 
	//export default nomeDellaClasse
export default MobileMenu;