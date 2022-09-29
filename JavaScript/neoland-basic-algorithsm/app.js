//"Iteration#1"
let myFavoriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y;

//"Iteration#2"
/*  const character = { name: "Jack Sparrow", age: 10 };
age = 25;  */

let firstName = "Jon";
let lastName = "Snow";
let age = 24;
console.log("Soy " + firstName + " " + lastName + ", " + "tengo " + age + " años y me gustan los lobos");

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1.price + toy2.price);


let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice = 25000;
car1.finalPrice = (car1.basePrice + globalBasePrice);
car2.finalPrice = (car2.basePrice + globalBasePrice);
console.log(car1.finalPrice);
console.log(car2.finalPrice);







//"Iteration#3"
let num1 = 10;
let num2 = 5;

console.log(num1 + num2);

let num3 = 10;
let num4 = 2;
console.log(num3 * num4);

const div1 = 15;
const div2 = 9;
const resto = (div1 % div2);
console.log(resto);

let p = 10;
let j = 5;
o = (p + j);
console.log(o);

let c = 10;
let m = 5;
i = (c * m);
console.log(i);

//Iteración #4


const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let Hulk = avengers[0];
console.log(Hulk);

const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers1.splice(0, 1, 'IRONMAN');
console.log(avengers1);

const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers2.length);

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
const last = rickAndMortyCharacters[rickAndMortyCharacters.length - 1];
console.log(last);
//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lápiz López"];
rickAndMortyCharacters1.pop()
console.log(rickAndMortyCharacters1);
const firstLast = rickAndMortyCharacters1[0];
console.log(rickAndMortyCharacters1[(rickAndMortyCharacters1.length) -1]);

//Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.splice(1, 1)
console.log(rickAndMortyCharacters2); 


//Iteración #5

const number1 = 10;
const number2 = 20;
const number3 = 2;

if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2 / number1 == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3 * 5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 / 2 == number1 || number1 / 5 == number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

//Iteración #6

//1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for (let x = 0; x < 10; x++) {
  console.log(x);
}

//1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo cuando el resto del numero dividido entre 2 sea 0.

let moderatIII = new Array();
            moderatIII[0] = "Eating hooks";
            moderatIII[1] = "Running";
            moderatIII[2] = "Finder";
            moderatIII[3] = "Ghostmother";
            moderatIII[4] = "Reminder";
            moderatIII[5] = "Intruder";
            moderatIII[6] = "Animal trails";    

//console.log(moderatIII.splice(2,2));


/* console.log(moderatIII); */



//console.log(moderatIII.splice(2,2,'Ethereal'));



let nuevo = (moderatIII.splice(2,2,'Ethereal','Ethereal Remix vol.1','Ethereal Remix vol.2')); 
console.log(nuevo);