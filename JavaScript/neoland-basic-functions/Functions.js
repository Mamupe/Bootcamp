// Iteration#1
//Completa la función que tomando dos números como argumento devuelva el más alto.
function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}
numberOne = 5;
numberTwo = 7;
console.log(sum(5, 7));

/* Iteración #2: Buscar la palabra más larga

Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función: */

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
const findLongestWord = (avengers) => {
  let longestWord = "";
  for (const avenger of avengers) {
    if (avenger.length > longestWord.length) {
      longestWord = avenger;
    }
  }
  return longestWord;
};

console.log(findLongestWord(avengers));
/* **Iteración #3: Calcular la suma**

Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 

Puedes usar este array para probar tu función: */
const numbers1 = [1, 2, 3, 5, 45, 37, 58];
const sumNumbers = (numbers) => {
  let suma = 0;

  numbers1.forEach(function (number) {
    suma += number;
  });
  return suma;
};
let suma = sumNumbers(numbers1);
console.log(sumNumbers(suma));

//**Iteración #4: Calcular el promedio**

//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numbers = [12, 21, 38, 5, 45, 37, 6];
const average = (numbers) => {
  let i = 0,
    summ = 0,
    array = numbers.length;
  while (i < array) {
    summ = summ + numbers[i++];
  }
  return summ / array;
};
let media = average(numbers);
console.log(media);

//Iteración #5: Calcular promedio de strings
//Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud
//del string y lo sume.
const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
const averageWord = (param) => {
  let suma = 0;
  for (const element of param) {
    if (typeof element == "number") {
      suma = suma + element;
    } else if (typeof element == "string") suma = suma + element.length;
  }
  return suma;
};

console.log(averageWord(mixedElements));

//**Iteración #6: Valores únicos**
//Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para
//retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
const removeDuplicates = (array1) => {
  let comida = [new Set(duplicates)];
  return comida;
};
console.log(removeDuplicates(duplicates));

//let removeDuplicates = (param) => {
/*   let newArrayWithoutDuplicated = []; //le estoy indicando que la nueva variable tendrá forma de array. Si necesitase que tuviera forma de string ponemos " " y si necesitamos forma de número un cero.
  for (let element of param) {
      if (newArrayWithoutDuplicated.includes(element)==false) {
          newArrayWithoutDuplicated.push(element); 
      } 
  }
  return newArrayWithoutDuplicated;
} */

//Iteración #7: Buscador de nombres
//Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array,
//comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
const finderName = (finder) => {
  for (let i = 0; i < nameFinder.length; i++) {
    const str = nameFinder[i];
    if (str.includes("Logan")) {
      return true + [i + 1];
    }
  }
};
console.log(finderName(nameFinder));

//Iteration #8: Contador de repeticiones

//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
const repeatCounter = (elArray) => {
  let counter = new Object();
  for (const element of elArray) {
    if (counter[element] == null) {
      counter[element] = 1;
    } 
    else {
      counter[element] = counter[element] + 1;
    }
   
  }
  console.log(counter);
};
repeatCounter(counterWords);
