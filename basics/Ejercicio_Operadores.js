/**
 * 1-
 * Escribir un programa que calcule el número de segundos que existen en un día.
 * Para ello debemos multiplicar los segundos de un minuto, por los minutos de
 * una hora, por las horas de un día. Como todo el mundo sabe, un día tiene 86400 segundos.
 */

const SEGUNDOS_POR_MINUTO = 60;
const MINUTOS_POR_HORA = 60;
const HORAS_POR_DIA = 24;

const SEGUNDOS_POR_DIA = (SEGUNDOS_POR_MINUTO * MINUTOS_POR_HORA * HORAS_POR_DIA)
console.log(SEGUNDOS_POR_DIA);


/**
 * 2-
 * Realiza un programa que a partir de los valores ancho=2 y alto=5,calcule el área de un rectángulo.
 */

var ancho = 2;
var alto = 5;

var area = ancho * alto;
console.log(area);

/**
 * 3-
 * Hacer un conversor de grados centígrados a grados Fahrenheit.
 * Para ello deberé multiplicar por 9/5 y sumar 32.
 * Como todo el mundo sabe, 20 grados centígrados son 68 grados Fahrenheit. 
 */

var gradosCelcius = 20;
var convertidor = gradosCelcius * 9/5 + 32
console.log(convertidor);