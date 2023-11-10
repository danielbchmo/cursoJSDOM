/**
 * Esta parte, se enfoca en concocer tres metodos:
 *  nextElementSibling -> saber cuál es el hermano siguiente
 *  previousElementSibling -> saber cuál es el hermano anterior
 *  partenElement -> muestra el padre de los elementos unicamente, no de los nodos
 */
const wrapper = document.body.children[0];
const div = wrapper.children[1];

//Hermano siguiente, de un nodo tipo texto
console.log(div.nextSibling);
//Hermano anterior, de un nodo tipo texto
console.log(wrapper.previousSibling);

//Manera para modificar el texto de una etiqueta
const h1 = div.previousElementSibling;
h1.textContent = "Estoy siendo modificado desde el DOM"

//Manera para cambiar estilos
const style = document.documentElement.style.backgroundColor('black');

//Acceder al padre de algun nodo
const anchor = div.children[0];
console.log(anchor.parentNode);