//Iteración #1: Creando Events

//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click
const boton = document.createElement("button");
document.body.appendChild(boton);
boton.setAttribute('id', 'btnToClick');


let clicar = function(event) {
    console.log(event);
 }
 document.getElementById("btnToClick").addEventListener("click", clicar);




//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focuss = document.querySelector(".focus");
focuss.addEventListener("focus", (ev) => console.log(focuss.value));




//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const input = document.querySelector("input");
input.addEventListener("input", (ev) => console.log(input.value));