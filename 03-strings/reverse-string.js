/*
Question:
Reverse a string

Logic:
- Convert string to array using split()
- Reverse array using loop
- Convert array back to string using join()
*/

let text = "hello";
let chars = text.split("");
let reversed = [];

for (let i = chars.length - 1; i >= 0; i--) {
  reversed.push(chars[i]);
}

let result = reversed.join("");
console.log("Reversed String =", result);
