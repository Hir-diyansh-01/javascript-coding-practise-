/*
Question:
Reverse an array without using extra array

Logic:
- Use two pointers: start and end
- Swap elements at start and end
- Move start forward and end backward
- Stop when start >= end
*/
 
let arr = [1, 2, 3, 4, 5]

let start = 0;
let end  = arr.length - 1; 

while (start < end) {
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;

  start++;  
  end--;   
}

console.log("Reversed Array =", arr);