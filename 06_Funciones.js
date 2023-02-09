/**
 *  Funciones
 */

// declarativa
//function nombreDeLaFuncion() {
    // cuerpo de nuestra funcion
//}

function saludar() {
    console.log('Hola soy Julian');
}
saludar();

function saludar(nombre) {
    console.log(`Hola soy ${nombre}`);
}
saludar('julian');

function saludar(nombre) {
    return `Hola soy ${nombre}`
}
var saludo = saludar('Julian');
console.log(saludo);
console.log(saludar('Julian millar'));


// Expresion o anonimas
var suma = function(a, b) {
    return a + b;
}

console.log(suma(2, 2));

// arrow function
var resta = (a, b) => {
    if(typeof a === 'number' && typeof b === 'number') {
        return a - b;
    } else {
        return 'Solo puede restar numeros'
    }    
}

console.log(resta(4, 2));

var multiplicar = (a, b) => a * b; // funcion flecha tiene return implicito
console.log(multiplicar(2, 2));
