// The 4 Rules of this

// function showThis() {
//   console.log(this);   // 1. Default Binding (Global Scope)
// }
// showThis();

// const user = {
//   name: "akhil",
//   greet: function () {
//     function inner() {
//       console.log(`Hi, my name is ${this.name}`); ////2. Implicit Binding (The Object Method)
//     }
//     inner();
//   },
// }; //output : undefined

// user.greet();

const x = "Hello";
console.log(x);
