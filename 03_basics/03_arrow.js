// Arrow function --> This --> This tells about current context

const user = {
    username : "Sandarbh",
    price: 999,
    welcomeMessage: function (){
        console.log(` ${this.username} Welcome to website`);
        // console.log(this); //Prints its entire object as reference
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()
console.log(this); // Outputs{}, but gives Windows Object as output in Browser

// function chai(){
//     let username = "sanduu"
//     console.log(this.username); //undefined, as this works only inside objects properly
// }
// chai()

// const chai = function (){
//     let username = "sanduu"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "sanduu"
//     console.log(this.username); //still gives undefined
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }
// const addTwo = (num1, num2) => num1+num2 //Implicit Return Using Arrow Functions Declaration
// const addTwo = (num1, num2) => (num1+num2) //Doesnt need Return when parenthesis are used
const addTwo = (num1, num2) => ({username : "sandarbh"}) //Must have to wrap object withing parenthesis for return

console.log(addTwo(3,5))


const myArr= [2,5, 3, 7]

myArr.forEach()