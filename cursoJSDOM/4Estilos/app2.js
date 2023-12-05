/**
 * setProperty
 *  Asignación de valores. Recibe dos parametros:
 *      - modificación
 *      - valor
 * 
 * getPropertyValue
 *  Retorna un string de la propiedad CSS, como parametros un valor CSS.
 * 
 * getPropertyPriority
 *  Nos ayuda a saber si una propiedad tiene un valor important.
 * 
 * getComputedStyle
 *  Retorna un objeto con valores computados de las propiedades CSS de elementos que se usan como parametro.
 */

const title = document.querySelector('.title');
const inputColor = document.querySelector('[type="color"]')
const inputRange = document.querySelector('[type="range"]');

inputColor.addEventListener('change',function(e){
    const newColor = e.target.value;
    title.style.color = newColor;
});

inputRange.addEventListener('change', function (e) {
    const newFontSize = e.target.value;
    title.style.setProperty('font-size',newFontSize+'px');
    //O
    //title.style.fontSize = newFontSize + 'px';
});