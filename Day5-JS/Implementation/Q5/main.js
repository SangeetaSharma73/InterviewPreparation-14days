// main.js

// Importing specific functions from utils.js
import { add, subtract, multiply } from "./utils.js";

// Importing the default exported function (divide)
import divide from "./utils.js";

const num1 = 10;
const num2 = 5;

// Using the imported functions
console.log(`Add: ${add(num1, num2)}`); // 10 + 5 = 15
console.log(`Subtract: ${subtract(num1, num2)}`); // 10 - 5 = 5
console.log(`Multiply: ${multiply(num1, num2)}`); // 10 * 5 = 50
console.log(`Divide: ${divide(num1, num2)}`); // 10 / 5 = 2
