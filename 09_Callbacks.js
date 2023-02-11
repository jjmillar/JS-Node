/**
 *  Callbacks
 */

const suma = (a, b, cb) => {
    cb(a + b)
};

const imprimir = (data) => console.log(data);

suma(1, 2, imprimir)

// ****

const getData = (cb, cbError) => {
    if (false) {
        setTimeout(() => {
            cb({
                nombre: 'julian',
                apellido: 'millar'
            })
        }, 3000);
    } else {
        cbError(new Error('No se pudo obtener los datos'));
    }
};

const imprimirData = (data) => console.log(data);
const errorHandler = (error) => console.log(error);

getData(imprimirData, errorHandler);