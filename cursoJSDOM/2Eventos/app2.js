/**
 * Esta parte veremos manejadores
 * THIS -> Hace referencia al objeto en el contexto actual.
 * Cuando agregamos un evento que es llamado por un listener, this alude al
 * objeto actual.
 * 
 * Cuando usamos función flecha =>, this no hará referncia al objeto donde se llamo la funcion,
 * sino que llamara el contexto de la función contenedora de la arrow function.
 */

const wrapper = document.querySelector('[data-id="wrapper"]');

const input = document.querySelector('[type="text"]');
const changeUser = document.querySelector('[data-id="name"]');

const section = document.querySelector(".section");

const buttonShow = document.querySelector('[data-id="button-show"]');
const buttonHide = document.querySelector('[data-id="button-hide"]');

function showSection(event) {
    event.preventDefault();
    wrapper.className = "show";
    //agregando manejador THIS
    // console.log(this)
    //this.textContent = "Hemos cambiado el texto con THIS"
  }
  
  //Ejemplo donde THIS no hace caso al objeto
//   const hideSection = (event) => {
//     event.preventDefault();
//     wrapper.className = "hide"
//   }

//Función que ahora hace referencia al objeto
// function hideSection(e){
//     e.preventDefault()
//     wrapper.className = "hide"
//     console.log(this)
// }
  
  buttonShow.addEventListener("click", showSection);
  buttonHide.addEventListener("click", function(e){
    e.preventDefault()
    wrapper.className = "hide"
  });

  /**
   * REMOVER UN EVENTO
   * Recibe dos parametros:
   *    1. el evento a remover
   *    2. la función a remover
   */
  buttonShow.removeEventListener("click", showSection);