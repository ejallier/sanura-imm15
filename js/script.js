$(document).ready(function(){

	//Liste des éléments HTML, et leur stockage dans des variables

	var $hamburger = $(".hamburger");
	var $menuPrincipal = $(".menu-principal");

	//gestion des évènements

	$hamburger.click(toggleMenu);
	//Quand je clique sur $hamburger,
	//je lance la fonction toggleMenu

	//gestion des fonctions

	function toggleMenu(){
		$menuPrincipal.toggleClass('open');
	}

});
