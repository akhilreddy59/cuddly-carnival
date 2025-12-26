// console.log(x);
// var x = 3;

// function outer(a) {
//   const x = a + 1;
//   console.log(x);

//   function middle(b) {
//     const y = b + 2;
//     console.log(y);

//     function inner(c) {
//       const z = c + 3; // call stack follows LIFO (last in first out) principle.
//       console.log(z);
//     }
//     inner(4);
//   }
//   middle(5);
// }
// outer(6);

// Hoisting
// Function hoisting
// name();
// function name() {
//   console.log("Akhil Reddy");
// }
//variable hoisting

//console.log(name);
//var name = "Akhil Reddy"; // var - undefined & Akhil Reddy  ,but  let & const - throws error (code1)
//console.log(name);

//sayHello();
//var sayHello = () => console.log("Hello Guys"); //  TypeError: sayHello is not a function

var sayHello = () => console.log("Hello guys"); //prints Hnello Guys
sayHello();

//sayHello();
//let sayHello = () => console.log("Hello Guys"); //  ReferenceError: Cannot access 'sayHello' before initialization

//sayHello();
//const sayHello = () => console.log("Hello Guys");    // ReferenceError: Cannot access 'sayHello' before initialization

// A TypeError indicates that a variable exists but is being used in a way that is incompatible with its type.
// A ReferenceError indicates a failure in locating the variable itself. The JavaScript engine cannot find a memory reference for the variable being accessed.

// const x = 1;
// function test() {
//   console.log(x);
//   var x = 2;
//   console.log(x);
// }
// test();
