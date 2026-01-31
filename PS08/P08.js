// Problem statement 8: 
// Predict Output and explain its output reason
sayHello();
function sayHello() {
  console.log("Hello");
}
sayHi();
var sayHi = function () {
  console.log("Hi");
};

// Output:
// Hello
// TypeError: sayHi is not a function


// Reason??
// In JavaScript, function declarations are hoisted to the top of their scope,
// meaning they can be called before they are defined in the code. Therefore,
// when sayHello() is called, it successfully logs "Hello" to the console.

// On the other hand, variable declarations using var are also hoisted, but their
// assignments are not. When sayHi() is called, sayHi is still undefined at that
// point in the code, leading to a TypeError because you cannot call undefined
// as a function.