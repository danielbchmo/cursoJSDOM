/**
 * style
 *  propieda que permite modificar el estilo del CSSOM
 * 
 * style.setProperty
 *  Agrega un valor. Se agregan dos parametros:
 *      identificador o nombre del valor
 *      valor
 * 
 * style.removeProperty
 *  Elimina un valor. Aquí debemos mandar llamar el valor como se escribe en CSS, y no como se
 *  escribe en JS.
 */

const title = document.querySelector('.title');
const inputColor = document.querySelector('[type="color"]');
const inputRange = document.querySelector('[type="range"]');

title.style.fontFamily = 'cursive';