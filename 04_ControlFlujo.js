/**
 * Control de flujo
 */

// Estructura IF

// if (condicion) {
    
// }

var llueve = true;
if (llueve) {
    console.log('Necesito una sombrilla');
};

var administrador = 'administradora';
if (administrador === 'administrador') {
    console.log('Bienvenido al sistema');
};

const MAYORIA_DE_EDAD = 18;
var edadPersona = 18;
if (edadPersona >= MAYORIA_DE_EDAD) {
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
};

var semaforo = 'purpura'
if (semaforo === 'verde') {
    console.log('Arranca');
} else if (semaforo === 'amarillo') {
    console.log('Listo?');
} else if (semaforo === 'rojo') {
    console.log('Motores apagados');
} else {
    console.log('Color no identificado');
};

// Switch

switch (expresion) {
    case expresion:
        // codigo
        break;
    case expresion:
        // codigo
        break;
    default:
        console.log('Este caso se cumple si ninguno de los anteriores cumple la expresion');
        break;
}

var producto = 'papaya';
switch (producto) {
    case 'papaya':
    case 'naranjas':
        console.log('Las naranjas y papayas cuestan $300 c/u');
        break;
    case 'mango':
        console.log('El mango cuesta $1.500 c/u');
        break;
    default:
        console.log('No disponemos de ese producto');
        break;
};