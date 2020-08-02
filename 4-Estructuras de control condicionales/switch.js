/*
El Switch es una estructura de control diferente al if, que nos permite realizar muchas
 condiciones de una manera mucha más organziada


La declaración switch evalúa una expresión, comparando el valor de esa expresión 
con una instancia case, y ejecuta declaraciones 
asociadas a ese case, así como las declaraciones en los case que siguen.
*/


// Switch


function fn() {
    // Bloque de código
  }
  
  var arr = [1, 2, 3];
  
  var foo = {};
  
  var obj = {
    prop: fn
  }
  
  switch (obj.prop) {
    case foo:
      console.log('Es el objeto foo');
      break;
    case fn:
      console.log('Es la funcion fn');
      break;
    case arr:
      console.log('Es el arreglo arr');
      break;
    default:
      console.log('No se lo que es');
  }