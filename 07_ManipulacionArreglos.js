/**
 *  Manipulacion arreglos
 */

// ForEach
var letras = ['a', 'b', 'c', 'd', 'e'];
//console.log(letras.length);

//for (let i = 0; i < letras.length; i++) {
//    const element = letras[i];
//    console.log(element);
//}
letras.forEach((elemento) => console.log(elemento));

// push - shift - pop
var letras = ['a', 'b', 'c', 'd', 'e'];
letras.push('f');
console.log(letras);
var primerElemento = letras.shift();
console.log(primerElemento);
console.log(letras);
var ultimoElemento = letras.pop();
console.log(ultimoElemento);
console.log(letras);