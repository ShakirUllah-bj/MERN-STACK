// Number Methods

// 1. parseInt():
// Converts a string into integer number.It reads the number from the start
// of the string and ingores the rest (if any non-number characters).

// Syntax:
// parseInt(string, redix);
// string: The value you want to convert (usually a string).
// redix (optional): The base of the number system (e.g. 10 fo decimal).

// Example 1:
// let binary = "1101";
// console.log("Binary: ", binary);
// let decimal = parseInt(binary, 2);
// console.log("Decimal: ", decimal); // 13

// Example 2:
// let num1 = "2";
// let num2 = 3;
// let sum = num1 + num2;
// console.log("before parseInt(): ", sum);
// sum = parseInt(num1) + num2;
// console.log("after parseInt(): ", sum);

// Real-Life Example:
// Suppose you're making an input field for someone's age on a form. Users might type "25 years" — you want to extract just the number.

// let ageInput = prompt("Enter Your Age:");
// let age = parseInt(ageInput);
// console.log(age);

// 2. parseFloat():
// parseFloat() convets a string into a floating - point number(decimal number).It keeps the decimal
// part of the number and ignores any non - numeric characters after the number.

// difference from parseInt():
// Unlike parseInt() which only returns an integer(Whole Number) by removing the decimal, parseFloat()
// retains the decimal part.

// Syntax:
// parseFloat(string);

// Example:
// let num1 = "2.3",
//   num2 = "5.4 kg";
// let sum = num1 + num2;
// console.log("Before parseFlaot(): ", sum);
// sum = parseFloat(num1) + parseFloat(num2);
// console.log("After parseFlaot(): ", sum);

// 3. Number.isInteger():
// Number.isInteger() checks whether a given value is an integer(whole number) or not.
// It returns true if the value is an integer, Otherwise false.

// Syntax:
// Number.isInteger(value);
// value: The number or variable you want to check.

// Example 1:
// let num1 = 21;
// console.log("Checking for 21: ", Number.isInteger(num1)); // true
// let num2 = 25.5;
// console.log("Checking for 25.5: ", Number.isInteger(num2)); // false
