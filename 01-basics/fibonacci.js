/*
Question:
Print first N Fibonacci numbers

Logic:
- Start with first two numbers: 0, 1
- Loop to calculate next numbers
- Next number = sum of previous two
- Print all numbers
*/

let N = 10;
let a = 0;
let b = 1;

console.log(a);
console.log(b);

for (let i = 3; i <= N; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}