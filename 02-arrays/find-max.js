/*
Question:
Find the maximum number in an array

Logic:
- Assume first element is max
- Loop through array
- Compare each element with max
- Update max if bigger number found
*/

let numbers = [3, 7, 2, 9, 1];
let max = numbers[0]; // assume first number is max 

for (let i = 1; i < numbers.length; i++) {
    if(numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("Max = ", max);