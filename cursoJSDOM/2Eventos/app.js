/**
 * EVENTOS
 *
 * Los eventos son acciones que realiza el usuario al dar clic, hacer foco, recargar
 * la pagina, copiar, pegar, etc.
 *
 * Hay que tener encuentra dos definiciones:
 *  1. Listener: detectores de eventos
 *  2. Manejadores de eventos: funciones con acciones cuando sucede un evento
 */

const wrapper = document.querySelector('[data-id="wrapper"]');

const input = document.querySelector('[type="text"]');
const changeUser = document.querySelector('[data-id="name"]');

const section = document.querySelector(".section");

const buttonShow = document.querySelector('[data-id="button-show"]');
const buttonHide = document.querySelector('[data-id="button-hide"]');

/**
 * Ahora, comenzaremos con un evento change:
 *      se ejectua al hacer foco en un input
 */
// input.addEventListener("change", function () {
//   //en cuanto ya no haya foco, se asigna el valor al textContent
//   changeUser.textContent = e.target.value;
// });

/**
 * También podemos colocar eventos directamente en el HTML (mira el ejemplo
 * del index en el primer boton del section) y agregar script.
 * O hacerlo directamente aquí
 */
// function controladorEvento() {
//   const nombre = prompt("Cuál es tu nombre?");

//   alert(`Hola ${nombre}`);
// }

// buttonShow.onclick = controladorEvento;

//Para eliminar

// buttonShow.onclick = null;

/**
 * AddEventListener toma dos parametros
 *  1. Evento que queremos detectar
 *  2. Manejador para el evento
 *
 * Soporta todos los eventos del DOM y agragar más de un evento.
 * Es mejor para llamar los eventos
 *
 * buttonShow.addEventListener('click', controladorEvento)
 */
function showSection() {
  wrapper.className = "show";
}

function hideSection() {
  wrapper.className = "hide";
}

buttonShow.addEventListener("click", showSection);
buttonHide.addEventListener("click", hideSection);
