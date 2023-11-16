/**
 * FASE DE CAPTURA
 * Va a capturar los eventos desde el nodo principal del DOM hasta el elemento donde se 
 * dispara el evento.
 * Este ira de manera descendente.
 */

const wrapper = document.querySelector('[data-id="wrapper"]');

const input = document.querySelector('[type="text"]');
const changeUser = document.querySelector('[data-id="name"]');

const section = document.querySelector(".section");

const buttonShow = document.querySelector('[data-id="button-show"]');
const buttonHide = document.querySelector('[data-id="button-hide"]');

function handleEventStop(e){
    console.log(`Has dado click en  ${e.currentTarget.nodeName}`)
}

/**
 * Para comenzar con un ejemplo de captura, hay que mecionar que evenListener tiene un tercer paramtetro
 * opcional, que es el capture.
 * Este indica que desde ese punto comenzara la captura.
 */
buttonShow.addEventListener('click', handleEvent, {capture: true})
section.addEventListener('click', handleEvent, {capture: true})
document.body.addEventListener('click', handleEvent, {capture: true})