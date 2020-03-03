var array = new Object();
    array.saisi=0;
    array.saisiTotal=0;
    array.valider=false;
    array.somme=0;
//creer fonction moyenne pour 5 nombres
function numAverage(a) {
    var b = a.length,
        c = 0, i;
    for (i = 0; i < b; i++){
      c += Number(a[i]);
    }
    return c/b;
}
    array.stop=false;
    



    function numAverage(a) {
        var b = a.length,
            c = 0, i;
        for (i = 0; i < b; i++){
          c += Number(a[i]);
        }
        return c/b;
      }
      
      numAverage([5, 1, 1, 1, 5]);
      // renvoie : 2.6
