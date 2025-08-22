// // // JavaScript Fundamentals - Part 1
// // // We'll write our code here!

// // let js = "amazing";
// // console.log(40 + 8 + 23 - 10);
// // console.log("GUMANA KA");

// // console.log("=== VARIABLES ===");

// // let firstName= "Jonas";
// // console.log(firstName);

// // let age = 30;
// // console.log(age);
// // age = 50;
// // console.log(age);

// // const birthYear = 1991;
// // console.log(birthYear);

// // const PI = 3.1415;
// // console.log(PI);

// // var job = "programmer";
// // job = "teacher";
// // console.log(job);

// // age = 51;

// // let lastName = "Doe";

// // //Do not do this
// // // let 3years = 3;
// // //let jonas&mathilda = "JM";
// // // let new

// // console.log("=== DATA TYPES ===");

// // age = 24;
// // console.log(age);
// // console.log(typeof age);

// // let userName = "mark";
// // console.log(userName);
// // console.log(typeof userName);

// // //Boolean
// // let javaScriptIsFun = true;
// // console.log(javaScriptIsFun);
// // console.log(typeof javaScriptIsFun);

// // let year;
// // console.log(year);
// // console.log(typeof year);

// // //dynamic variable
// // let dynamicVariable = 23;
// // console.log(dynamicVariable, typeof dynamicVariable);

// // //change into a String
// // dynamicVariable = "Now I am a String";
// // console.log(dynamicVariable, typeof dynamicVariable);

// // // change into a Boolean
// // dynamicVariable = true;
// // console.log(dynamicVariable, typeof dynamicVariable);

// ////////////////////////////

// //Basic Operators - Math Operators

// console.log("=== MATH OPERATORS ===");

// const now  = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math Operations");
// console.log("Ã„ddition: ", 10 + 5);
// console.log("Subtraction: ", 20 - 8);
// console.log("Multiplication: ", 4 * 7);
// console.log("Division: ", 15 / 3);
// console.log("Exponentiation: ", 2 ** 3);

// //Math with Strings
// const firstName = "Jonas";
// const lastName = "Doe";
// console.log(firstName + " " + lastName);
// console.log("Hello " + "World" + "!");
// console.log("I am " + 25 + " years old");

// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 15;
// console.log("x starts as:", x);

// x += 10; // Same as: x = x + 10 = 25
// console.log("After x += 10:", x);

// x *= 4; // Same as: x = x * 4 = 100
// console.log("After x *= 4:", x);

// x /= 2; // Same as: x = x / 2 = 50
// console.log("After x /= 2:", x);

// x++; // Same as: x = x + 1
// console.log("After x++:", x);

// ////////
// console.log("=== Comparison Operators ===");

// console.log("Age comparison:");
// console.log(ageJonas > ageSarah); 
// console.log(ageSarah >= 18); 
// console.log(ageJonas < 30);

// console.log("Number comparisons:");
// console.log(25 > 20); 
// console.log(15 < 10); 
// console.log(18 >= 18); 
// console.log(16 <= 15); 

// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge);

// console.log("Complex comparison:");
// console.log(now - 1991 > now - 2018);


// let z, y ; 'Doe';
// z = y = 25 - 10 -5;
// console.log(z, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// // Test Data 1
// const massMark1 = 78;
// const heightMark1 = 1.69;
// const massJohn1 = 92;
// const heightJohn1 = 1.95;
 
// //calculate BMI
// const BMIMark1 = massMark1 / (heightMark1 * heightMark1);
// const BMIJohn1 = massJohn1 / (heightJohn1 ** 2);
 
// //markHigherBMI1
// const markHigherBMI1 = BMIMark1 > BMIJohn1;
 
// //Results
// console.log("Test Data 1:");
// console.log("Mark's BMI:", BMIMark1.toFixed(2));
// console.log("John's BMI:", BMIJohn1.toFixed(2));
// console.log("Does Mark have a higher BMI?", markHigherBMI1);
 
// // Test Data 2
// const massMark2 = 95;
// const heightMark2 = 1.88;
// const massJohn2 = 85;
// const heightJohn2 = 1.76;
 
// //calculate BMI
// const BMIMark2 = massMark2 / (heightMark2 ** 2);
// const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
 
// //markHigherBMI2
// const markHigherBMI2 = BMIMark2 > BMIJohn2;
 
// //Results
// console.log("Test Data 2:");
// console.log("Mark's BMI:", BMIMark2.toFixed(2));
// console.log("John's BMI:", BMIJohn2.toFixed(2));
// console.log("Does Mark have a higher BMI?", markHigherBMI2);

////////////////////////////////////
// Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works: ${2 + 3} equals five`);
console.log(`Comparisons too: ${5 > 3}`);

console.log(`Just a regular string...`);

const myName = "Mark";
const myAge = 20;
const myJob = "Student";
const currentYear = 2025;

console.log(`Hi, I'm ${myName}, a ${myAge} year old ${myJob}!`);

console.log(`Born in ${currentYear - myAge}, 10*5 = ${10 * 5}, Adult: ${myAge >= 18}`);