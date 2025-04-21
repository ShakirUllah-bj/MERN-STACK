// What is a Loop?
// A loop is used to repeat a block of code multiple times until a certain condition is false.
// This helps reduce repetition and makes code efficient and clean.

// Types of JavaScript Loops:

// 1. for Loop
// Used when we know how many times we want to loop.

// Syntax:
// for (initialization; condition; increment / decrement) {
//   // code to run
// }

// Example:
// Print the names of 5 students
// let students = ["Shakir", "Danish", "Anis", "Iqbal", "Nihab"];
// for (let i = 0; i < students.length; i++) {
//   console.log("Student " + (i + 1) + ": " + students[i]);
// }

// Example 2:
// A system that simulates managing a list of students and their grades:

// let students = [
//   { name: "Ali", grade: 85 },
//   { name: "Sara", grade: 92 },
//   { name: "Ahmed", grade: 75 },
//   { name: "Hania", grade: 63 },
//   { name: "Usman", grade: 88 },
//   { name: "Farhan", grade: 55 },
// ];

// for (let i = 0; i < students.length; i++) {
//   let student = students[i];
//   console.log("Checking result for", student.name);
//   if (student.grade >= 90) {
//     console.log(student.name + " Is a top perfomer!");
//   } else if (student.grade >= 60) {
//     console.log(student.name + " Passed with grade: " + student.grade);
//   } else {
//     console.log(student.name + " Failed with grade: " + student.grade);
//   }
//   console.log("--------------------------");
// }

// 2. while Loop
// Used when we don’t know the number of times in advance.

// Syntax:
// while (condition) {
//   // code to run
// }

// Exampe 1:
// let count = 1;
// while (count <= 10) {
//   console.log("iteration:", count);
//   count++;
// }

// Example 2:
// Withdraw money from ATM until balance is less than 500
// let balance = 2000;
// let withdrawal = 600;

// while (balance >= 500) {
//   console.log("Withdrawn: " + withdrawal);
//   balance -= withdrawal;
//   console.log("Remaining Balance: " + balance);
// }

// while Loop Example 3:
// Simulating a countdown timer:

// let countDounTime = 10;
// while (countDounTime > 0) {
//   console.log(`Time left: ${countDounTime} Seconds`);
//   countDounTime--;
// }
// console.log("Time's Up");

// 3. do...while Loop
// Runs at least once even if the condition is false.

// Syntax:
// do {
//   // code to run
// } while (condition);

// let number = 0;
// do {
//   console.log("The number is :", number);
// } while (number > 0);

// Example 2:
// Ask user for password until correct one is entered
// let correctPassword = "12345";
// let enteredPassword;
// do {
//   enteredPassword = prompt("Enter Your Password");
//   if (enteredPassword !== correctPassword) {
//     alert("Wrong Password! Try again.");
//   }
// } while (enteredPassword !== correctPassword);
// console.log("Access Granted!");

// Example 3:
// A game where a player is repeatedly asked to guess a number until they get it right:

// let correctNumber = Math.ceil(Math.random() * 10);
// let playerGuess;
// let attempts = 0;

// do {
//   playerGuess = parseInt(prompt("Enter The Secret Number Between (1 and 10):"));
//   attempts++;
//   if (playerGuess === correctNumber) {
//     console.log(
//       "Congratulations! you guessed the number: ",
//       correctNumber,
//       "in",
//       attempts
//     );
//   } else if (playerGuess < correctNumber) {
//     console.log("Too low! Try again.");
//   } else if (playerGuess > correctNumber) {
//     console.log("Too high! Try again.");
//   }
// } while (playerGuess !== correctNumber);

//4. for...in Loop (Objects)
// Used to loop through properties of an object.

// Syntax:
// for (let key in object) {
//   // access object[key]
// }

// Example 1:
// Display product details

// let product = {
//   name: "leptop",
//   brand: "HP",
//   price: 8000,
// };

// console.log("Product Detail.");
// for (let key in product) {
//   console.log(key + ": " + product[key]);
// }

// Example 2:
// Iterating over an object to display user profile information:
// let userProfile = {
//   name: "Shakir",
//   age: 22,
//   city: "Peshawar",
//   email: "shakir@example.com",
// };

// console.log("User Profile Information:");
// for (let key in userProfile) {
//   console.log(`${key}: ${userProfile[key]}`);
// }

// 5. for...of Loop (Arrays, Strings)
// Used to loop through values of arrays, strings, etc.

// Syntax:
// for (let value of iterable) {
//   // use value
// }

// Example 1:
// let students = ["Shakir", "Anis", "Danish"];
// for (let value of students) {
//   console.log("Hello", value + "!");
// }

// Example 2:
// Looping through a string to count the occurrence of each character:
// let sentence = "Hello World!";
// let characterCount = {};

// for (char of sentence) {
//   if (char !== " ") {
//     if (characterCount[char]) {
//       characterCount[char]++;
//     } else {
//       characterCount[char] = 1;
//     }
//   }
// }

// for (let key in characterCount) {
//   console.log(`${key}: ${characterCount[key]}`);
// }

// break Statement:
// Used to stop the loop immediately.

// Example:
// Stop on finding the first failed student

// let marks = [90, 76, 32, 88, 95];
// for (let i = 0; i < marks.length; i++) {
//   if (marks[i] < 40) {
//     console.log("Student faild with: " + marks[i] + " Marks.");
//     console.log("Loop breaked.");
//     break;
//   } else {
//     console.log("Student passed with: " + marks[i] + " Marks.");
//   }
// }

// continue Statement:
// Used to skip the current iteration and move to the next one.

// Example:
// print all even numbers from 1 to 10

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }
