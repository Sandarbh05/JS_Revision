
const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "hot_wonderwoman"]

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1]);

const all_heroes=marvel_heroes.concat(dc_heroes) //merges both arrays, needs new array to form doesn't modify existing one
console.log(all_heroes)

const all_new_heroes = [...marvel_heroes, ...dc_heroes] //using spread operator
console.log(all_heroes)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] //Double and triple nesting
const real_another_array = another_array.flat(Infinity) // Outputs [1, 2, 3, 4, 5, 6, 7, 6, 7,  4, 5]
//Returns a new array with all sub-array elements , concatenated into it upto the depth given 

console.log(Array.isArray("sandarbh")) //Checks if its an array
console.log(Array.from("sandarbh")) //Converts to Array from string
console.log(Array.from({name: "sandarbh"})) //Converts to Array from object, we have to mention keys or values to make arrays from **IMPORTANT**

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //Returns a new array from set of elements 
