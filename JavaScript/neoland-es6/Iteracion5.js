/* 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18 */
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const newAges = ages.filter(function (ages) {  
    return ages > 18});
console.log(newAges);

/* 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par. */
const ages0 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const newAges0 = ages0.filter(function (ages0) {  
    return ages0 % 2 == 0});
console.log(newAges0);

/* 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'. */
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const enjutos = streamers.filter(function (streamers) {  
    return streamers.gameMorePlayed === 'League of Legends' });
    console.log(enjutos);

/* 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación. */
const streamers0 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const enjutos1 = streamers0.filter(function (streamers0) {
    return streamers0.name.includes("u")
})
console.log(enjutos1)
/* 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación. *
/ Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35. */
const enjutos2 = streamers0.filter((streamer) => 
streamer.gameMorePlayed.includes("Legends"))
 for (const streamer of enjutos2) {
    if (streamer.age > 35) {
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    }  
}
console.log(enjutos2); 
   
        
    





