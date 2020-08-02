'use strict'

/*
Programa que pida dos numeros y que nos diga cual es el mayor
el menor o si son iguales
*/

var numero1 = parseInt(prompt('Introduce el primero numero', 0));
var numero2 = parseInt(prompt('Introduce el segundo numero',0));

console.log(numero1,numero2);

if(numero1 == numero2){
alert("Los numeros son iguales");

}else if (numero1 > numero2){
alert("El Numero es mayor es:" + numero1);
alert("El numero menor es:" + numero2);
}
