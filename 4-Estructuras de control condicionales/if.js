'use strict'

// Operaciones relacionales ( Recordatirio)
/*
Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
igual: ==
Distinto:  !=
*/


// Un condicional es una estructura de control 
// Unas instrucciones que nos permiten comparar algo: si A es igual a B entonces haz algo
/*
var edad1 = 6;
var edad2 = 12;

if(edad1 > edad2){    // if significa "si pasa esto" 
// Ejecuta esto
console.log("Edad uno es mayor que edad2") 
}else{
 console.log("Edad uno es inferior") 
}
*/
/*
var edad = 10;
var nombre = "David Nieto";

if(edad >= 18){
    // Es mayor de edad
    console.log(nombre+" Tiene " +edad+" años, es mayor de edad");
    
}else{  // Es menor de edad **** El Else al final es como un "Si no haz esto"
    console.log(nombre+" Tiene " +edad+" años, es menor de edad");

}

// Es decir, dependiendo en este caso la edad declarada, te dice si es menor o no.

*/

// Anidar if  dentro de otra.

var edad = 33;
var nombre = "David Nieto";

if(edad >= 18){
    // Es mayor de edad
    console.log(nombre+" Tiene " +edad+" años, es mayor de edad");

    if(edad == 33){   // Estamos aninando otro if que nos diga ademas de menor o mayor, si es millenal o no.
        console.log("todavia eres millenial");

    }else{
        console.log("No eres millenial");
    }
    
}else{  // Es menor de edad **** El Else al final es como un "Si no haz esto"
    console.log(nombre+" Tiene " +edad+" años, es menor de edad");
}
