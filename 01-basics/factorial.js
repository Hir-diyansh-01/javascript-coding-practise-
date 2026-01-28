/*
Question:
Find factorial of a number

Logic:
- Start with result = 1
- Loop from 1 to number
- Multiply result by each number
- Print result
*/

let number = 5;
let result = 1;

for ( let i = 1; i <= number; i++) {
    result = result * i;
}

console.log("Factorial =", result);
