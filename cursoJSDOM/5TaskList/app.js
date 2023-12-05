/**
 * prepend()
 *  Igual que append o appendChild, agrega un nuevo nodo html pero al principio.
 * 
 * insertBefore()
 *  Permite agregar un nodo como hermano anterior de un elemento de referencia
 *      Primer parametros en el nodo a agregar
 *      El segundo es la referencia de un nodo
 *  Es un metodo que es viejo
 * 
 * before()
 *  Agregara un nodo como hermano anterior
 */

const button = document.querySelector('.button');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const listContainer = document.querySelector('.list-container');

form.addEventListener('submit', handleSubmit);

message();

function message () {
    const h3 = document.createElement('h3');

    h3.textContent = listContainer.firstElementChild ? 'Tareas por hacer' : 'No hay tareas aun';

    //listContainer.parentElement.insertBefore(h3, listContainer);
    listContainer.before(h3);
}
function handleSubmit(e) {
    e.preventDefault(); //Para que no se recargue la página ya que es un submit
    const inputValue = input.value;
    createTask(inputValue);

    this.reset(); //resetear los valores
}

function createTask (value) {
    const newTask = document.createElement('li');
    newTask.textContent = value;
    
    //Apend permite agrega un nodo hijo un nodo a la vez
    //listContainer.appendChild(newTask);
    //Permite agregar varios nodos a la vez
    listContainer.append(newTask);
}