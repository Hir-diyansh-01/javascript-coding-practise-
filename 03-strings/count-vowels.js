/*
Question:
Count vowels in a string

Logic:
- Convert string to lowercase
- Loop through each character
- Check if character is vowel
- Increase count
*/

let text = "hello world";
text = text.toLowerCase();

let count = 0;
let vowels = ["a", "e", "i", "o", "u"];

for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
        count++;
    }
}

console.log("Vowel count =", count);