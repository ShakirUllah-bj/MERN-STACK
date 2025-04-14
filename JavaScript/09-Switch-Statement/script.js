// Switch Statement:
// A switch Statement is used to perform actions based on different
// conditions. it compares the value of an expression with multiple
// case values and runs the matching case 's code. if no match is found,
// it can run the default code

// Syntax:
// switch (value) {
//     case 1:
//       // code
//       break;
//     case 2:
//       // code
//       break;
//     default:
//       // code
//   }

// Example 1:
let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day")
}
  

// Example 2:
let drink = "tea";

switch (drink) {
  case "water":
    console.log("You selected Water.");
    break;
  case "tea":
    console.log("You selected Tea.");
    break;
  case "coffee":
    console.log("You selected Coffee.");
    break;
  default:
    console.log("Drink not available.");
}


// Limitions of Switch Statement:

// 1. Strict Comparison (===):
let num = "5";

switch (num) {
  case 5:
    console.log("Matched");
    break;
  default:
    console.log("Not matched"); // runs
}

// 2. No Rang Support:
let score = 90;
switch (score) {
    case score > 80:
        console.log("A Grade");
        break;
    default:
        console.log("No Match"); // runs
}

// 3. Fall-Through if break is Missing:
let color = "red";
switch (color) {
  case color = "red":
    console.log("Red");
  case color = "yellow":
    console.log("Yellow"); // also runs
  case color = "green":
    console.log("Green"); // also runs
}

// 4. Cannot Use Logical Operators:
let age = 23;
switch (age) {
  case age >= 18 && age <= 30:
    console.log("Young");
  default:
    console.log("No Match") // runs
}