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
    h3.classList.add('task-message')

    h3.textContent = listContainer.firstElementChild ? 'Tareas por hacer' : 'No hay tareas aun';

    const prevMessage = document.querySelector('.task-message');
    
    //listContainer.parentElement.insertBefore(h3, listContainer);
    if(prevMessage){
        //Remplazará un valor h3 en caso de que tenga datos
        prevMessage.replaceWith(h3);
        return;
    }
    listContainer.before(h3);
}
function handleSubmit(e) {
    e.preventDefault(); //Para que no se recargue la página ya que es un submit
    const inputValue = input.value;
    createTask(inputValue);

    this.reset(); //resetear los valores
    message();
}

function createTask (value) {
    const newTask = document.createElement('li');
    newTask.textContent = value;
    
    //Apend permite agrega un nodo hijo un nodo a la vez
    //listContainer.appendChild(newTask);
    //Permite agregar varios nodos a la vez
    listContainer.append(newTask);

    addEvents(newTask);
}

function addEvents(element){
    //                        Evento doble click
    element.addEventListener('dblclick', function(){

        //Eliminar elemento, dos formas:
        // element.parentElement.removeChild(element);
        element.remove(element);
        message();
    } );
}

/**
 * insertAdjacentHTML
 *  Este permite insertar codigo HTML directo en el script.
 *  Recibe dos parametros:
 *      donde va a empezar
 *      codigo HTML
 * (CON ESTE PUEDE HABER INSERCCIÓN DE CODIGO)
 * 
 * insertAdjacentElement
 *  Este nos permite agregar un elemento dentro de un nodo especifico
 * 
 * cloneNode
 *  Clona un nodo:
 *      true: va a copiar cada elemento del nodo, incluyendo descendientes
 *      false: solo copia el nodo, sin descendientes.addEventListener('type', listener, options)
 */

const wrapper = document.querySelector('.wrapper');
wrapper.insertAdjacentHTML('beforebegin',`
    <h1>HTML creado con JS</h1>
    <button>Dame click</button>
`);

const h2 = document.querySelector('h2');
h2.textContent = 'Hola Amigos';
wrapper.insertAdjacentElement('beforebegin', h2);

const copyWrapper = wrapper.cloneNode(true);

wrapper.before(copyWrapper);