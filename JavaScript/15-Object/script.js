// What is Object Literals
// A JavaScript object is a collection of properties. Each property has a key(name) and a value.
// Think of it like a real world item that has characteristics(properties) and sometimes actions(methods).

// Syntax of an Object
// let objectName = {
//   key1: value1,
//   key2: value2,
//   // ... more key-value pairs
// };

// Example 1 A Car Object:
// Think of a car: it has a color, brand, model, and it can drive.
// let car = {
//   brand: "Toyota",
//   model: "Corolla",
//   color: "White",
//   year: 2021,
//   start: function () {
//     console.log("The car has started.");
//   },
// };
// console.log(car);

// How to Access Object Properties

// 1. Dot notation:
// console.log(car.brand); // Output: Toyota
// car.start(); // Output: The car has started.

// 2. Bracket notation:
// console.log(car["model"]);

// Example 2 A Student Object:
// A student has a name, age, and can say hello.
// let student = {
//   name: "Shakir Ullah",
//   age: 20,
//   university: "University of Agriculture Peshawar",
//   sayHello: function () {
//     console.log("Hello My Name is: " + this.name);
//     // this.name refers to the current object's name property.
//   },
// };
// console.log(student);
// student.sayHello();

//  Add or Change Properties
// student.department = "Computer Science"; // add
// student.age = 22; // update
// student.sayHello = function () {
//   console.log("Hi I am " + this.name, this.age + " Years Old");
// };
// console.log(student);
// student.sayHello();

// Delete a Property
// delete student.university;
// delete student.sayHello;
// console.log(student);
// console.log(student.sayHello); // undefined

// Nested Objects
// A nested object means an object inside another object.

// Example: Student with Address
// let student = {
//   name: "Shakir Ullah",
//   age: 21,
//   address: {
//     street: "Main Road",
//     city: "Peshawar",
//     zip: "25000",
//   },
// };
// console.log(student.address.city);

// Object with Arrays
// Objects can have arrays as properties.

//  Example:
// let student = {
//   name: "Shakir Ullah",
//   subjects: ["Math", "Computer", "English"]
// };
// console.log(student.subjects[1]);

// Array of Objects
// An array can also store multiple objects.

// Example:
// let students = [
//   { name: "Shakir", age: 21 },
//   { name: "Danish", age: 22 },
//   { name: "Ali", age: 20 },
// ];
// console.log(students[0].name);
