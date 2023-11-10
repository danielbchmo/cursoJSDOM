/*
Recordar que DOM hace referencia a Document Object Model, donde document es todo nuestro archivo html en forma de arbol
Nuestra primera funcion se cetra en:
    
    document.documentElement

El cual representa el html.
Por ejemplo, si quieremos acceder a la sección de DOCTYPE, solo llamamos:
    
    document.doctype

NODOS
Los nodos hacen referencia a los atributos de cada etiqueta, como "id y class".
Cabe mencionar que a los espacios y tabulaciones, se les considera nodos de tipo texto.

JS solo tomara encuenta el codigo que este antes del <script>.
*/

//Acceder a body
const body = document.body;

//Accerder a otra etiqueta child - Todas las etiquetas
//Podemos llamar a distintos nodos por su pocisión
//  document.body.childNodes[1];
const child = document.body.childNodes;
console.log(child.childNodes); //Acceder a los hijos de child

//Propiedad children regresa nodos de tipos elemento, nodos html
const children = document.body.children;
//Retorna el primer child
const firstChild = document.body.firstChild;
//Retorna primer child de element
const firstElementChild = documet.body.firstElementChild;
//Ultimo Nodo
const lastChild = document.body.lastChild;
//Ultimo element
const lastElementChild = document.body.lastElementChild;

//Retorna verdadero si un contenedor tiene hijos
console.log(lastElementChild.hasChildNodes());
