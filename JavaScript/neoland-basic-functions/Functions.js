// Iteration#1
//Completa la función que tomando dos números como argumento devuelva el más alto.
function sum(numberOne , numberTwo) {
 
    if(numberOne > numberTwo){
        return numberOne
        
    } else {
        return numberTwo
    }
}
numberOne = 5;
numberTwo = 7;
console.log(sum(5,7));

/* Iteración #2: Buscar la palabra más larga

Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función: */

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
const findLongestWord = (avengers) => {
  let longestWord = "";
  for (const avenger of avengers) {
    if (avenger.length > longestWord.length) {
      longestWord = avenger;
    }

  }
return longestWord;
}

console.log(findLongestWord(avengers)); 
/* **Iteración #3: Calcular la suma**

Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 

Puedes usar este array para probar tu función: */
const numbers1 = [1, 2, 3, 5, 45, 37, 58];
const sumNumbers = (numbers) => {

  let suma = 0;
        
  numbers1.forEach (function(number){
      suma += number;
  });
  return suma
}
let suma = sumNumbers(numbers1)
console.log(sumNumbers(suma)); 


//**Iteración #4: Calcular el promedio**

//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numbers = [12, 21, 38, 5, 45, 37, 6];
 const average = (numbers) => {
  let i = 0, summ = 0, array = numbers.length;
  while (i < array) {
      summ = summ + numbers[i++];
}
  return summ / array;
}
let media = average(numbers);
console.log(media)

//Iteración #5: Calcular promedio de strings
//Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud 
//del string y lo sume.
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
const averageWord(mixedElements) => {

}










