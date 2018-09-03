//importiamo jquery
import $ from 'jquery';

//metodo interno a es6 per importare file.js
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

//creiamo una nuova istance e la diamo a una variabile
	//mobileMenu e una nuova instance della classe MobileMenu();
var mobileMenu = new MobileMenu();

//vogliamo che differeneti elementi abbiano differenti offset 	
	//il primo e per i feature items 
 	//accetta due argomenti. l elemento selezionato e l offset
new RevealOnScroll($(".feature-item"), "85%");

//questo e per i testimonial
new RevealOnScroll($(".testimonial"), "60%");

