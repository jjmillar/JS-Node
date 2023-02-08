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
saludar('Julian');