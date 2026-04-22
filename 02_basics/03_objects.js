// Declaration --> 1) Literal, 2) Constructor --> Formed as a singleton

//singleton --> object created from contructor, unique

//Object Literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Sandarbh",
    "fullName": "Sandarbh Vansh", //We can only access string based keys using [] not .
    [mySym]: "mykey1", //For using Keys as a symbol and can be accessed using [] not .
    age: 18,
    location: "Lucknow", 
    email: "sandarbh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email) //Accessing Value 
console.log(JsUser["email"]) //Method 2 for Accessing Value

// console.log(JsUser."fullName") //Not Possible
// console.log(JsUser["fullName"]);  //Also Not Possible

console.log(typeof JsUser[mySym]) //Still it will give string because its value is string, but typeof Key is Symbol

JsUser.email = "sand@chatgpt.com" //Change the email property of JsUser
// Object.freeze(JsUser) //This will make object immutable, i.e. no changes will be propagated
// JsUser.email = "sand@micromax.com"

// console.log(JsUser); //No email will be changed as JsUser froze

JsUser.greeting = function(){
    console.log("Hello JS User")
}

JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}

// console.log(JsUser.greeting); //Function is not executed, only reference is returned
console.log(JsUser.greeting());
// console.log(JsUser.greeting2);
console.log(JsUser.greeting2());