const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Helper function to get user input
const getUserInput = (prompt) => {
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            resolve(answer);
        });
    });
};

// 1. Basic Math Operations
async function basicMathOperations() {
    const num1 = parseFloat(await getUserInput('Enter first number: '));
    const num2 = parseFloat(await getUserInput('Enter second number: '));
    
    console.log(`Sum: ${num1 + num2}`);
    console.log(`Difference: ${num1 - num2}`);
    console.log(`Product: ${num1 * num2}`);
    console.log(`Quotient: ${(num1 / num2).toFixed(2)}`);
}

// 2. Logical Condition
async function logicalCondition() {
    const num = parseInt(await getUserInput('Enter a number: '));
    console.log(`Is ${num} greater than 10 and divisible by 2? ${num > 10 && num % 2 === 0}`);
}

// 3. Ternary Operator
async function checkPositiveNegative() {
    const num = parseFloat(await getUserInput('Enter a number: '));
    console.log(num >= 0 ? 'Positive' : 'Negative');
}

// 4. Check Odd or Even
async function checkOddEven() {
    const num = parseInt(await getUserInput('Enter a number: '));
    console.log(num % 2 === 0 ? 'Even' : 'Odd');
}

// 5. Grade System
async function gradeSystem() {
    const percentage = parseFloat(await getUserInput('Enter percentage (0-100): '));
    let grade;
    
    switch (true) {
        case percentage >= 90 && percentage <= 100:
            grade = 'A';
            break;
        case percentage >= 80 && percentage < 90:
            grade = 'B';
            break;
        case percentage >= 70 && percentage < 80:
            grade = 'C';
            break;
        default:
            grade = 'F';
    }
    
    console.log(`Grade: ${grade}`);
}

// 6. Multiplication Table
async function multiplicationTable() {
    const num = parseInt(await getUserInput('Enter a number: '));
    
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// 7. Count Digits
async function countDigits() {
    const num = await getUserInput('Enter a number: ');
    console.log(`Number of digits: ${num.toString().replace(/[^0-9]/g, '').length}`);
}

// 8. Reverse String
async function reverseString() {
    const str = await getUserInput('Enter a string: ');
    console.log(`Reversed string: ${str.split('').reverse().join('')}`);
}

// 9. Count Vowels
async function countVowels() {
    const str = await getUserInput('Enter a string: ');
    const vowels = str.match(/[aeiou]/gi);
    console.log(`Number of vowels: ${vowels ? vowels.length : 0}`);
}

// 10. Check Palindrome
async function checkPalindrome() {
    const str = await getUserInput('Enter a string: ');
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleanStr.split('').reverse().join('');
    console.log(`Is palindrome: ${cleanStr === reversed}`);
}

// 11. Extract Initials
async function extractInitials() {
    const name = await getUserInput('Enter full name: ');
    const initials = name.split(' ')
        .map(word => word.charAt(0).toUpperCase())
        .join('.');
    console.log(`Initials: ${initials}`);
}

// 12. Replace Words
async function replaceWords() {
    const sentence = await getUserInput('Enter a sentence: ');
    const wordToReplace = await getUserInput('Enter word to replace: ');
    const replacement = await getUserInput('Enter replacement word: ');
    
    console.log(`New sentence: ${sentence.replace(wordToReplace, replacement)}`);
}

// 13. Split Sentence
async function splitSentence() {
    const sentence = await getUserInput('Enter a sentence: ');
    console.log('Words array:', sentence.split(' '));
}

// 14. Remove Spaces
async function removeSpaces() {
    const str = await getUserInput('Enter a string: ');
    console.log(`String without spaces: ${str.replace(/\s/g, '')}`);
}

// 15. Find Character Frequency
async function findCharacterFrequency() {
    const str = await getUserInput('Enter a string: ');
    const char = await getUserInput('Enter a character to find: ');
    const frequency = str.toLowerCase().split(char.toLowerCase()).length - 1;
    console.log(`Frequency of '${char}': ${frequency}`);
}

// Main menu function
async function mainMenu() {
    while (true) {
        console.log('\n=== JavaScript Tasks Menu ===');
        console.log('1. Basic Math Operations');
        console.log('2. Logical Condition Check');
        console.log('3. Positive/Negative Check');
        console.log('4. Odd/Even Check');
        console.log('5. Grade System');
        console.log('6. Multiplication Table');
        console.log('7. Count Digits');
        console.log('8. Reverse String');
        console.log('9. Count Vowels');
        console.log('10. Check Palindrome');
        console.log('11. Extract Initials');
        console.log('12. Replace Words');
        console.log('13. Split Sentence');
        console.log('14. Remove Spaces');
        console.log('15. Find Character Frequency');
        console.log('0. Exit');

        const choice = parseInt(await getUserInput('\nEnter your choice (0-15): '));

        try {
            switch (choice) {
                case 0:
                    console.log('Goodbye!');
                    rl.close();
                    return;
                case 1: await basicMathOperations(); break;
                case 2: await logicalCondition(); break;
                case 3: await checkPositiveNegative(); break;
                case 4: await checkOddEven(); break;
                case 5: await gradeSystem(); break;
                case 6: await multiplicationTable(); break;
                case 7: await countDigits(); break;
                case 8: await reverseString(); break;
                case 9: await countVowels(); break;
                case 10: await checkPalindrome(); break;
                case 11: await extractInitials(); break;
                case 12: await replaceWords(); break;
                case 13: await splitSentence(); break;
                case 14: await removeSpaces(); break;
                case 15: await findCharacterFrequency(); break;
                default:
                    console.log('Invalid choice. Please try again.');
            }
        } catch (error) {
            console.log('An error occurred:', error.message);
        }
    }
}

// Start the program
console.log('Welcome to JavaScript Tasks!');
mainMenu();
