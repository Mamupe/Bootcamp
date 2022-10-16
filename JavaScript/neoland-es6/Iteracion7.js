/* 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
los alumnos usando la función .reduce(). */

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];
let notas =  exams.reduce((acc, nota) => acc + nota.score, 0);
    console.log(notas);
   
/* 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
alumnos que esten aprobados usando la función .reduce(). */
const filt = exams.filter(function (exams) {
    return exams.score >= 5
})
const suma = filt.reduce((acc, notaAp) => acc + notaAp.score, 0);
console.log(suma);

/* 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce(). */
let notas2 =  exams.reduce((acc, notaMed) => acc + notaMed.score / exams.length, 0);
console.log(notas2);