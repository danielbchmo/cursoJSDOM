/** 
 * Matches() y Closest()
 * Matches se utiliza en cualquier nodo del tipo elemento, recibe un selector CSS como
 * parametro, si coincide recibe true.
*/
const wrapper = document.querySelector('[data-id="wrapper"]');

const input = document.querySelector('[type="text"]');
const changeUser = document.querySelector('[data-id="name"]');

const section = document.querySelector(".section");

const buttonShow = document.querySelector('[data-id="button-show"]');
const buttonHide = document.querySelector('[data-id="button-hide"]');

/**Closests 
 * Busca el ancestro más cercano que coincida con el selector buscado.
*/
console.log(input.closest('wrapper'));