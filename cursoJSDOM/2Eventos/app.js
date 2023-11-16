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

/**
 * Una vez que addEvenListener detecta un evento y llama a la función, automaticamente
 * se pasará un argumento que es un objeto llamado "event".
 * 
 * Este objeto tiene toda la información sobre el evento que acaba de ocurrir.
 */
function showSection(event) {
  // console.log(event.type)
  // console.log(event.target)
  wrapper.className = "show";
}

function hideSection(e) {
  //agregando evento que quita la funcion de una etiqueta
  e.preventDefault()//Este para la etiqueta <a>
  wrapper.className = "hide";
}

buttonShow.addEventListener("click", showSection);
buttonHide.addEventListener("click", hideSection);

//Agregando un evento del tipo change
input.addEventListener('change', function(event){
  //Accediento al valor del evento target
  //console.dir(event.target.value)
  changeUser.textContent = event.target.value
})

//agregando evento del tipo click. e es event
// wrapper.addEventListener('click', function(e){
//   //console.log(e.target)
//   e.target.style.backgroundColor = "hotpink"
// })

/**
 * Ahora un ejemplo: Que pasa si al darle click al input submit, no queremos que el form
 * haga su comportamiento natural que es enviarmo a un archivo exterior, sino que queremos
 * que primero se valide con JS.
 */

//Primero, accedemos al padre del input
const form = input.parentElement
//Ahora, agregamos un evento del tiempo submit
form.addEventListener('submit', function(e){
  e.preventDefault()
  console.log('Hola')
})

//O podemos usar esta forma tambien:
// form.onsubmit = function(){
//   console.log('Enviado')
//   return false //El false es quien evita su comportamiento natural
// }
