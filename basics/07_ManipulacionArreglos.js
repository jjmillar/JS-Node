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

// some - every
// SOME
//var numeros = [1,2,3,4,5,6,7,8,9,10];
var numeros = [1,3,5,7,9];
var resultado = numeros.some((numero) => numero % 2 === 0);
console.log(resultado);

// EVERY
//var numeros = [1,2,3,4,5,6,7,8,9,10];
var numeros = [2,4,6,8];
var resultado = numeros.every((numero) => numero % 2 === 0);
console.log(resultado);

// find - findIndex
// FIND
var clientes = [
    { id: 1, nombre: '1'},
    { id: 2, nombre: '2'},
    { id: 3, nombre: '3'},
    { id: 4, nombre: '4'},
    { id: 5, nombre: '5'}
];
var cliente = clientes.find((cliente) => cliente.id === 1);
var filter = clientes.filter((cliente) => cliente.id === 1);
console.log(clientes);
console.log(cliente);
console.log(filter);

//FindIndex
var clientes = [
    { id: 1, nombre: '1'},
    { id: 2, nombre: '2'},
    { id: 3, nombre: '3'},
    { id: 4, nombre: '4'},
    { id: 5, nombre: '5'}
];
var posicion = clientes.findIndex((cliente) => cliente.id === 2);
console.log(posicion);
console.log(clientes[posicion]);

// includes
var mascotas = ['perro', 'gato', 'conejo'];
var resultado = mascotas.includes('gato');
console.log(resultado);
console.log('julian'.includes('an'));

var buscador = (parametro) => {
    let clientes = [
        { id: 1, nombre: '1'},
        { id: 2, nombre: '2'},
        { id: 3, nombre: '3'},
        { id: 4, nombre: '4'},
        { id: 5, nombre: '5'}
    ];

    return clientes.filter((cliente) => cliente.nombre.includes(parametro));
}

console.log(buscador('1'));

// Join
var elementos = ['aire', 'fuego', 'agua'];
var resultado = elementos.join('.');
console.log(resultado);

var clientes = [
    { id: 1, nombre: '1'},
    { id: 2, nombre: '2'},
    { id: 3, nombre: '3'},
    { id: 4, nombre: '4'},
    { id: 5, nombre: '5'}
];
//console.log(clientes.join());
var csvGenerator = (array, separator=',') => {
    let headers = Object.keys(array[0]).join(separator);
    let data = array.map((element) => Object.values(element).join(separator));
    console.log(headers);
    data.forEach(element => console.log(element));
};

csvGenerator(clientes);



//console.log(Object.values({ id: 1, nombre: '1'})); //Object.value
//console.log(Object.keys({ id: 1, nombre: '1'})); //Object.keys


// concat - sort - splice - slice
var array1 = [1,2,3,4,5];
var array2 = [6,7,8,9,10];
var array3 = array1.concat(array2);
var array4 = [...array1, ...array2];
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);

// sort
var array1 = [1,2,3,4,5,6,7,8,9,0];
console.log(array1.sort());

var meses = ['Dic', 'Ene', 'Mar', 'Feb'];
console.log(meses.sort());

var array = [1, 10000, 21, 30, 4];
var ordenado = array.sort((a, b) => a - b);
console.log(ordenado);

// splice
var nombres = ['1', '2', '3'];
nombres.splice(1, 1, '4');
console.log(nombres);

//slice
var nombres = ['1', '2', '3'];
var resultado = nombres.slice(1, 3); //no incluye la ultima posicion
console.log(resultado);
console.log(nombres);