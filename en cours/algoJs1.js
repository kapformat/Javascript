var age = prompt('Quel age as-tu?');

if (age < 18)
{
    alert("Programme réservé aux personnes majeures");
} 
else
    {
        if(age < 26)
        { 
            document.write("Statut jeune");
        }
        else
        {
            if(age < 65)
            {
                document.getElementById(texte)("Statut adulte");
            }
            else
            {
                if(age >= 65 && age < 120)
                {
                    console.log("Programme réservé aux personnes non-retraitées");
                }
                else
                {
                    alert("vous n'avez pas entré une valeur cohérente");
                }
            }
        }
    }