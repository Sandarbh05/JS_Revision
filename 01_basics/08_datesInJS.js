//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23) //Format 1
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) //Format 2
// let myCreatedDate = new Date("2023-01-14") //Format 3 YY-MM-DD
let myCreatedDate = new Date("01-14-2023") //Format 4 MM-DD-YY

console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() //By default is in milliseconds
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000)); //Convert to seconds

let newDate = new Date()
console.log(newDate.getMonth() + 1) // month
console.log(newDate.getDay()) // day

newDate.toLocaleString('default', {
    weekday: "long",
})