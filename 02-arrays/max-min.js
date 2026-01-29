/*
Question:
Find maximum and minimum number in an array

Logic:
- Assume first element as max and min
- Loop through all elements
- Update max if current element is bigger
- Update min if current element is smaller
- Print max and min
*/

let arr = [10 , 20, 56, 84];

let max = arr[0];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log("Maximum =", max);
console.log("Minimum =", min);