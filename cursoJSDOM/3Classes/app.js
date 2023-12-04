/**ClassList, ClassList.item, ClassList.add, ClassList.remove, ClassList.toggle
 * 
 * classList 
 *  Es una propiedad de solo lectura y devuelve una colección DOM Token List, es decir,
 *  devuelve las clases de la lista.
 * 
 * classItem
 *  Retorna un elemento o clase de la lista de clases, dependiendo de su posición en la lista.
 * 
 * classList.add
 *  Permite agregar una clase a la lista de clases sin modificar las anteriores.
 * 
 * classRemove
 *  Permite remover una clase.
 * 
 * classToggle
 *  Este permite jugar con un boton en donde si presiono una vez, realiza una acción distinta al segundo click.
 * 
 * classContains
 *  Pregunta si existe alguna clase dentro de una lista
 * 
 * classReplace
 *  Permite cambiar una clase existente por una nueva
*/

const button = document.querySelector('.button');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal_close');

// console.log(modal.classList)
// console.log(modal.classList.item(2))

button.addEventListener('click', function(){
    modal.classList.add("show")
})

closeModal.addEventListener('click', function(){
    modal.classList.remove("show");
})

button.addEventListener('click', function(){
    button.classList.toggle('red')
});



