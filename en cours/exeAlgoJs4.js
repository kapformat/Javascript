var i = 1;
var espace = document.body;
espace.addEventListener('keydown', table);

function table(event)
{		
		var affiche = document.getElementById('space');
	if (event.keyCode === 32)//si touche espace cli
		
	{	
		event.preventDefault();
		for (var j = 1 ; j < 11; j++)
		{
			affiche.innerHTML += i +' X ' + j + ' = ' + i * j +'<br>';
		}
		
	}
	i++;
};  


// function 
// for (var i = 1 ; i < 11; i++)
// {	
// var affiche = document.getElementById('space');
// affiche.innerHTML += i +' * 1 =  '+ i * 1 +' <br>';

// }

// var i = 1;
	// var affiche = document.getElementById('space');
	// var espace = document.body;

// var tableau = [1,2,3,4,5,6,7,8,9,10];
// var affiche = document.getElementById('table');

// var espace = document.getElementById('space')
// function table()
// {espace.addEventListener('keydown', function table(e)
	// if(e.keyCode == 32)
	// {
		// for (var j = 1 ; j < 11; j++)
		// {
			// affiche.innerHTML += i+' * '+ j +' = 'i*j +' <br>';
			// preventDefault();
			
		// }
		
	// }
// });