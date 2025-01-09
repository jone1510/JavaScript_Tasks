// Function to find the largest word in a given string
function findLargestWord() {
    const input = prompt("Enter a sentence to find the largest word:");
    if (!input) return console.log("No input provided.");
    
    const words = input.split(" ");
    let largestWord = words[0];
    
    for (let word of words) {
        if (word.length > largestWord.length) {
            largestWord = word;
        }
    }
    console.log(`Largest Word: ${largestWord}`);
}

// Function to replace repeated capitalized names with "CHANGED"
function replaceRepeatedNames() {
    const input = prompt("Enter a sentence to replace repeated names:");
    if (!input) return console.log("No input provided.");

    const words = input.split(" ");
    const seenNames = new Set();
    const result = words.map(word => {
        if (/^[A-Z][a-zA-Z]*$/.test(word)) {
            if (seenNames.has(word)) {
                return "CHANGED";
            }
            seenNames.add(word);
        }
        return word;
    });

    console.log(`Output: ${result.join(" ")}`);
}

// Function to replace every even-indexed word with "EVEN"
function replaceEvenIndexedWords() {
    const input = prompt("Enter a sentence to replace even-indexed words:");
    if (!input) return console.log("No input provided.");

    const words = input.split(" ");
    const result = words.map((word, index) => (index % 2 === 0 ? "EVEN" : word));

    console.log(`Output: ${result.join(" ")}`);
}

// Function to remove duplicate characters in a string
function removeDuplicateCharacters() {
    const input = prompt("Enter a string to remove duplicate characters:");
    if (!input) return console.log("No input provided.");

    const seenChars = new Set();
    const result = input
        .split("")
        .filter(char => {
            if (seenChars.has(char)) {
                return false;
            }
            seenChars.add(char);
            return true;
        })
        .join("");

    console.log(`Output: ${result}`);
}

// Main Menu to test functions
function main() {
    console.log("Choose a function to run:");
    console.log("1. Find Largest Word");
    console.log("2. Replace Repeated Names");
    console.log("3. Replace Even-Indexed Words");
    console.log("4. Remove Duplicate Characters");
    console.log("5. Exit");

    const choice = prompt("Enter your choice (1-5):");
    switch (choice) {
        case "1":
            findLargestWord();
            break;
        case "2":
            replaceRepeatedNames();
            break;
        case "3":
            replaceEvenIndexedWords();
            break;
        case "4":
            removeDuplicateCharacters();
            break;
        case "5":
            console.log("Exiting program.");
            break;
        default:
            console.log("Invalid choice. Please try again.");
    }
}

// Run the main function
main();
