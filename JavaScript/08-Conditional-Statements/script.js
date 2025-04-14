// Conditional Statements:
// Conditional statements are used to make decisions in a program.
// They allow the program to execute different blocks of code based on certain conditions.

// 1.if Statement
// runs a block of code only if a condition is true.

// Example:
// let isRaining = true;
// if (isRaining) {
//     console.log("Take an umbrella");
// }

// 2. if...else Statement:
// Runs one block of code if the condition is true, and another if it's false.

// Example:
// let isHungry = false;
// if (isHungry) {
//     console.log("Eat food");
// } else {
//     console.log("Drink Water");
// }

// 3. if...else if...else Statement:
// Checks multiple conditions one by one.

// Example:

// let time = "afternoon";
// if (time === "morning") {
//     console.log("Good Morning");
// } else if (time === "afternoon") {
//     console.log("Good Afternoon");
// } else {
//     console.log("Good Night")
// }

// 4. Nested if Statements:
// An if statement inside another if or else.

// Example:
// let isWeekend = true;
// let isSunny = true;
// if (isWeekend) {
//     if (isSunny) {
//         console.log("Go for a picnic.");
//     } else {
//         console.log("Stay it home and rest.")
//     }
// }



// Real life Example of Conditional Statements:
// student grading system. Based on the student’s marks and attendance
const obtainedMarks = +prompt("Enter Obtain Marks: ");
const totalMarks = +prompt("Enter Total Marks: ");

// calculate percentage
let percentage = (obtainedMarks / totalMarks) * 100;
percentage = percentage.toFixed(2)
console.log("Your Percentage is: ", percentage);

const attendance = +prompt("Enter Your Attendance Percentage:");

// calculate grade based on percentage and attendance
if (percentage >= 90 && percentage <= 100) {
    if (attendance > 75) {
        console.log("Grade 'A+'")
    } else {
        console.log("Grade 'A'")
    }
} else if (percentage >= 80 && percentage < 90) {
    if (attendance >= 75) {
        console.log("Grade 'B+'");
    } else {
        console.log("Grade 'B'");
    }
} else if (percentage >= 70 && percentage < 80) {
    console.log("Grade 'C'");
} else if (percentage >= 60 && percentage < 70) {
    console.log("Grade 'D'");
} else {
    console.log("Failed");
}




