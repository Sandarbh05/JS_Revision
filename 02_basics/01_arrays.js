// Arrays
// Collection of multiple items in a single variable
//JS arrays are resizable
//Allows Mixed Datatypes & nesting
//Non Associative - can't be accessed through values
//Zero indexed
//Copy operations creates shallow copies not deep ones --> That means Arrays Share the same reference point, whereas deep copies do not share the same reference point

// const myArr = [0, 1, 2, 3, true, "sandarbh"]
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktimaan", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[2])

//Array Methods
// myArr.push(6)
// myArr.pop()
// myArr.unshift(0) //Adds value to start of the array
// myArr.shift() //Removes value from the start of the array

// console.log(myArr.includes(0));
// console.log(myArr.indexOf(9)); //-1, as 9 doesnt exist in the array otherwise location is output

// const newArr = myArr.join() //Binds and converts to string

// console.log(myArr)
// console.log(newArr, typeof newArr)

//slice, splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //Doesnt Modifies the original Array
console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3) //Modifies the original Array
console.log("C ", myArr)
console.log(myn2)