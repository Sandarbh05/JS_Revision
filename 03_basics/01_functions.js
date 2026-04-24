
//Function Definition
function sayMyName(){
    console.log("s");
    console.log("a");
    console.log("n");
    console.log("d");
    console.log("a");
    console.log("r");
    console.log("b");
    console.log("h");
}

// sayMyName //Function Reference
// sayMyName() //Function calling

// function addTwoNumbers(number1, number2){ //Parameters
//     console.log(number1+number2)
// }

function addTwoNumbers(number1, number2){ //Parameters
    return number1+number2
}

addTwoNumbers(3, 5) //Without Arguments will give NaN, 

const result = addTwoNumbers(3, 5) 

console.log(result);

function loginUserMessage(username = "sam"){ //Giving default value
    if(!username){ //Check Value Existence
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
 
// console.log(loginUserMessage("sandarbh"));
console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){ //Using Rest/Spread Operator --> Especially used as a  parameter when we don't know how much arguments we will give to the function
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)); //only 500 & 2000 will be printed as they are part of num1 array

const user = {
    username : "sandarbh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);   
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 259
})

const myNewArr = [200, 400, 100, 600]

function returnSecondValue(arr){
    return arr[1]
}

console.log(myNewArr); // 400
