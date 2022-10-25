//**Iteración #1: Mix for e includes**

//Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas
//e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. 
//Para filtrar las categorías puedes ayudarte de la función **.includes()**
 const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']}, 
]
const categorias = []
for (const movie of movies) {
        for (const category of movie.categories) {
        if (categorias.includes(category) == false) {
            categorias.push(category)
        }
    }
}
console.log(categorias);
//**Iteración #2: Mix Fors**

//Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.
const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
const favoritos = [];
for (let user of users) {
    for (let sound in user.favoritesSounds) {
        favoritos.push(user.favoritesSounds[sound].volume)
    }
}
let media = (param) =>{
    let suma = 0;
    for (let item of param) {
        suma = suma + item;
    }
    return suma / param.length
}
console.log(media(favoritos));

//Iteración #3: Mix Fors
//Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.
//para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
//Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.
const users1 = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

const sonidosFavoritos = new Object;
for (const user1 of users1) {
    for (let sound in user1.favoritesSounds) {
       if (sonidosFavoritos[sound] == null) {
        sonidosFavoritos[sound] = 1;
       } else {
        sonidosFavoritos[sound] = sonidosFavoritos[sound] + 1;
       }
    }
}
console.log(sonidosFavoritos);

//**Iteración #4: Métodos findArrayIndex**

//Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array
//cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

//Sugerencia de función:
const animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
const findArrayIndex = (array, text) => {
for ( let item of array) {
    if ( text == item) {
        return array.indexOf(item);
    }
}
}

console.log(findArrayIndex(animals, "Mosquito"));
console.log(findArrayIndex(animals, "Ajolote"));



//Iteración #5: Función rollDice
//Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá simular 
//el codigo dentro de la función.
//Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. 

const rollDice = (caras) => {
const dado = Math.floor(Math.random() * caras) + 1;
return dado
}

console.log(rollDice(6))

//**Iteración #6: Función swap**
//Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array. 
//La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 
//Retorna el array resultante.
const players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

const nArray = [];
const swap = (array, firtsIndex, secondIndex) => {
    for ( const item of array) {
        if (item !== array[firtsIndex] && item !== array[secondIndex]) {
            nArray.push(item)
        } else if (item == array[firtsIndex]) {
            nArray.push(array[secondIndex])
        } else if (item == array[secondIndex]) {
            nArray.push(array[firtsIndex])
        }
    }
    return nArray
}
console.log(swap(players, 1, 3));






















