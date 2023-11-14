/**
 * className, nodeName, innerHTML, outerHTML y textContent
 * 
 * Esta parte mostrará las propiedades más importante que un objeto
 */

const wrapper = document.querySelector('#wrapper')
const title = document.querySelector('.title')
const link = document.querySelector('.link.bold')
const inputBtn = document.querySelector('[type="button"]')

//Mostrar las propiedades de un objeto
//console.dir(wrapper)

//Retorna la propiedad className de wrapper
console.log(wrapper.className)

/**
 * Para modificar el className de un elemento, asignamos lo siguiente:
 *      wrapper.className = 'container'
 */

/**
 * nodeName retorna el nombre del nodo en el cual se llama la propiedad 
 *      console.log(wrapper.chilNodes[0].nodeName)
 */

/**
 * innerHTML retorna el HTML interno del nodo del cual es llamado
 * 
 * También funciona para modificar el HTML
 *      wrapper.innerHTML = `
 *      `<h2>He sobrescrito el DOM</h2>
 * Cabe mencionar que usar innerHTML puede generar injección de codigo
 * 
 * Podemos concatenar una etiqueta ya existente
 *      wrapper.innerHTML += `
 *          <h2>HTML concatenado</h2>
 *      `
 * Aunque toma muchos recursos del usuario
 */

/**
 * outerHTML realiza una acción similar de inner, pero al momento de sobreescribir el docuemento
 * , este seguira referenciando al primer HTML escrito.
 */

/**
 * textContent permite visualizar el texto actual de un nodo o reemplazarlo.
 * Es ideal para agregar contenido nuevo que el usuario ingrese.
 *      console.log(wrapper.textContent)
 *      const newText = prompt('¿Como te llamas?')
 *      title.textContext = 'Hola ${newText}'
 */