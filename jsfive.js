//Sure! Here are answers to 5 common logical questions in JavaScript. This is not an exhaustive list, but it will give you an idea of the type of questions you may encounter in interviews.

//Question: Swap two variables without using a temporary variable.
//javascript
//Copy code
let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b); // Output: 10, 5
//Question: Check if a given number is prime.
//javascript
//Copy code
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// console.log(isPrime(7)); // Output: true
// Question: Reverse a string.
// javascript
// Copy code
function reverseString(str) {
  return str.split('').reverse().join('');
}

// console.log(reverseString('Hello, World!')); // Output: "!dlroW ,olleH"
// Question: Find the largest element in an array.
// javascript
// Copy code
function findLargestElement(arr) {
  let largest = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

// console.log(findLargestElement([5, 2, 9, 1, 7])); // Output: 9
// Question: Check if two strings are anagrams.
// javascript
// Copy code
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const charCount = {};

  for (let char of str1) {
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  for (let char of str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

//console.log(areAnagrams('listen', 'silent')); // Output: true