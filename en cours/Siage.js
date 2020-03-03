
//déclaration des variables 
var Valid=document.getElementById("valid");
var reset=document.getElementById("reset");


(function() {
	Valid.addEventListener("click", TesterAge, false);//ajout d'un event click qui appelle la fonction TesterAge sur le btn valider
	reset.addEventListener("click", resetAge, false);//ajout d'un event click qui appelle la fonction resetAge sur le bouton reset(invisible)
}());

function TesterAge() {//creation fonction TesterAge
	var ageUser=document.getElementById("age").value;//recupere la valeur saisie dans l'input "entrer votre age.."


if(ageUser < 18 && ageUser >= 0)//si l'ageUser est inferieur a 18 et supérieur ou egal a 0
{
	alert ("Le programme est réservé aux personnes majeures")
}

else //sinon
	if (ageUser >= 18 && ageUser <= 26)//si....
{
	alert("Vous avez un statut jeune")
}

else 
	if (ageUser >= 27 && ageUser <= 65)
{
	alert("Vous avez un statut adulte")
}

else 
	if (ageUser>65)
{
	alert("Ce programme s'adresse aux personnes non-retraitées")
}
	restart();//la fonction restart() s'execute automatiquement a la fin de la fonctin TesterAge
};


function resetAge() {//creation fonction resetAge
	age.value="";//reset de l'age
	choix.style.visibility="hidden";//cache le texte 'Voulez-vous recommencer o/n ?'
	on.style.visibility="hidden";//cache l'input oui/non
};






function restart ()//creation fonction restart
{	
on.style.visibility="visible";//la phrase "Voulez vous recommencer o/n?" s'affiche(caché par css avant)
choix.style.visibility="visible";//l'input oui/non s'affiche(caché par css)
on.addEventListener('keydown', function(event)//ajout d'un event a la presse d'une touche 
	{

		if (event.keyCode===79)//si la touche 'o' est cliquée
		{
			document.getElementById("reset").click();//le clic sur le bouton reset (invisible) est activé
			alert ('vous voulez recommencez')
		}

			else //sinon
			{	
				if (event.keyCode===78)//si la touche 'n' est cliquée 
					{
						document.getElementById("reset").click();//le clic sur le bouton reset (invisible) est activé
						alert('Vous connaissez votre statut.')
					}
				
					else //sinon
						{
							on.value="";//reset de l'input oui/non
							alert('Cliquez sur o pour recommencer et n pour quitter la page')
						}
			}
	});
};



























	