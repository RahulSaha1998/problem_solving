//---------- Total 7 Problem Solving----------------



// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseString(inputStr) {
    let reversedStr = "";
    for (let i = inputStr.length - 1; i >= 0; i--) {
        reversedStr += inputStr[i];
    }
    return reversedStr;
}

const inputStr = "hello world";
const task_result = reverseString(inputStr);
console.log('Task 1 output:', task_result);





// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

function positiveSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }
    return sum;
}

const inputArr = [2, -5, 10, -3, 7];
const task_result2 = positiveSum(inputArr);
console.log('Task 2 output:', task_result2);





// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

function frequentElement(arr) {

    const frequency = {};

    arr.forEach((element) => {
        if (frequency[element]) {
            frequency[element]++;
        } else {
            frequency[element] = 1;
        }
    });

    let mostFrequentElement;
    let maxFrequency = 0;
    for (const element in frequency) {
        if (frequency[element] > maxFrequency) {
            maxFrequency = frequency[element];
            mostFrequentElement = element;
        }
    }

    return mostFrequentElement;
}

const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const task_result3 = frequentElement(inputArray);
console.log('Task 3 output:', "Most frequent element", task_result3);





//   Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculate(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Error: Cannot divide by zero!";
        }
    } else {
        return "Error: Invalid operator!";
    }
}

const number1 = 10;
const number2 = 5;
const operation = '-';
const task_result5 = calculate(number1, number2, operation);
console.log(`Task 5 output: ${task_result5}`);




// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPass(length) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?/{}~';

    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    return password;
}

const passwordLength = 6;
const randomPass = generateRandomPass(passwordLength);
console.log('Task 6 output:',"Random Password is:", randomPass);





// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value

function romanToInteger(romanNumeral) {
    const romanNumeralsMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let result = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
        const currentCharValue = romanNumeralsMap[romanNumeral[i]];
        const nextCharValue = romanNumeralsMap[romanNumeral[i + 1]];

        if (nextCharValue > currentCharValue) {
            result += (nextCharValue - currentCharValue);
            i++; 
        } else {
            result += currentCharValue;
        }
    }

    return result;
}

const romanNumeral = "IX";
console.log('Task 7 output:',`${romanNumeral} = ${romanToInteger(romanNumeral)}`);





// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function SecondSmallest(arr) {
    if (arr.length < 2) {
        return "Array must contain at least two elements.";
    }

    arr.sort((a, b) => a - b);
    return arr[1];
}

const numbers = [7, 2, 8, 3, 1, 5];
console.log('Task 8 output:',"Second Smallest Number:", SecondSmallest(numbers));

