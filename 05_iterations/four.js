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

//Storing result of forEach loop in a variable --> FOR EACH LOOP DOES NOT RETURN VALUES
// const values = myCoding.forEach((item)=> {
//     // console.log(item);
//     return item //Still give undefined
// })
// console.log(values); //Undefined

// const myNumbs = [1,2,3,4,5,6,7,8,9,10]

//filter method also take callbacks as parameters --> Only returns true values
// const newNums = myNumbs.filter((num) => num>4) //Returns values
// const newNums = myNumbs.filter((num) => {return num>4}) //{} starts a scope so return keyword is required
// console.log(newNums) //[5,6,7,8,9,10]


//Adding these values into a new value
// const newNums=[]
// myNumbs.forEach((num)=> {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBooks = books.filter((bk)=> bk.genre=='History')
// const userBooks = books.filter((bk)=> bk.publish>=2000)
const userBooks = books.filter((bk)=> bk.publish>=1995 && bk.genre=="History")

console.log(userBooks);
