var bouton = document.getElementById('compteur-heart')
var like   = document.getElementById('compteur-like')
var nombre = 990;

like.innerHTML = nombre;
bouton.onclick = function() {
	nombre++	
	return like.innerHTML = nombre 
}