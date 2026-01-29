/*
Question:
Print all prime numbers from 1 to N

Logic:
- Loop from 2 to N
- For each number, check divisibility from 2 to number-1
- If divisible, not prime
- Else, prime → print
*/

let N = 10;

for (let i = 2; i <= N; i++) {       
  let isPrime = true;                 
  
  for (let j = 2; j < i; j++) {  
    if (i % j === 0) {               
      isPrime = false;           
      break;                          
    }
  }
  
  if (isPrime) {
    console.log(i);                   
  }
}
