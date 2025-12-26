// let obj1 = {
//   name: "Akhil",
//   age: 19,
// };
// let obj2 = obj1;

// obj2.name = "Akhil Reddy"; //  Changing one affects the other!
// console.log(obj1.name);

// function person(name) {
//   this.name = name;
// }

// person.prototype.greet = function () {
//   console.log(`Hello my name is  ${this.name}`);
// };

// const person1 = new person("akhil");

// person1.greet();

// const animal = {
//   eats: true,
// };
// const rabbit = Object.create(animal);
// rabbit.eats = null; // shadowing
// console.log(rabbit.eats);

const parent = {
  hair: "black",
};
const child = Object.create(parent);
child.name = "akhil";

console.log("names" in child);
console.log(child.hasOwnProperty("name"));
