/*
Question:
Reverse an array

Logic:
- Start loop from last index
- Move backward
- Print each element
*/

let numbers = [ 1, 2, 3, 4 ];
let reversed = [];

for (let i = numbers.length - 1; i >= 0; i--) {
    reversed.push(numbers[i]);
}

console.log("Reversed", reversed);