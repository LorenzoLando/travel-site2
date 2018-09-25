import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		//selezioni tutte le img lazyload
		// this.lazyImages = $(".lazyload");
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint();
		//vogliamo selezionare una collezione con tutte le pagine
		this.pageSections = $(".page-section");
		//seleziono tutti i link element della primary-nav
		this.headerLinks = $(".primary-nav a");
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
		// this.refreshWaypoints();
	}


	// refreshWaypoints() {
	// 	this.lazyImages.on('load', function(){
	// 		Waypoint.refreshAll();
	// 	})
	// }

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}
	
	//waypoint per l`header
	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			// element si aspetta un elemento standard? javascript, prendendo il primo elemeento della collezione jquey ottengo questo
			element: this.headerTriggerElement[0],
			handler: function(direction){
				if(direction == "down") {
				  that.siteHeader.addClass("site-header--dark");
				} else {
				 that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}
	
	//waypoints per le sezioni 
	createPageSectionWaypoints() {
		var that = this;
		this.pageSections.each(function(){
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if(direction == "down") {
						// matchingHeaderLink = la prima volta e` il primo selettore jquery 
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					} 
				},

				offset: "18%"
			});
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if(direction == "up") {
						// matchingHeaderLink = la prima volta e` il primo selettore jquery 
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					} 
				},

				offset: "-40%"
			});
		});
	}
}

export default StickyHeader;