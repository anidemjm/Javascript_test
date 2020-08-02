// Constantes

"use strich"

// Una constante no es más que un contenedor de datos, aligual que una variable, simplemente que ese valor no será modificable, nunca 
//Podrá varias.

var web = "https://jmmedina.com";
const ip = "192.88.0.12";

// Si cambiamos la web a otro dominio y por tanto la IP:

web = "https://jmmedina.com";

         //declarando aquí ip= "20320490234"; inicialmente salta fallo, porque arriba ya se dijo que era cons, lo borramos ok.
         
console.log(web, ip);
