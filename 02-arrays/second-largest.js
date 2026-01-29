/*
Question:
Find the second largest number in an array

Logic:
- Initialize max and secondMax
- Loop through array
- Update max and secondMax accordingly
- Print secondMax at the end
*/

let arr = [10, 5, 20, 8]

let max = arr[0];
let secondMax = arr[0];

for(let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
    } else if (arr[i] > secondMax){
        secondMax = arr[i];
    }
}

console.log("Second Largest =", secondMax);