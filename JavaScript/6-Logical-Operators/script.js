// Logical Operators in JavaScript:
// Logical Operators are used to combine two are more conditions.
// return true or false.

// 1. LOGICAL AND(&&):
//  returns true only if both conditions are true.

//  Example:
 let age = 20;
 let hasID = true;
 console.log("Result of The AND Operator: " + (age > 18 && hasID)); // true
 console.log("Result of The AND Operator: " + (age < 18 && hasID)); // false


// 2. LOGIL OR(||):
//   returns true if atleast one condition is true.

// Example:
let isWeekend = false;
let isHoliday = true;
console.log("Result of The OR Operator: " + (isWeekend || isHoliday)); // true

// 3. LOGICAL NOT(!):
// The NOT operator reverse the result of a condition.
// if the condition is true, it becomes false.
// if the condition is false, it becomes true.

// Example:
let isOnline = false;
console.log("Result of Of The NOT Operator: " + !isOnline); // true
isOnline = true;
console.log("Result of Of The NOT Operator: " + !isOnline); // false