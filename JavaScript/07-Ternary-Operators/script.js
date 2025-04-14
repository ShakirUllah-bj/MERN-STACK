// Ternary Operators:
// The ternary Operators is the shortcut of if...else statement, it checks a condition
// and returns one of two values based on wether the condition is true or false

// Syntax:
// condition ? value_if_true : value_if_false;

// Example:
let age = 20;
let message = (age < 18) ? "Minor" : "Adult";
console.log(message)

let isEligibleForVote = (message === "Adult") ? "Eligible for vote" :
"Not eligible for vote";
console.log(isEligibleForVote)
