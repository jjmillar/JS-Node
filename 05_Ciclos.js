/**
 * Ciclos
 */

// While
var contador = 0;
while (contador <= 5) {
    console.log('Hola mundo!!');
    contador += 1;
}

// Do while
var contador = 1;
do {
    console.log('Hola Mundo!!');
    contador += 1;      
} while (contador <= 10);

// For
//for(expresionInicial; expresionCondicional; expresionDeActualizacion) {
    // Aqui van las instrucciones
//}

for (let i = 0; i <= 5; i++) {
    console.log('Hola Mundo!!');
}

// For in
var persona = {
    nombre: 'Julian',
    apellido: 'Millar',
    edad: 35
}

for (let clave in persona) {
    console.log(clave, persona[clave]);
}


// For of
var arreglo = [1, 2, 3, 4, 5]
for(let valor of arreglo) {
    console.log(valor);
}
