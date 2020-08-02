// En Javascript se pueden declarar variables de diferentes formas.

   //*****ejercicios guardados en comentarios, retirar para comprobar los comentarios*****

   // La básica sería:


//var pais = "España";
//var continente = "Europa";  
//var antiguedad = 2019;   

// Pero no es la única forma, existe otra forma y es mucho más "pro", es la forma let.

//let prueba = "hola";
//alert("hola");

// Aparece como una variable normal, en este caso con una ventana por el alert.
// Diferencias:
// Let permite definir variables limitando su alcance al bloque, declaración o expresión donde se esta usando.
// Var define una variable global o local sin importar el ambito del bloque, expresión etc.

// Pruebas let y var
   // La diferencia como antes, es el alcance que tienen y como actuan en los diferentes bloques.

// Prueba con var

   var numero = 40;

   if(true){
       console.log(numero); // valor 40, en un primer momento es 40
   }

   var numero = 50;

   if(true){
       console.log(numero);  // valor 50, era 40 de la anterior, pero lo altera a 50
   }

console.log(numero); // valor 50, porque la anterior era 50


// Prueba con let

var texto = "Curso js jmmr";
console.log(texto); // valor sera "Curso js jmmr"


if(true){
   let texto = "Curso js let nuevo jmmr";
   console.log(texto); // valor sera "Curso js let nuevo jmmr";
}

//let aplica su variable en su bloque, le da igual lo que me ponga más arriba en este caso con var texto.

console.log(texto);  // valor sera "Curso js jmmr", salen las 3, la de var, la de let y el resultadod de valor que es el de var, porque 
// se cambio pero tampoco a perdido su valor let.

