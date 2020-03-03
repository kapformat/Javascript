
document.getElementById('saisiAge').focus();

var btnRecommencer = document.getElementById('btn2');
document.getElementById('btn2').style.visibility='hidden';
btnRecommencer.addEventListener('click',refresh);

var btnValider = document.getElementById('btn1');
btnValider.addEventListener('click',reponse);


function reponse()
{
var saisiUser = document.getElementById('saisiAge').value;
var addbtn = document.getElementById('btn2');	

	if (saisiUser < 18)
	{
		document.getElementById('para1').innerHTML = 'Vous avez '+ saisiUser + ' ans:<br>Vous avez un Statut Mineur" !';		
		addbtn.style.visibility='visible';
	}
	else
	{
		if(saisiUser < 27)
		{
			document.getElementById('para1').innerHTML = 'Vous avez '+ saisiUser + ' ans:<br>Vous avez un Statut Jeune" !';
			document.getElementById('btn2').style.visibility='visible';
			addbtn.style.visibility='visible';
		}
		else
		{
			if(saisiUser < 65)
			{
				document.getElementById('para1').innerHTML = 'Vous avez '+ saisiUser + ' ans:<br>Vous avez un Statut Adulte" !';
				addbtn.style.visibility='visible';
			}
			else
			{
				if(saisiUser >= 65 && saisiUser < 120)
				{
					document.getElementById('para1').innerHTML = 'Vous avez '+ saisiUser + ' ans:<br>Programme réservé aux personnes non-retraitées !';
					addbtn.style.visibility='visible';
				}
			}
		}
	}

}

function refresh()
{
	if(btnRecommencer)
	{
		document.getElementById('saisiAge').focus();
		document.getElementById('btn2').style.visibility='hidden';
		document.getElementById('para1').innerHTML = 'Recommencer alors!!';
		saisiUser = document.getElementById('saisiAge').value = "";
	}
}
