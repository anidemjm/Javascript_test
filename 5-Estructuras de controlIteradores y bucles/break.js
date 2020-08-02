
/*
Termina el bucle actual, sentecia switch o label y transfiere el control del
programa a la siguiente sentencia a la sentecia de terminación de éstos elementos.




break [etiqueta];

La sentencia break incluye una etiqueta opcional que permite al programa 
salir de una sentencia etiquetada. La sentencia break necesita estar anidada 
dentro de la sentencia etiquetada. La sentencia etiquetada puede ser cualquier 
tipo de sentencia; no tiene que ser una sentencia de bucle.

a siguiente función tiene una sentencia que termina el bucle while cuando i es 3, 
y entonces devuelve el valor 3 * x.


function comprobarBreak(x) {
    var i = 0;
    while (i < 6) {
       if (i == 3)
          break;
       i++;
    }
    return i * x;
 }


 */