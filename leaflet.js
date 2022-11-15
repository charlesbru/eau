
	// fonction d'affiche d'un message texte dans la page html
	function afficheMessage(txt){
	message = txt;
	$ ("#information").html(txt);
	}
	// Au chargement de la page
$(document).ready(function(){
	$("#btnBienvenue").click(function(){
	afficheMessage('Bienvenue');
	});

	$("#btnWelcome").mouseover(function(){
	afficheMessage('Welcome');
	});
	
	//lié à la boite de saisie en HTML
	$("#btnSaisie").click(function() {
		valeur= $("#txtSaisie").val();
		console.log(valeur);
	})
if ($.isNumeric(valeur)){
  afficheMessage('Vous avez saisi un nombre');
}
else{
  afficheMessage('Vous avez saisi un texte');
}
});