/**
 * setAttribute, hasAttribute, getAttribute, removeAttribute
 *
 * Obtener atributos que no estan en los elementos
 */

const wrapper = document.querySelector("#wrapper");
const title = document.querySelector(".title");
const link = document.querySelector(".link.bold");
const inputBtn = document.querySelector('[type="button"');

/**getAttribute() -> permite obtener un atributo de un nodo de tipo elemento, sin importa
 * que este o no listado en las propiedades del nodo.
 */

console.log(title.getAttribute("href"));

/**
 * Para agregar un atributo donde ya existen las propiedades, se utiliza
 */

console.dir((title.id = "encabezado"));
/**
 * Y ahora para colocar un atributo sin propiedad, asignamos el siguiente valor
 * setAttribute, donde tiene dos parametros:
 *     1. El nombre
 *     2. El valor
 */

//Este sobreecribe
console.log(title.setAttribute("id", "encabezado"));
//Este crea uno nuevo
console.log(title.setAttribute("src", "google.com"));

/**
 * hasAttribute
 * Retorna un valor booleano que indica si un nodo elemento tiene un atributo en esfecifico
 */

console.log(title.hasAttribute("class"));

/**
 *  removeAttribute
 * Elimina un atributo
 */
title.removeAttribute("src");

/**
 * ATRIBUTOS PERSONALIZADOS
 * Para utilziar atributos personalizados en HTML, debemos inicializar
 * el atributo con "data" para usarlo en js
 * Por ejemplo:
 *     <img data-identificador="img" />
 */
const img = document.querySelector('[data-identificador="img"]')
img.src = "img/hola.png"
const identificador = img.getAttribute('data-identificador')

/**
 * Con get y setAttribute, podemos manipular los atributos personalizados
 * Pero tambien podemos usar dataset
 * 
 *      img.dataset.identificador
 */

