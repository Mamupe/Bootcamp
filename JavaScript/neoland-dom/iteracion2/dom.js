//Iteración #2: Modificando el DOM
//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div1 = document.createElement("div");
const empty = document.body.appendChild(div1);
console.log(empty);
//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div2 = document.createElement("div");
const parrafo = document.createElement("p");
const empty2 = document.body.appendChild(div2);
const empty3 = div2.appendChild(parrafo);
console.log(empty3);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.


//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const parrafo2 = document.createElement("p");
const empty4 = document.body.appendChild(parrafo2);
const textop = document.createTextNode('Soy dinámico');
parrafo2.appendChild(textop);
console.log(parrafo2);
//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const htmlh2 = document.querySelector('.fn-insert-here');
let lubba = htmlh2.innerHTML = 'Wubba Lubba dub dub';
console.log(lubba);
//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
//const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//Recuerda que no solo puedes insertar elementos con .appendChild.

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here