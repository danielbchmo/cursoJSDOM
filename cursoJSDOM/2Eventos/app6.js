/**Event delegation
 * Permite aprovechar la propagación de eventos para determinar un manejador de eventos
 * a un contenedor de nodos que haga una acción determinada por cada nodo que contiene.
 * 
 * Es un manejador global.
 */

const section = document.querySelector('.section');
function eventDelegation (e){
    const getColor = e.target.getAttribute('data-color');
    
    e.currentTarget.style.backgroundColor = getColor;
}

section.addEventListener('click', eventDelegation);