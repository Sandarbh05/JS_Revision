//Javascript working, behind the scenes
Firstly, Global Execution Context is created --> This stores the global execution context, Browser/Node/Deno/Bun all have different EC
Secondly we have Functional Execution Context
Thirdly, Eval Execution Context

//Memory Creation Phase --> Variables and other which are declared are allocated space
//Execution Phase --> All operations are performed in Execution Phase, Processing & Executions are done in this phase


//(1) Global Execution/Environment --> Gets allocated in 'this'
//(2) Memory/Creation Phase --> All variables are allocated some space and assigned value 'undefined', variables gets undefined and function definition are assigned
//(3) Execution Phase --> Variables are assigned the actual values, and another functional execution context are created for each function block where 'new environment + execution thread' are created (new execution context block)whenever a  functional block is encountered, where all 3 phases are performed in this sandboxed environment. The returned value from the functional block is passed to the Global Executional Context. After all the functional block is executed its context is entirely deleted


//Call Stack
//Global Execution Context is present at the bottom
//Next each function gets pushed to the stack one by one and its nested blocks, then popped right after its execution is done