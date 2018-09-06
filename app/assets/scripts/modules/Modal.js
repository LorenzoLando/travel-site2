import $ from 'jquery';
class Modal {
	constructor() {
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
	}

	events() {
		//clicking the open modal button
		//.bind(this) devo mantenere questo riferimento a this perche poi
		//nella funzione di sotto this punta ad altro?
		this.openModalButton.click(this.openModal.bind(this));
		//clicki the x close modal button
		this.closeModalButton.click(this.closeModal.bind(this));
		//pushes the escape key
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		//se il tasto premuto e escape
		if(e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		// non vogliamo che il bottone get-in-touch quando clikkato 
		  //faccia scrollare su la pagina
		return false;
	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");
	}
}

export default Modal;