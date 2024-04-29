const marvel_heros = ["thor", "Ironman","SpiderMan"]
const dc_heros = ["SuperMan", "Flash", "Batman"]

//marvel_heros.push(dc_heros)// push work on exist array
//console.log(marvel_heros)
//console.log(marvel_heros[3][1]);

//const AllHeros= marvel_heros.concat(dc_heros);// CONCAT WORK ON NEW ARRAY THATS WHY WE CREATE A NEW OBJECT
//console.log(AllHeros);

//****SPREAD */

const all_new_heros = [...marvel_heros, ...dc_heros] /// called spread syntax
console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7[4,5]]]

const real_another_array = another_array.flat();
console.log(real_another_array)

console.log(Array.isArray("Hitesh"))// check that the value is present in array or not
console.log(Array.from("Hitesh"))

console.log(Array.from({name: "hitesh"}))// INTERESTING

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2,score3))