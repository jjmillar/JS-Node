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

// map
var estudiantes = ['1', '2', '3', '4'];
var asistencia = estudiantes.map((nombre) => `${nombre}.`);
console.log(estudiantes);
console.log(asistencia);
console.log(estudiantes);

var productos = [{nombre: 'camisetas', precio: 15},
    {nombre: 'zapatillas', precio: 20},
    {nombre: 'pantalon', precio: 25}
];

var productosImpuesto = productos.map((producto) =>{
    return {
        ...producto,
        impuesto: .12
    }
});

var precios = productos.map((producto) => producto.precio);

console.log(productos);
console.log(productosImpuesto);
console.log(precios);

// filter
var estudiantes = [
    {nombre: '1', edad: 20, matriculado: true},
    {nombre: '2', edad: 19, matriculado: true},
    {nombre: '3', edad: 22, matriculado: false},
    {nombre: '4', edad: 21, matriculado: true},
    {nombre: '5', edad: 19, matriculado: false},
];

//var filtrado = estudiantes.filter((estudiante) => estudiante.edad >= 21);
var filtrado = estudiantes.filter(
    (estudiante) => estudiante.edad >= 21 && estudiante.matriculado
);
console.log(estudiantes);
console.log(filtrado);

// reduce   
var calificaciones = [3, 5, 9, 10, 10];
var suma = calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0);
console.log(calificaciones);
console.log(suma);
console.log(suma / calificaciones.length);

var edades = [21, 21, 23, 43, 21, 43, 18, 18, 23, 23];
// salida
//{
//    21: 3,
//    43: 2
//};
var resultado = edades.reduce((acumulador, edad) => {
    if (!acumulador[edad]) {
        acumulador[edad] = 1
    } else {
        acumulador[edad] += 1
    }
    return acumulador
}, {});
console.log(edades);
console.log(resultado);

var ventas = [
    {nombre:'camiseta', precio: 15, totalVendido: 10},
    {nombre:'zapatilla', precio: 150, totalVendido: 8},
    {nombre:'pantalon', precio: 20, totalVendido: 30},
];

var resultado = ventas.reduce((acumulador, producto) => {
    let totalVentas = producto.precio * producto.totalVendido;
    acumulador[producto.nombre] = `$${totalVentas}`;
    return acumulador
}, {});

console.log(ventas);
console.log(resultado);

var estudiantes = [
    {nombre: '1', edad: 20, matriculado: true},
    {nombre: '2', edad: 19, matriculado: true},
    {nombre: '3', edad: 22, matriculado: false},
    {nombre: '4', edad: 21, matriculado: true},
    {nombre: '5', edad: 19, matriculado: false},
];

var resultado = estudiantes
    .map((estudiante) => estudiante.matriculado)
    .reduce((acumulador, item) => {
        if (item) {
            acumulador.matriculado += 1
        } else {
            acumulador.noMatriculado += 1
        }
        return acumulador;
    }, {matriculado: 0, noMatriculado: 0});

console.log(estudiantes);
console.log(resultado);














