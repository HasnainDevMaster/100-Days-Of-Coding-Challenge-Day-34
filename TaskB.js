"use strict";
// 100 Days Of Coding Challenge!
/** Question 101:
Generate a random integer between 1 and 10.*/
//-------------------------------------------
// Function "getRandomInt" to generate a random integer between 1 and 10
function getRandomInt(min, max) {
    // Math.random() generates a random number between 0 (inclusive) and 1 (exclusive)
    // Multiplying by (max - min + 1) and adding min ensures the range is [min, max]
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Calling the function to generate a random integer between 1 and 10
const randomInt = getRandomInt(1, 10);
console.log(`Random integer between 1 and 10: ${randomInt}`);
