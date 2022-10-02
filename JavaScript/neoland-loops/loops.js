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
//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true 
//o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***.
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
  

  **Iteración #5: Probando For**

 // Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. 
 // Imprime en un ***console log*** el array. Puedes usar este array:

 const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]






 //Iteración #6: Mixed For...of e includes
 //Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
 // Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array:
 const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]





  //  **Iteración #7: For...of avanzado**

  //  Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys.
  // Imprimelo por consola.. Puedes usar este array:
  const popularToys = [];
  const toys = [
      {id: 5, name: 'Buzz MyYear', sellCount: 10}, 
      {id: 11, name: 'Action Woman', sellCount: 24}, 
      {id: 23, name: 'Barbie Man', sellCount: 15}, 
      {id: 40, name: 'El gato con Guantes', sellCount: 8},
      {id: 40, name: 'El gato felix', sellCount: 35}
  ]





