/* 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.*/

const baseUrl = "https://api.nationalize.io";

const getData = async (name) => {
  const data = await fetch(`https://api.nationalize.io?name=${name}`);
  const dataJson = await data.json();
  //console.log(dataJson);
  return dataJson;
};
/* const clickEvent = () => {
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    const input = document.querySelector("input").value;
    getData(input);
  });
}; */
//getData();
//clickEvent();

/*  2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ. */

const ul = document.createElement("ul");
document.body.appendChild(ul);

let printData = (personName) => {
  personName.country.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `
<p>El nombre ${personName.name} tiene una ${element.probability} % de ser de ${element.country_id}</p>
`;
ul.appendChild(li)
const deleteButton = document.createElement("button");
li.appendChild(deleteButton);
deleteButton.innerText = `X`;
deleteButton.addEventListener("click", () => {
    li.remove()});
  });
  
};



const clickEvent = () => {
    const button = document.querySelector("button");
    button.addEventListener("click", async () => {
      const input = document.querySelector("input").value;
      const dataPrint = await getData(input);
      printData(dataPrint);
    })
};

clickEvent();

/* 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado.  */



