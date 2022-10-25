/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul = document.createElement("ul");
document.body.appendChild(ul);
for (const item of countries) {
   ul.innerHTML += `
   <li>${item}</li>
   `
}
//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
var supr = document.querySelector(".fn-remove-me");
supr.remove("fn-remove-me");
/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".*/
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']; 
let div = document.querySelector("div");

for (const item of cars) {
    div.innerHTML += `
   <ul>
    <li>${item}</li>
    </ul>
`
}




/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */
const countries1 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
/* const list = document.createElement("div");
document.body.appendChild(list);
for (const country of countries1) {
   const h4 = `
   <h4>${country.title}</h4>
   <img>${country.imgUrl}</img>
   ` 
list.innerHTML += h4;
};
 */
const countryList = document.createElement("ul");
for (const country of countries1) {
   const div = document.createElement("div");
   const h4 = document.createElement("h4");
   const img = document.createElement("img");
   const btn = document.createElement("button");


   
}






/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista. */

const boton = document.createElement("button");
document.body.appendChild(boton);



/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html. */

