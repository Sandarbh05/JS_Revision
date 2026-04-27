const myNums = [1,2,3,4,5,6,7,8,9,10]

//Map also takes callback parameters, it also returns values automatically --> Not only condition true values are returned
// const newNums=myNums.map( (num)=> num+10)
// const newNums=myNums.map( (num)=> {return num+10}) //Use return keyword to get out of the scope
// console.log(newNums);

// const newNums = myNums.map().map() //chaining is also possible
const newNums = myNums.map((num) => num*10).map((num) => num+10).filter((num)=> num>50)
console.log(newNums);


