/*
Write a program that uses console.log to print all the numbers from 1 to 100.
There are two exceptions:
1. For numbers divisible by 3, print "Fizz" instead of the number
2. For numbers divisible by 5 (and not 3), print "Buzz" instead
3. Print "FizzBuzz" for numbers that are divisible by both 3 and 5
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those)
*/

for (let i = 1; i <= 100; i += 1) {
  let output = '';
  if (i % 3 === 0) {
    output += 'Fizz';
  }
  if (i % 5 === 0) {
    output += 'Buzz';
  }
  console.log(output || i);
}
