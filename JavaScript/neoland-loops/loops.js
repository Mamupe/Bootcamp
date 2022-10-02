//Iteración #1:

/* Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". 
Usa la función .***includes*** de javascript. */
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
for (let index = 0; index < products.length; index++) {
    const element = products[index];
    products.includes('Camiseta')
}
console.log(products);


//Iteración #2: Condicionales avanzados
//Iteracion #3:

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']
for (const iterator of placesToTravel) {
    console.log(iterator);
    
}

//Iteración #4: Probando For...in
//Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const key in alien) {
    console.log(${key} ${alien[key]});
  }
  









