// Consider the following code:        
// console.log(a);
// console.log(b);
// var a = 10;
// let b = 20;
// function test() {
//   console.log(c);
//   var c = 30;
// }
// test();

// Q1.	Predict the output of the above code.
// Answer: The output will be:
// undefined
// ReferenceError: Cannot access 'b' before initialization
// undefined

// Q2.Why : 1.Why a prints undefined 2.Why b throws an error 3.Why c is undefined inside the function?
// Ans :
// 1. The variable 'a' is declared using 'var', which is hoisted to the top of its scope and initialized with 'undefined'. Therefore, when 'console.log(a)' is executed, it prints 'undefined'.
// 2. The variable 'b' is declared using 'let', which is also hoisted but not initialized. It remains in a "temporal dead zone" until its declaration is encountered. Therefore, trying to access 'b' before its declaration results in a ReferenceError.
// 3. Inside the function 'test', the variable 'c' is declared using 'var', which is hoisted to the top of the function scope and initialized with 'undefined'. Therefore, when 'console.log(c)' is executed inside the function, it prints 'undefined'.



// Q3. Identify the line that causes the error.
// Answer: The line that causes the error is: console.log(b);
// This line attempts to access the variable 'b' before it has been initialized, resulting in a ReferenceError.
// Line one console.log(a); does not cause error cause it prints undefined


// Corret rewrite without errors:
var a = 10;
let b = 20;
console.log(a);
console.log(b);
function test() {
  var c = 30;
  console.log(c);
}
test();