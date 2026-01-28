/*
Question:
Find sum of numbers from 1 to N

Example:
N = 5
Sum = 1 + 2 + 3 + 4 + 5 = 15

Logic:
- Create a variable sum and initialize with 0
- Run loop from 1 to N
- Add each number into sum
- Print final sum
*/

let n = 5;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum = sum + i;
}

console.log("Total Sum =", sum);
