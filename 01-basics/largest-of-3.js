/*
Question:
Find the largest of 3 numbers entered by the user

Logic:
- Take 3 numbers from user input
- Compare numbers using if-else
- Print the largest number
*/

let a = 4;
let b = 7;
let c = 2;

if (a > b && a > c) {
    console.log(a);
}else if (b > a && b > c) {
    console.log(b);
}else {
    console.log(c);
}