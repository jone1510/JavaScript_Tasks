// Task 1: Check if a Number is Even or Odd
function checkEvenOdd(num) {
    console.log(`${num} is ${num % 2 === 0 ? 'even' : 'odd'}`);
}

// Task 2: Print Numbers from 1 to 10
function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// Task 3: Print Multiples of a Number
function printMultiples(num) {
    for (let i = num; i <= 30; i += num) {
        console.log(i);
    }
}

// Task 4: Check if a Number is Prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function checkPrime(num) {
    console.log(`${num} is ${isPrime(num) ? 'prime' : 'not prime'}`);
}

// Task 5: Calculate Sum of Numbers
function calculateSum() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(`Sum of numbers from 1 to 100: ${sum}`);
}

// Task 6: Find Largest Number in Array
function findLargest(arr) {
    const largest = Math.max(...arr);
    console.log(`Largest number: ${largest}`);
}

// Task 7: Count Vowels in String
function countVowels(str) {
    const vowels = str.toLowerCase().match(/[aeiou]/g) || [];
    console.log(`Number of vowels: ${vowels.length}`);
}

// Task 8: Print Star Pattern
function printStarPattern() {
    for (let i = 1; i <= 5; i++) {
        console.log('*'.repeat(i));
    }
}

// Task 9: FizzBuzz
function fizzBuzz() {
    for (let i = 1; i <= 50; i++) {
        let output = '';
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        console.log(output || i);
    }
}

// Task 10: Reverse String
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(`Reversed string: ${reversed}`);
}

// Test all functions
console.log("Task 1: Even/Odd Check");
checkEvenOdd(7);

console.log("\nTask 2: Print Numbers 1-10");
printNumbers();

console.log("\nTask 3: Multiples of 3");
printMultiples(3);

console.log("\nTask 4: Prime Number Check");
checkPrime(17);

console.log("\nTask 5: Sum Calculation");
calculateSum();

console.log("\nTask 6: Largest Number");
findLargest([1, 5, 3, 9, 2]);

console.log("\nTask 7: Vowel Count");
countVowels("Hello World");

console.log("\nTask 8: Star Pattern");
printStarPattern();

console.log("\nTask 9: FizzBuzz");
fizzBuzz();

console.log("\nTask 10: String Reversal");
reverseString("JavaScript");
