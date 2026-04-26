//Reduce --> Takes callback function and initial value for accumulator as arguments

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const myTotal = myNums.reduce(function(accumulator, currentValue){
//     console.log(`accumulator is : ${accumulator} and current value is : ${currentValue}`);
//     return accumulator+currentValue
// }, 0) //--> Have to give callback as well as Initial value for accumulator and the result is the accumulator value 
// console.log(myTotal); //55, total value at the end of accumulator is 55

const myTotal = myNums.reduce((acc, cur) => acc+cur, 0)
//It does the same thing as above but using reduce method
console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "python course",
        price: 999
    },
    {
        itemName : "mobile dev course",
        price: 5999
    },
    {
        itemName : "data science course",
        price: 12999
    },
]

const cartPrice = shoppingCart.reduce((accumulator, currentCourse) => accumulator + currentCourse.price, 0) 
console.log(cartPrice);
