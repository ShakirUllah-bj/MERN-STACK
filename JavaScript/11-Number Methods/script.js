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

// 4. toFixed():
// toFixed is a method used with numbers to format them as strings, showing a
// Fixed number of digits after the decimal point.It is usefull when we want
// consistant formating, like price, score, percentage etc.

// Syntax:
// number.toFixed(digits);
// digits(required): Number of digits to keep after the decimal point.
// Returns: A string, not a number.

// Example:
// let price = 15.536845;
// let roundedPrice = price.toFixed(2);
// console.log("Price: ", roundedPrice);
// console.log(typeof roundedPrice);

// What is NaN in JavaScript ?
// NaN: Stand for "Not a Number".
// It is a special value in JavaScript that represents something that is not a valid Number.
// Even though it might look like a Number.

// Note: NaN is not equal to anything, even not equal to itself.
// console.log(NaN === NaN); // false

// Example of NaN:
// let myName = "Shakir";
// let divide = myName / 5;
// console.log(divide);

//5. isNan():
// isNaN() stands for "is Not a Number". It checks whether a value is not a number, and returns:
// true → if the value is not a valid number
// false → if the value is a number

// Syntax:
// isNaN(value);
// value: any value (String, Number, Expression, etc).

// Example 1:
// let age = "hello";
// console.log(isNaN(age)); // true

// Example 2:
// let marks = "98";
// console.log(isNaN(marks)) // false

// Example 3:
// let result = 0 / 0;
// console.log(isNaN(result)); // true


// 6. isFinite():
// isFinite() checks whether a value is a finite  number-- not NaN or infinity, -infinity. it returns:
// true: if the value is a real finite number.
// false: if the value is NaN, infinity, or -infinity

// Syntax:
// isFinite(value);
// value: any number, string, or expression.

// Examples:
// console.log(isFinite(100)); // true
// console.log(isFinite("50")); // true (string is converted to number)
// console.log(isFinite(1 / 0)); // false (Infinity)
// console.log(isFinite("hello")); // false (Not a number)
// console.log(isFinite(NaN)); // false

// let x = 1 / 0;
// if (x === Infinity) {
//     console.log("Value is too big");
// }


// 7. Number():
// Number() is a function that converts a value into a number.
// If the value can be converted, it returns a number.
// If not is returns NaN.

// Syntax:
// Number(value);
// value: A String, Boolean, or any data you want to convert into a number.

// Exmaples:
// console.log(Number("123")); // Output: 123 (string to number)
// console.log(Number("12.5")); // Output: 12.5
// console.log(Number(true)); // Output: 1
// console.log(Number(false)); // Output: 0
// console.log(Number("hello")); // Output: NaN (can't convert)

// Real-life Example:
// You're making a form where the user enters age as text ("22"). You can use Number() to convert it into a number for calculations.

// let userInput = "45";      // User entered this as a string
// let age = Number(userInput);
// console.log(age + 5);      // Output: 50

// 8. toString():
// toString() is a method that converts a number into a string.
// We can also use it to convert a number into other number systems like:
// -> binary(base 2)
// -> octal (base 8)
// -> hexadecimal (base 16)

// Syntax:
// number.toString(base);
// base (optional): The number system to converts to (2, 8, 10, 16).

//  Examples:
// Convert number to string (normal use)
// let num = 123;
// console.log(typeof num, num);
// let str = num.toString();
// console.log(typeof str, str);

// // Convert number to binary
// let num1 = 10;
// let binary = num1.toString(2);
// console.log(binary) // 1010

// // Convert number to octal
// let num2 = 10;
// let octal = num2.toString(8);
// console.log(octal); // 12

// // Convert number to hexadecimal
// let num3 = 255;
// let hex = num3.toString(16);
// console.log(hex); // ff