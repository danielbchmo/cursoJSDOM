/**
 * EVENT BUBBLING
 * Referente de la propagación de eventos.
 * Es decir que, cuando tenemos un evento click, de manera logica, sabemos que el evento dara clic 
 * en ese contenedor, pero no solamente eso, sino que, también actuará para los demás eventos
 * de forma ascendente.
 */

const wrapper = document.querySelector('[data-id="wrapper"]');

const input = document.querySelector('[type="text"]');
const changeUser = document.querySelector('[data-id="name"]');

const section = document.querySelector(".section");

const buttonShow = document.querySelector('[data-id="button-show"]');
const buttonHide = document.querySelector('[data-id="button-hide"]');

//Ejemplo de BUBBLING
function handleEvent(e){
    //CurrentTarget retorna el elemento donde se descencadena el evento
    //NodeName retorna el nombre del nodo
    console.log(`Has dado click en ${e.currentTarget.nodeName}`)
}

//  En esta parte notaremos como, aunque solo demos click en buttonShow, los demas
//  botones también se activaran
// buttonShow.addEventListener('click', handleEvent)
// section.addEventListener('click', handleEvent)
// document.body.addEventListener('click', handleEvent)

/**
 * Detener la propagación de eventos
 * Se detiene con la función stopPropagation() tanto en la fase de bubbling y fase de captura
 */

// function handleEventStop(e){
//     e.stopPropagation()
//     console.log(`Has dado click en  ${e.currentTarget.nodeName}`)
// }

// //  Ahora ya no se activaran secuencialmente. Esto apartir de donde se llama la función de parar
// buttonShow.addEventListener('click', handleEvent)
// section.addEventListener('click', handleEventStop)
// section.addEventListener('click', () => {
//     alert('Hola Mundo')
// })
// document.body.addEventListener('click', handleEvent)

/**
 * stopImmediatePropagation
 * Esta función tambien detiene la propagación, con la diferencia de que se agregue un
 * mismo manejador de eventos para un mismo evento.
 */

function handleEventStop(e){
    e.stopImmediatePropagation()
    console.log(`Has dado click en  ${e.currentTarget.nodeName}`)
}

//  Esta vez ya no dejara que se ejecuten los dos section
buttonShow.addEventListener('click', handleEvent)
section.addEventListener('click', handleEventStop)

section.addEventListener('click', () => {
    alert('Hola Mundo')
})

document.body.addEventListener('click', handleEvent)