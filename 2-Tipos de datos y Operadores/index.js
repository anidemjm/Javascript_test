'use strich'
// Operaciones relacionales
/*
Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
igual: ==
Distinto:  !=
*/
// Operadores

var numero1 = 7;
var numero2 = 12;
var operacion = numero1 * numero2;

alert("El resultado de la operacion es: "+operacion);


// Tipos de datos

var numero_externo = 44;  // Numero entero
var cadena_texto = 'Hola  "que"  tal';   // Cadena texto
var verdadero_o_falso = true;   // True o false, boleanos o 0 y 1 


var numero_falso = "33";
Number(numero_falso);
console.log(parseInt (numero_falso)+7); // convierte el 33 en numero que era un string y le suma 7


// Saber el tipo de dato de cada uno 

console.log(typeof numero_falso); // te dice que tipo es, en este caso un string