// Math Methods

// 1. Math.abs():
// Math.abs(): method is a built -in JavaScript function that returns the absolute value of a number.
// The absolute value of a number is its difference from zero on the number line,
// and it is always a positive number.if the number is negative, it converts it to positve,
// and if it's already positive, it remains unchanged.

// Non-number values:
// If you pass a non-number value (like NaN or undefined), it returns NaN. However, if the argument can be converted into a  number, it will return the absolute value of the converted number.

// Syntax:
// Math.abs(x);
// x: is the number whose absolute value you want to find.

// Example 1:
// let positiveNum = 12;
// let negativeNum = -12;
// console.log(Math.abs(positiveNum)); // 12
// console.log(Math.abs(negativeNum)); // 12

// Real-life Example:
// Scenario:
// Imagine you're walking either forward or backward, and you want to know how far you’ve walked, regardless of direction.
// If you walk 5 meters forward, the distance is 5 meters.
// If you walk 5 meters backward, the distance is still 5 meters.
// In both cases, you care about the magnitude of the distance, not whether it's forward or backward.

// let distances = [-5, 5];
// let totalDistance = 0;
// for (let i = 0; i < distances.length; i++) {
//   totalDistance += Math.abs(distances[i]);
// }
// console.log("Total distance traveled: " + totalDistance + " meters");

// 2. Math.ceil():
// Math.ceil() ia a JavaScript function that rounds a number up to the next largest integer.
// This means it always rounds a number up, regardless of its decimal part.

// Syntax:
// Math.ceil(x);
// x: is the number you want to round up.

// Example:
// let num1 = 4.2;
// let num2 = 4.9;
// console.log(Math.ceil(num1));
// console.log(Math.ceil(num2));

// Exmaple 2:
// let price = 9.2;
// let finalPrice = Math.ceil(price);
// console.log("You Need to Pay: $" + finalPrice);

// 3. Math.floor():
// Math.floor() is a JavaScript function that rounds a number down to the largest integer
// that is less than or equal to the number.

// Syntax:
// Math.floor(x);
// x: is the number you want to round down.

// Example:
// let number1 = 10.99;
// let number2 = 10.4;
// console.log(Math.floor(number1));
// console.log(Math.floor(number2));

// Example:
// Scenario:
// You’re making a game where players earn points, and for every 100 points, they earn 1 badge.
// If a player has 389 points, you want to calculate how many full badges they’ve earned.
// You don’t count partial badges, so you round down the result.

// let totalPoints = 389;
// let pointsPerBadge = 100;
// let badgesEarned = Math.floor(totalPoints / pointsPerBadge);
// console.log("Badges Earned: " + badgesEarned);

// 4. Math.round();
// Math.round() is a JavaScript function that rounds a number to the nearest integer.
// If the decimal part is 0.5 or higher, it rounds up.
// If the decimal part is less than 0.5, it rounds down.

// Syntax: Math.round(x);
// x: is the number you want to round.

// Example :
// console.log(Math.round(7.2));
// console.log(Math.round(7.5));
// console.log(Math.round(4.3)); // Output: 4
// console.log(Math.round(-4.3)); // Output: -4
// console.log(Math.round(4.5)); // Output: 5
// console.log(Math.round(-4.5)); // Output: -4
// console.log(Math.round(4.6)); // Output: 5
// console.log(Math.round(-4.6)); // Output: -5

// 5. Math.random():
// Math.random() returns a random decimal number between 0(inclusive) and 1(exclusive) — meaning
// it can be 0, but never exactly 1.

// Syntax:
// Math.random();

// Exmaple:
// let randomNumber = Math.random();
// console.log(randomNumber);

// Exmaple 2:
// Dice Simulation:
// let diceRoll = Math.ceil(Math.random() * 6);
// console.log("You Rolled: " + diceRoll);

// real - life example:
// Scenario:
// You’re creating a login system that sends a user a 4-digit OTP (One-Time Password) every time they log in.
// Write a program to generate a random number between 1000 and 9999

// let OTP = Math.floor(Math.random() * 9000 + 1000);
// console.log("Your OTP is: " + OTP);

// 6. Math.max():
// Math.max() returns the largest number from a list of numbers you give it.
// You can pass two or more numbers, and it gives you the maximum (biggest) one.

// Syntax:
// Math.max(x1, x2, x3, ...);

// Example:
// let biggest = Math.max(5, 3, 1, 4, 7, 9, 6, 8, 0);
// console.log(biggest);

//  Real-Life Scenario:
// Scenario:
// You’re building a student grading system, and you want to show the highest score among all students in a quiz.

// let scores = [87, 79, 69, 88, 91, 75];
// let heighestScore = Math.max(...scores); // Using spread operator
// console.log(heighestScore);

// Math.max() doesn't work directly on arrays without using the spread operator ...

// 7. Math.min():
// Math.min() returns the smallest (lowest) number from a list of numbers.
// You can pass multiple values, and it gives the minimum one.

// Syntax:
// Math.min(x1, x2, x3, x4, ...);

// Example:
// let lowest = Math.min(4, 2, 9, 1, 3, 5, 6);
// console.log(lowest);

// Real-Life Scenario:
// Scenario:
// You are creating a shopping app where users enter prices from different stores,
// and you want to show them the lowest price available.

// let prices = [499, 519, 470, 489];
// let lowestPrice = Math.min(...prices); // Using spread operator

// console.log("Lowest available price: Rs." + lowestPrice);

// Why we use ...prices?
// Because Math.min() does not accept arrays directly, so we spread the array into individual values.

// 8. Math.sqrt():
// Math.sqrt() returns the square root of a number.
// The square root of a number is the value that, when multiplied by itself, gives the original number.
// Example:
// √9 = 3, because 3 × 3 = 9

// Syntax:
// Math.sqrt(x);
// x: is the number you want the square root of.

// Exmaple:
// console.log(Math.sqrt(16)); // 4
// console.log(Math.sqrt(25)); // 5

// 9. Math.pow():
// Math.pow() is used to raise a number to the power of another number.

// Syntax:
// Math.pow(base, exponent);
// base = the number you want to raise
// exponent = the power you raise it to

// Example:
// console.log(Math.pow(2, 3)); // Output: 8 (because 2×2×2)
// console.log(Math.pow(5, 2)); // Output: 25

// 10. Math.trunc():
// Math.trunc() removes the decimal part of a number and returns only the integer part — without rounding.

// Syntax:
// Math.trunc(x);
// x = any number (positive or negative, with decimals)

// Example: console.log(Math.trunc(7.9)); // Output: 7
// console.log(Math.trunc(3.2)); // Output: 3
// console.log(Math.trunc(-4.8)); // Output: -4
