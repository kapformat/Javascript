//Savoir si ma variable existe à cet endroit là:
var maVariable;
if (maVariable)
{
    alert('COntient des informations !');
}
else
{
    alert('Ne contient pas d\'informations !');
}

//////MULTIPLY///
{/* <button>table de 3</button>
<div>Cliquer sur un bouton pour afficher la table de 3</div> */}

var monButton = document.querySelector("button");
var divResultat = document.querySelector("div");

monButton.addEventListener('click', function()
{
    var txt = "";
    for (var i = 1; i <= 10; i++)
    {
        txt += "3 * " + i +(3*i) + "<br />";
    }
    divResultat.innerHTML += txt;
})


/////////////////////////////////////////////////////////////////////////////////////////////////////////

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
/////////////////////////////////////////////////////////////////////////////////////////////////////////