/*
El bucle FOR se utiliza para repetir una o más instrucciones un determinado número 
de veces. De entre todos los bucles, el FOR se suele utilizar cuando sabemos seguro 
el número de veces que queremos que se ejecute. La sintaxis del bucle for se 
muestra a continuación.



for (inicialización; condición; actualización) { 
    //sentencias a ejecutar en cada iteración 
}


/*
El bucle FOR tiene tres partes incluidas entre los paréntesis, que nos sirven para definir cómo deseamos que se realicen las repeticiones. La primera parte es la inicialización, que se ejecuta solamente al comenzar la primera iteración del bucle. En esta parte se suele colocar la variable que utilizaremos para llevar la cuenta de las veces que se ejecuta el bucle.
La segunda parte es la condición, que se evaluará cada vez que comience una iteración del bucle. Contiene una expresión 
para decidir cuándo se ha de detener el bucle, o mejor dicho, la condición que se debe cumplir para que continúe la 
ejecución del bucle.
Por último tenemos la actualización, que sirve para indicar los cambios que queramos ejecutar en las variables cada 
vez que termina la iteración del bucle, antes de comprobar si se debe seguir ejecutando.
Después del for se colocan las sentencias que queremos que se ejecuten en cada iteración, acotadas entre llaves.

*/
// Ejemplo más sencillo

// Bucle for

var numero = 100;

for(var i = 0; i < numero; i++){    //la i suele ser el contador, la variable que ira actualizandose en cada una de las vueltas o interacciones que va dando el bucle
console.log(i);matchMedia,,

}
       
// Si contador "i" es menor a 100, pues seguira realizando. 
// El  ++ es el incrementador, ++ suma 1 a la variable contador "i", en cada vuelta del bucle le suma 1.

// El resultado es una tabla del 1 a 100, sumo 1 hasta 100 de forma rápida.

/*
var i 
for (i=0;i<=10;i++) { 
   	document.write(i)
   	document.write("<br>") 
}

//Por ejemplo si queremos escribir los número del 1 al 1.000 de dos en dos se escribirá el siguiente bucle.


for (i=1;i<=1000;i+=2) 
       document.write(i)


// Si queremos contar descendentemente del 343 al 10 utilizaríamos este bucle.

for (i=343;i>=10;i--) 
   	document.write(i)
*/