const coding = ['js', 'rb', 'cpp', 'java', 'py']

//For each loop takes callback function  -->function without name or just arrow function

//Method - 1
coding.forEach(
    function (item){
        console.log(item);      
    }
)

//Method - 2
coding.forEach( (item) => {console.log(item)})

function printMe(item){
    console.log(item);
}

//Method - 3
coding.forEach(printMe) //Just give the reference to the function, it will execute by itself

//For Each loop has access to (item, index and array) in each iteration 
coding.forEach((item, index, array)=> {console.log(item, index, array);
})

//For Each loop is also used for iterating in array of objects --> Mostly used for database results
const myCoding = [
    {
        languageName: "javascript",
        extension: "js"
    },
    {
        languageName: "python",
        extension: "py"
    },
    {
        languageName: "java",
        extension: "java"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})
