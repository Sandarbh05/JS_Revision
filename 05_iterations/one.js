//for loop

//for (variable declare; test expression; increment/decrement){
    //for loop block
// }

for (let index = 0; index < 10; index++) {
    // const element = array[index];
    const el = index
    if(el==5){
        // console.log("5 is the best number");
        
    }
    // console.log(el);
}

// console.log(el); //Not accessible, out of scope

for (let i = 0; i < 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    
    for (let j = 0; j < 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop: ${i}`)
        console.log(i + '*' + j + ' = ' + (i*j));
        
    }
    
}


let myArr = ["flash", "batman", "superman"]
// console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

//break and continue

for (let index = 1; index < 20; index++) {
    if(index==5){
        console.log(`Detected : ${index}`);
        // break
        continue
    }
    console.log(`Value of i is : ${index}`);
}