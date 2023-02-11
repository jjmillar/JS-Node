/**
 * Promises
 */

const getData = (error) => new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(() => {
            resolve({
                nombre: 'julian',
                apellido: 'millar'
            })
        }, 3000);
    } else {
        reject('No pudimos obtener los datos')
    }
});

const getData2 = (error) => new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(() => {
            resolve({
                nombre: 'julian',
                apellido: 'millar'
            })
        }, 3000);
    } else {
        reject('No pudimos obtener los datos de data 2')
    }
});

console.log('Inicio');
getData(true)
    .then((data) => {
        console.log(data);
        return getData2(false)
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
console.log('Fin');

// async - await

const getData3 = (error) => 
    new Promise((resolve, reject) => {
        if (!error) {
            setTimeout(() => {
                resolve({
                    nombre: 'julian',
                    apellido: 'millar'
                })
            }, 3000);
        } else {
            reject('No pudimos obtener los datos')
        }
});

const getData4 = (error) => 
    new Promise((resolve, reject) => {
        if (!error) {
            setTimeout(() => {
                resolve({
                    nombre: 'julian',
                    apellido: 'millar'
                })
            }, 3000);
        } else {
            reject('No pudimos obtener los datos de la data 2')
        }
});

const main = async () => {
    try {
        let resultado = await getData3(false);
        let resultado2 = await getData4(true);
        console.log(resultado);
        console.log(resultado2);
    } catch (error) {
        console.log(error);
    }
};

main();


