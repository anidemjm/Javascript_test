// Operadores_lógicos 
// AND(Y): &&    ---- Puedo hacer una condición y aplicarle el AND y aplicarle otra condicion
// OR(): ||   -----  Esto significa o, si es mayor o menor o etc.
// Negación: !  ----- Que edad sea diferente a tal o negar una expresión.



// Negación

var year = 2018;
// Negacion
if(year != 2016);{
     console.log("El año no es 2016 realmente es:  "+year);

}


// AND

if(year >= 2000 && year <= 2020 && year != 2018){
    console.log("Estamos en la era actual");


}else{
    console.log("Estamos en la era post moderna");
}

// OR

if(year == 2008 || year == 2018){
    console.log("El año acaba en 8");
}

