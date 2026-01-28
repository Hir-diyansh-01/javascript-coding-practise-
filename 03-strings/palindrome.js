/*
Question:
Check if a string is palindrome

Logic:
- Reverse the string
- Compare with original string
- If same, it's palindrome
*/

let text = "madam";
let chars = text.split("");
let reversed = [];

for (let i = chars.length - 1; i >= 0; i-- ) {
    reversed.push(chars[i]);
}

let reveredText = reversed.join("");
if (text === reveredText) {
    console.log("Pallindrome");
} else {
    console.log("Not Pallindrome");
}