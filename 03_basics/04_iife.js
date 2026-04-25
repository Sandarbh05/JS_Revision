// Immediately Invoked Function Expressions (IIFE)
//Advantage : Protects from Global Scoped Execution Pollution
//IIFE - Named IIFE
(function one(){
    console.log("DB connected");
})(); //Putting semi colon in the end so that IIFE after this one can be executed safely

// (function definition)() --> function call [IIFE]


//Arrow function IIFE with parameters - Unnamed IIFE
// ((name) => {
//     console.log(`DB connected two, ${name}`);
    
// })('sandy')