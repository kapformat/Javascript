//saisir nombres dans textSaisi
//recuperer nombres dans textSaisi
//ecrire les nombre dans h2


var btn = document.getElementById('btn');
var listeSaisie = "";
var sommeSaisie = 0;
var nbClick = 0;
var moyenne = 0;


document.getElementById('saisiText').focus();
btn.addEventListener('click',somme);

function somme()
{	
	document.getElementById('btn2').style.visibility=hidden;
	var saisieUser = document.getElementById('saisiText').value;
	if(saisieUser != 0)
	{
		if(listeSaisie != "")
		{
			listeSaisie = listeSaisie + ', ' + saisieUser;
			
		}
		else
		{
			listeSaisie = saisieUser;
		}
		document.getElementById('h2').innerHTML = listeSaisie;
		document.getElementById('affichageMoyenne');
		sommeSaisie = sommeSaisie + Number(saisieUser);
		nbClick = nbClick +1;
		document.getElementById('saisiText').value="";
		document.getElementById('saisiText').focus();
	}
	else
	{
		document.getElementById('affichageResultat').innerHTML = sommeSaisie;
		document.getElementById('affichageMoyenne').innerHTML = parseFloat(sommeSaisie/nbClick).toFixed(2);
		document.getElementById('saisiText').value="";
		document.getElementById('saisiText').focus();
		document.getElementById('btn2').style.visibility=visible;
	}
	

}
// function r

















// var affiche = document.getElementById('h2').addEventListener('keypress', clik);

// function somme(saisiUser)
// {	var sommeTotale = 0;
	// for (var i = 0 ; i < saisiUser.length; i++)
	// {
		// sommeTotale = sommeTotale + saisiUser[i];
		
		// return sommeTotale;
	// }
// }
















// function clik()
// {
	// if(event.key == 96)
	// {
		// affiche.innerHTML = 'sommeTotale';
	// }
// }
























// var nombreSaisi = document.getElementById('saisiText').value;
// var affiche = document.getElementById('h2');
// var tableau = [];

// function somme(tab){
	// var sommeA;
	// for (var i = 0; i < tab.length; i++)
	// {
	// sommeA +=  tab[i];
	// console.log(sommeA);
	// }
	// return sommeA;
// }

// function moyenne(sommeA, tabLength)
// {
	// return sommeA/tabLength;
// }
	
// function click()
// {
	// var clik = document.getElementById('btn');
	// clik.addEventListener('keydown', function(e)
	// {
		// if (e.keyCode == 96) 
		// {							
			// affiche.innerHTML = somme(tab), moyenne(sommeA, tabLength);
		// }
		// else
		// {
			// preventDefault();
		// }
	// });
// }





	




// var moyenne = somme/suiteNombre[i];
// var click = document.getElementById('btn').addEventListener('keydown',clik);


// function clik(e)
// {
	// switch(click(e)){
		// case:
// };