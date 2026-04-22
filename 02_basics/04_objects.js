//Object Declaration
// const tinderUser = new Object() //Singleton object
const tinderUser = {} //Non Singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstname: "Sandarbh",
            lastname: "Vansh"
        }
    }
}

// console.log(regularUser.fullName?.userfullname.firstname); //Its called optional chaining ? means only enter the nesting if the currently object value exist, mostly used in API responses

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "b"}
const obj4 = {5: "c", 6: "c"}
// Merging objects
// 1)
// const obj3 = {obj1, obj2} // It will nest the objects instead of just merging

// 2)
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2, obj4) //Its optional but gives assurity that only object values will be merge to a target object

// 3)
const obj3 = {...obj1, obj2}
console.log(obj3);

console.log(Object.keys(tinderUser)); //Gives list of keys in an Array
console.log(Object.values(tinderUser)); //Gives list of values in an Array
console.log(Object.entries(tinderUser)); //Gives each entry of objects key-value pair in sets of Arrays

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //Check if the object has specific property available or not

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const course = {
    courseame: "English Tutorials Simplified",
    price: "999",
    courseInstructor: "sandarbh"
}

// course.courseInstructor

const { courseInstructor: Instructor } = course //Destructured and renamed

console.log(Instructor);

//Sample API response
// {
//     "name": "sandarbh",
//     "coursename": "js",
//     "price": "free"
// }

// randomuser me api for sample APIs --> JSON formatter for readibility
//API response in form of array 
// [
//     {},
//     {},
//     {}
// ]
