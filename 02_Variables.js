/**
 * Variables
 * 
 * 3 Formas de definir variables
 * 
 * var
 * let
 * const
 * 
 */

// variables con VAR
var nombre = 'Julian'; // x = 2
console.log(nombre);

var edad = 27;
console.log(edad);

var persona = {
    nombre: 'Julian',
    apellido: 'Millar',
    edad: 27;
    direccion: {
        calle: 'San Faustino',
        numeroDeCasa: 123,
    },
    ciudadesVisitadas: [
        'Guayaquil',
        'Cuenca',
        'Manta',
    ]
};

var ciudad;
ciudad = 'Quito';
ciudad = 'Los Angeles';
ciudad = 13;
console.log(ciudad);

// variables con LET
let nombre = 'Julian';
console.log(nombre);

{
    let saludo = 'Hola soy Julian';
    console.log(saludo);
}
console.log(saludo);

{
    var saludo = 'Hola soy Julian';
    console.log(saludo);
}
console.log(saludo);

// variables con CONST
const PI = 3.14;
// PI = 3.141592; las const tienen que estar definidas y no pueden variar
console.log(PI);


var nombre = 'Julian';
var saludo = `Hola soy ${nombre}

como estas`;
console.log(saludo);