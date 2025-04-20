// Array Basic Methods:

// 1. push():
// Adds one or more elements at the end of an array.

// Syntax:
// array.push(element1, element2, ...);

// Example:
// let fruits = ["apple", "banana", "mango"];
// console.log(fruits);
// fruits.push("orange");
// console.log(fruits);

// 2. pop():
// removes the last element of an array.

// Syntax:
// array.pop();

// Example:
// let animals = ["dog", "cat", "cow", "camel"];
// console.log(animals);
// let popped = animals.pop();
// console.log(animals);
// console.log("Popped Element:", popped);

// 3. shift():
// Removes the first element of an array.

// Syntax:
// array.shift();

// Example:
// let numbers = [5, 10, 15, 20, 25, 30];
// console.log(numbers);
// numbers.shift();
// console.log(numbers);
// // to store shifted elemenet
// let shifted = numbers.shift();
// console.log(numbers);
// console.log("Shifted:", shifted);

// 4. unshift():
// Add elements at the begining of an array.

// Syntax:
// array.unshift(element1, element2, ...);

// Example:
// let mixedArray = ["cat", 5, true, "dog"];
// console.log(mixedArray);
// mixedArray.unshift("camel", false, 10);
// console.log(mixedArray);

// 5. concat():
// Merges two or more arrays.

// Syntax:
// array1.concat(array2, array3, ...);

// Example:
// let fruits = ["apple", "orange", "banana"];
// let numbers = [10, 20, 30, 40];
// let mergedArrays = fruits.concat(numbers);
// console.log(mergedArrays);
// console.log(mergedArrays.concat("50", 60, "mango"));

// 6. join():
// Join array elements into a string.

// Syntax:
// array.join(separator);
// separator: The separator is a string that’s placed between each array element
// when converting the array into a single string.

// Example:
// let fruits = ["mango", "orange", "apple"];
// let joined = fruits.join("-");
// console.log(fruits);
// console.log(joined);

//  Note: If you don’t write a separator, it uses comma (,) by default
// let fruits1 = ["mango", "orange", "apple"];
// let joinedFruits = fruits1.join();
// console.log(joinedFruits);

// 7. slice():
// The slice() method returns a shallow copy of a part of an array into a new array,
// Without changing the original array.

// Syntax:
// array.slice(start, end);
// start: (Optional) index where the slice starts (inclusive).
// end: (Optional) Index where the slice ends (exlusive).
// if end is not given, it slices till the end of the array.

// Example:
// let colors = ["red", "green", "blue", "yellow", "black", "white"];
// // Slice from index 1 to 3 (3 is not included)
// let sliced1 = colors.slice(1, 3);
// console.log(sliced1);
// // Slice from index 2 to the end
// let sliced2 = colors.slice(2);
// console.log(sliced2);
// // Slice the full array
// let sliced3 = colors.slice();
// console.log(sliced3);

// 8. splice():
// The splice method is used to add, remove, or replace elements in an array.
// It modefies the original array.

// Syntax:
// array.splice(start, deleteCount, item1, item2, ...);
// start: The index where changes begin.
// deleteCount: Number of elements to remove.
// item1, item2, ...: Elements to add (Optional).

// Example 1
// Remove elements
// let fruits = ["apple", "banana", "orange", "grape"];
// fruits.splice(1, 2);
// console.log(fruits);

// Example 2:
// Add elements
// let colors = ["red", "blue"];
// colors.splice(1, 0, "green");
// console.log(colors);

// Example 3:
// Replace elements
// let names = ["Shakir", "Iqbal", "Anis"];
// names.splice(1, 1, "Danish");
// console.log(names);

// 9. includes():
// The includes() method checks if a certain value exists in an array.
// It returns true if found, otherwise false.

// Syntax:
// array.includes(value);

// Example 1:
// let fruits = ["apple", "banana", "orange"];
// console.log(fruits.includes("banana")); // true
// console.log(fruits.includes("grape")); // false

// Remember:
// It's case-sensitive ('Apple' ≠ 'apple').
// Doesn’t change the original array.

// Example 2:
// Check If Name Exists in List
// let names = ["shakir", "danish", "anis", "iqbal", "nihab", "aftab"];
// let userName = prompt("Enter your name");
// if (names.includes(userName.toLowerCase())) {
//   console.log("Your name exist");
// } else {
//   console.log("Your name does not exist");
// }

// 10. reverse():
// The reverse method reverses the order of elements in an array.
// It modifies the original array.

// Syntax:
// array.reverse();

// Example:
// let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers);

// let names = ["Shakir", "Iqbal", "Anis", "Danish", "Nihab"];
// console.log(names);
// names.reverse();
// console.log(names);

// 11. sort():
// The sort() method sorts the elements of an array.
// By default, it sorts elements as strings in ascending (A–Z) order.

// Syntax:
// array.sort();

// Example:
// let names = ["Shakir", "Anis", "Danish"];
// names.sort();
// console.log(names);

// Problem with Numbers
// let numbers = [100, 20, 5, 1];
// numbers.sort();
// console.log(numbers); // [1, 100, 20, 5] (wrong for numbers)

// Correct Way to Sort Numbers (Ascending):
// let numbers = [100, 20, 5, 1];
// numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbers);

// Sort Numbers in Descending Order:
// let numbers = [100, 20, 5, 1];
// numbers.sort(function (a, b) {
//   return b - a;
// });
// console.log(numbers);

// Logic Behind It:
// This is a compare function used by the sort() method to decide how to order the elements.
// The sort() method compares two elements at a time, let's say a and b.
// It uses the return value of b - a to decide their order

// How the return value affects sorting:

// b - a    Result	            Meaning
//           > 0	            Put b before a →  descending order
//           < 0	            Put a before b →  ascending order
//           = 0	            Keep the same order
