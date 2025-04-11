// String Methods:

// 1. length:  -> property
// Tells how many caracters in a string.
// Example:
// let userName = "Shakir Ullah";
// console.log(userName.length);

// 2. toUpperCase():
// Converts the whole string to UPPERCASE:
// Example:
// let name = "shakir ullah";
// console.log(name.toUpperCase());

// 3. toLowerCase():
// Example:
// let email = "ShaKir@GMAIL.com";
// let validEmail = email.toLowerCase();
// console.log(validEmail);

// 4. trim():
// Removes Extra spaces from both sides
// Example:
// let myName = "    Shakir Ullah       ";
// console.log(myName);
// console.log(myName.trim());

// 5. includes():
// Checks if a string contains a word or part of a word
// Example:
// let errorMessage = "Error: Something went wrong";
// if (errorMessage.includes("Error")) {
//   console.error("Something went wrong"); // shows error messages in red color in the console.
// }

// 6. startsWith():
// Checks if a string starts with a specific text.
// Example:
// let fileName = "resume.pdf";
// if (fileName.startsWith("resume")) {
//   console.log("This is a resume");
// } else {
//   console.log("This is not a resume");
//

// 7. endsWith():
// Checks if a string ends with a specific text.
// Example:
// let file = "image.png";
// if (file.endsWith("png")) {
//   console.log("It is an image.");
// } else {
//   console.log("It's not an image.");
// }

// 8. slice():
// The slice method is used to extract a part of a string and return it as a nuw string,
// Without changing the original string.
// Syntax:
// string.slice(startIndex, endIndex);
// startIndex: The position to start extracting(included).
// endIndex (optional): The position to end extracting if skipped, it slices tell end of the string.

// Example:
// let text = "JavaScript Developer";
// let word1 = text.slice(0, 10);
// let word2 = text.slice(11);
// console.log(word1);
// console.log(word2);

// 9. replace():
// The replace method is used to find and replace the first match of a specific value
// in a string with another value, it returns a new string with the change, and the original string stay the same.

// Syntax:
// string.replace(searchValue, newValue);
// searchValue: The part of the string you want to replace.
// newValue: The value to replace it with.

// Example:
// let message = "I love JavaScript. JavaScript is cool";
// let updatedMessage = message.replace("JavaScript", "react");
// console.log(message);
// console.log(updatedMessage);

// 10. replaceAll():
// The replaceAll() method replace all accurances of a specific value in a string with a new value,
// It returns a new string, without changing the original.

// Syntax:
// string.replaceAll("oldValue", newValue);
// oldValue: The word or text you want to change.
// newValue: The new word or text you want to use intead.

// Example:
// let msg = "I love JavaScript. JavaScript is cool";
// let newMsg = msg.replaceAll("JavaScript", "react");
// console.log(msg);
// console.log(newMsg);

// 11. split(separator):
// The split method is uset to break a sting into parts and put those parts into an array.
// It splits the string whenever it's finds the character or symbol you give it (called the separator.)

// Syntax:
// stirng.split(separator, limit);
// separator: The character where the string should be split (like "", " ", ",", or "-")
// limit (optional): The number of pieces you want (stops spliting after this number).

// Example 1:
// let sentance = "HTML,CSS,JavaScript";
// let words = sentance.split(",");
// console.log(words); // ['HTML', 'CSS', 'JavaScript']

// Example 2:
// let fruits = "orange,banana,apple,mango";
// let someFruits = fruits.split(",", 2);
// console.log(fruits);
// console.log(someFruits);

// 12. cancat():
// The concat() method is used to join two or more strings togather and return a new combined string.
// It does not changes the original strings.

// Syntax:
// string1.concat(string2, string3, ...);

// Exmaple:
// let firstName = "Shakir";
// let lastName = "Ullah";
// let fullName = firstName.concat(" ", lastName);
// console.log(fullName);

// 13. charAt():
// The charAt method is used to get a specific character at a given position(index) in a string.
// It returns the character at the specified index as a new string.

// Syntax:
// string.charAt(index);

// Example:
// let message = "Hello world!";
// let char = message.charAt(6);
// console.log(char);

// 14. indexOf():
// The indexOf method is used to find the position(index) of the first accurance of the character
// or word in the string.
// If it does not find it, It returns -1.

// Syntax:
// string.indexOf(searchValue, startPosition);
// searchValue: The text you want to find.
// startPosition (optional): Where to start searching in the string (default 0).

// Example:
// let text = "I love JavaScript.";
// let position = text.indexOf("JavaScript");
// console.log(text);
// console.log("Position of JavaScript is: ", position);

// 15. lastIndexOf():
// The lastIndexOf() method is uset to find the position(index) of the last accurance of
// a character or word in a string.
// If it does not find the value it returns -1.

// Syntax:
// string.lastIndexOf(searchValue, startPosition);
// searchValue: The text you want to search for.
// startPosition (optional): Starts seaching backword from this index.

// Example:
// let fruit = "banana";
// let lastA = fruit.lastIndexOf("a");
// console.log(lastA); // 5

// Example:
let str = "I love JavaScript and JavaScript loves me";
let lastJs = str.lastIndexOf("JavaScript");
console.log(lastJs); // Output: 22
