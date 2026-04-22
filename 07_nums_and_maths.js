const score = 400 //By default type is detected as number
console.log(score)
//But we can explicitly defined its type 
const balance = new Number(100)
console.log(balance) //Casts specifically as number
console.log(typeof score, typeof balance); //number, object

console.log(typeof balance.toString())
console.log(balance.toString().length);

console.log(balance.toFixed(2)); //Gives value upto specific floating point precision

const otherNumber = 1123.8966 //try it with 123.866 --> precision 4, 3 as well

console.log(otherNumber.toPrecision(3)) //Gives precise amount of characters and then roundoff, gives priority before decimal

const x = 1000000
console.log(x.toLocaleString()) //Converts num to string with commas accor to US standard(default) for more readibility
console.log(x.toLocaleString('en-IN')) //Accor to Indian standard
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// +++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4)) //Converts to absolute values (positive)
console.log(Math.round(4.3)) //rounds off
console.log(Math.ceil(4.2)); //rounds to top value
console.log(Math.floor(4.2)); //rounds to bottom value
console.log(Math.min(3,4,5,2,8)); //gives min out of all
console.log(Math.max(3,4,5,2,8)); //gives max out of all

console.log(Math.random()); //Gives a random floating value between 0 & 1
console.log(Math.random()*10); //Gives a random num between 0 & 10 but float
console.log(Math.floor(Math.random()*10)+1); //Gives a random num between 1 & 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min)


