//for of
//for in, for of & forEach are called Higher order array loops
// ["", "", ""]
// [{}, {}, {}]

const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num); //1,2,3,4,5
}

const greetings = "Hello World"

for(const greet of greetings){
    console.log(`Each char is : ${greet}`); //g,r,e,e,t,i,n,g,s
}

//Maps --> objects which stores key-value pair in the order you give it
const map=new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

console.log(map);

for (const [key, value] of map) { //destructuring key and value
    console.log(key, value);  
}

const myObj = {
    'game1': "nfs",
    'game2': "spiderman"
}

////Not possible, maps are iterable whereas objects aren't, objects have different ways to iterate them
// for (const [key, value] of myObj) { 
//     console.log(key, value);
// }

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//for in loops are usually used for iterating objects, although we can use them for arrays as well
for (const key in myObject) {    
    // console.log(key); //Get keys
    // console.log(myObject[key]); //Get values
    console.log(`${key} for ${myObject[key]}`);
}


const programming = ["js", "ruby", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(key); //For in loop prints indices as they are keys in arrays --? 0,1,2,3,4,5
    console.log(programming[key]);   
}


//For in loop is not possible in maps, although they don't give errors on iterating i.e. they are non iterable just like objects
// for (const key in map) {
//     console.log(key);
//     console.log(map[key]);
// }
