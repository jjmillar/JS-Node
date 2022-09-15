/**
 *  Operadores
 */

/**
 * Operadores de asignacion
 */

// Operador de asignacion ( = )
var x = 2; 
var y = true;

// Operador de asignacion de adicion ( += )
var x = 2;
var y = 1;

x += y; // x = x + y
console.log(x);

// Operador de asignacion de resta ( -= )
var x = 1;
var y = 2;

x -= y; // x = x - y
console.log(x);

// Operador de asignacion de multiplicacion ( *= )
var x = 1;
var y = 2;

x *= y; // x = x * y
console.log(x);

// Operador de asignacion de division ( /= )
var x = 1;
var y = 2;

x /= y // x = x / y
console.log(x);

// Operador de asignacion de residuo ( %= )
var x = 1;
var y = 2;

x %= y; // x = x % y
console.log(x);

// Operador de asignacion de exponenciacion ( **= )
var x = 2;
var y = 3;

x **= y; // x = x ** y
console.log(x);

/**
 * Operadores de comparacion
 */

// Operador igual ( == )
console.log(3 == 3);
console.log(3 == '3');

// Operador no es igual ( != )
console.log(3 != 3);

// Operador estrictamente igual ( === )
console.log(3 === 3);
console.log(3 === '3');

// Operador de desigualdad estricta ( !== )
console.log(3 !== '3');
console.log(3 != '3');

// Operadores >, >=, <, <=
console.log(3 > 4);
console.log(3 >= 3);
console.log(2 < 4);
console.log(2 <= 4 );

/**
 * Operadores aritmeticos
 * 
 * +, -, *, /, %, **
 */
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);

// Operadores de incremento ( ++ )
var numero = 0;
console.log(numero++);
console.log(numero);
console.log(++numero);

// Operadores de decremento ( -- )
var numero = 3;
console.log(numero--);
console.log(numero);
console.log(--numero);

/**
 * Operadores Lógicos
 */

// AND ( && )
console.log(true && true);
console.log(2 > 3 && 1<=2);

// OR ( || )
console.log(true || false);
console.log(false || false);

// NOT ( ! )
console.log(!true);
console.log(!false);

// Operador de cadena o concatenacion ( + )
var nombre = 'Julian';
var apellido = 'Millar';
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

// Operador condicional ( condicion ? val1 : val2)
console.log(2 > 3 ? 'Es mayor' : 'Es menor');

// Operador de desestructuracion 
var persona = {
    nombre: 'Julian',
    apellido: 'Millar',
};

var { nombre:xyz, apellido } = persona;
console.log(xyz);
console.log(apellido);
console.log(persona);

// Operador de desestructuracion de arreglos
var arreglo = [ 1, 2, 3, 4, 5 ]

var [primeraPosicion, dos] = arreglo;
console.log(primeraPosicion);
console.log(dos);

/**
 * Operador de miembro o acceso de propiedad
 */

// Notacion punto
var persona = {
    nombre: 'Julian',
    apellido: 'Millar',
};
console.log(persona.nombre);
console.log(persona.apellido);

// Notacion por corchetes
var persona = {
    nombre: 'Julian',
    apellido: 'Millar',
};
console.log(persona['nombre']);

// Notacion por corchetes en arreglos
var arreglo = [21,22,23,25,24,26]
console.log(arreglo[0]);

// Operacion de determinacion de tipo ( typeof )
console.log(typeof 'Julian');
console.log(typeof 21);
console.log(typeof true);