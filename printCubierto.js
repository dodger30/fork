
const eleccion = require('prompt-sync')();


do {
var elige = eleccion("Elige ");
console.log(`Has elegiddo ${elige}`);

console.log(arbolElecciones(elige));
}while( elige !="adios");

function arbolElecciones(elige){
    var dibujito;
    if(elige == "tenedor"){
        dibujito = tenedor();
     } else if(elige == "cuchara"){
          dibujito = cuchara();
     } else if(elige == "cuchillo"){
        dibujito = cuchillo(); 
     } else {
         dibujito = "Ese cubierto no me gusta :(";
     }
     return dibujito;
} 



function tenedor(){
    let tenedor= " l l l\n l l l\n l l l\n l_l_l\n   l  \n   l  \n   l  \n   l  \n   l  \n"
    return tenedor;
}

function cuchara(){
    let cuchara = "  ___\n (   )\n (   )\n (   )\n (___)\n   l  \n   l  \n   l \n   l  \n   l  ";
    return cuchara;
}

function cuchillo(){
    let cuchillo = " ( \\\n (  \\\n (   \\\n (    \\\n (     \\\n (     /\n (    /\n (___/\n   l  \n   l  \n   l  \n   l  \n   l  "
   return cuchillo;
}


