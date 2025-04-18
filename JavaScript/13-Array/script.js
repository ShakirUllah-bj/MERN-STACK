// 1. What is an Array?
// An array is a special variable that can hold multiple values in one place.
// It is like a box with sections, each section has a value and a position (called an index)

// Example:
// let fruits = ["apple", "banana", "mango"];

// "apple" is at index 0
// "banana" is at index 1
// "mango" is at index 2
// Arrays are zero-based, which means indexing starts from 0.

// 2. Two ways to declare an array
// Way 1: Using square brackets [] (most common)
// let colors = ["red", "green", "blue"];

// Way 2: Using new Array()
// let colors = new Array("red", "green", "blue");

// both ways are give the same result but the first one is easier and preffered

// 3. Accessing Array Element:
// We can access any value in the array using its index number.

// Example:
// let cities = ["Peshawar", "Lahore", "Karachi"];
// console.log(cities[0]);
// console.log(cities[2]);

// 4. Changing (Updating) an Array Value
// We can update a value in the array by referring to its index.

// Example:
// let numbers = [10, 20, 30];
// numbers[1] = 25;
// console.log(numbers);

// 5. Adding a New Value to the Array
// We can add a new value by assigning a value to the next index.

// Example:
// let names = ["Shakir", "Danish"];
// names[2] = "Anis";
// console.log(names);

// 6. Array Can Hold Different Type of Data
// We can store numbers, strings, booleans, or mixed types in the same array.

// Example:
// let mixedArray = ["Shakir", 304, true];
// console.log(mixedArray);

// 7. Array length: (property)
// the total number of elements in the array is called its length

// Example:
// let animals = ["cat", "dog", "cow"];
// console.log(animals.length);

// 8. Empty Array:
// We can also create an empty array and add values later.

// Example:
// let students = [];
// students[0] = "Shakir";
// students[1] = "Danish";
// console.log(students);

// 9. Deleting a Value From an Array (Using delete keyword):
// We can use the delete keyword to remove a value from an arrya.
// But there is something important to remember:
// -> It removes the value but does not change  the length of the array.
// -> The deleted place becomes empty/undefined

// Example:
// let fruits = ["apple", "banana", "mango"];
// delete fruits[1];
// console.log(fruits);
// console.log(fruits.length);

// Array Access & Updat
// let studentInfo = ["Shakir", 22, true, "Peshawar"];
// console.log(studentInfo[0]);
// console.log(studentInfo[3]);
// studentInfo[1] = 23;
// studentInfo[4] = "Computer Science";
// delete studentInfo[2];
// console.log(studentInfo);
