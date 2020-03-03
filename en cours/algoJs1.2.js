var saisiUser = document.getElementById('saisiAge');
var valide = document.getElementById('btn').addEventListener('click',function()
{
    saisiUser = saisiUser.value;
    if (saisiUser < 18)
    {
        var afficheP = document.getElementById('reponse').innerHTML
        ("Programme réservé aux personnes majeures");
    } 
    else
    {
        if(saisiUser < 26)
        { 
            alert("Statut jeune");
        }
        else
        {
            if(saisiUser < 65)
            {
                alert("Statut adulte");
            }
            else
            {
                if(saisiUser >= 65 && saisiUser < 120)
                {
                    alert("Programme réservé aux personnes non-retraitées");
                }
                else
                {
                    alert("vous n'avez pas entré une valeur cohérente");
                }
            }
        }
    }
})