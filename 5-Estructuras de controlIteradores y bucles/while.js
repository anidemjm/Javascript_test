// Es parecido al bucle for pero es menos estricto
// Se pueden hacer bucles infinitos y es indefinido 
// Consta de una condición y cuando se cumple ejecuta un bloque de instrucciones infinitamente 
// Pero si en esa condición se mete un contador o algo, puede llegar a salir del bucle

// bucle While

var year = 2018;

// Mientras sea más pequeño de 2051 siga sumando uno, una vez llega, termina
while(year <=2051){
    //Ejecuta esto
    console.log("Estamos en el año: "+year);

    year++; // suma uno a year, si utilizaramos en vez del + el -, seria de decremento.



}
