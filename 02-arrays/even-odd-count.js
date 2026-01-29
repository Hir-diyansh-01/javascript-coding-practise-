/*
Question:
Count even and odd numbers in an array

Logic:
- Initialize evenCount and oddCount to 0
- Loop through array
- If number divisible by 2 → even
- Else → odd
- Print counts
*/

let arr = [1, 2, 3, 4, 5, 6];

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Even Count =", evenCount);
console.log("Odd Count =", oddCount);