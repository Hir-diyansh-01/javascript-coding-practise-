/*
Question:
Find sum of all numbers in an array

Logic:
- Create a variable sum = 0
- Loop through array
- Add each element to sum
- Print sum
*/

let numbers = [1,2,3,4,5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}

console.log("Sum =", sum);