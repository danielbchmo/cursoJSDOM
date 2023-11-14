/** 
    Hasta ahora, la teoría anterior demuestra la manera en como JS se comunica
    con el DOM, pero no es la forma correcta de llamar los nodos.

    Esta sección demuestra la buena práctica
*/
const wrapper = document.getElementById('wrapper');

//También podemos acceder por posiciones []
//Se puede utilizar en cualquier tipo de Nodo, esto a diferencia de getElementById
const className = document.getElementsByClassName('link');
console.log('Obteniendo elementos por ElementsByClassName Link', className);

//Retorna una lista con todos los nodos del tipo elemento con la etiqueta especificada
const tagName = document.getElementsByTagName('div');
console.log("Obteniendo lista por tagName",tagName);

//Regresa valores con el atributo Name, utilizado para inputs
//Solo se puede utilziar en el nodo raiz, es decir, Document
const byName = document.getElementsByName('btn');

/**
 *  METODOS NUEVOS
 */

//Funciona ingresando un selector de CSS, y solo retorna al primero elemento que coincida
//Es el más versatil
const wrapperNew = document.querySelector('#wrapper');

const link = wrapper.querySelector('.link.bold');
const link2 = wrapper.querySelector('.link:last-of-type')

//También tenemos la versión que retorna todos los elementos que encuentre
const link3 = wrapper.querySelectorAll('.link')


/**
 * Las diferencias que existen entre getElement y querySelector es que:
 *  1. getElement regresa valores HTML
 *  2. querySelector regresa valores en nodos, los cuales podremos llamar
 *      después con un for y mostrarlos.
 */

const linksHTML = document.getElementById("link");
const linksNode = document.querySelectorAll('.link')

//No arroja error
linksNode.forEach(link => {
    console.log(link);
})

//Arroja error
// linksHTML.forEach(link => {
//     console.log(link);
// })

/**
 * TRANFORMAR UNA LISTA A ARRAY
 */

const linksNode2 = Array.from(document.querySelectorAll('.link'))