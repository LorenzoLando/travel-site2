//importo jquery e lo do al simbolo del dollaro cosi posso utilizzarlo normalmente
import $ from 'jquery';


class MobileMenu {

	constructor() {
	//seleziono l `icona che viene premuta quando sono su piccoli schermi`
	 this.menuIcon = $('.site-header__menu-icon');
	 //questo e il div nascosto che cotiene il menu`
	 this.menuContent = $('.site-header__menu-content');
	 //fire up l evento	
	 this.events();
	}
    //definisco l`evento
	events() {
	this.menuIcon.click(this.toggleTheMenu.bind());
	}
	//definisco l azione successiva all evento
	toggleTheMenu() {
		
	 this.menuContent.toggleClass(".site-header__menu-content--is-visible");
	}

}

//sistema interno a es6 per esportare classi 
	//export default nomeDellaClasse
export default MobileMenu;