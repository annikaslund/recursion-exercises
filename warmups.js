// Product of Nums
// Write a function that finds the product of an array of numbers:

function product(arr){
    if (arr.length === 0) return 1;

    return arr.pop() * product(arr);
}

// Longest Word
// Given a list of words, return the length of the longest:

function longestWord(wordList, length=0){
    if (wordList.length === 0) return length;

    let word = wordList.pop()
    if (word.length > length){
        length = word.length;
    }

    return longestWord(wordList, length)
}

// Every Other Character
// Write a function that returns a string of every other character:

function everyOtherCharacter(str, i=0, output=""){
    if (i === str.length) return output;

    if (i % 2 === 0){
        output += str[i]
    }

    return everyOtherCharacter(str, i+1, output)
}

// Is Palindrome?
// Write a function that returns true/false depending on whether passed-in string is a palindrome:

function isPalindrome(str, i=str.length-1, compStr=""){
    if (i < 0) return (str === compStr);

    compStr += str[i];
    return isPalindrome(str, i-1, compStr);
}

// Find Index
// Given an array and a string, return the index of that string in 
// the array (or -1 if not present):

function findIndex(arr, str, i=0, idx=-1){
    if (i >= arr.length) return idx;

    if (arr[i] === str) idx = i;

    return findIndex(arr, str, i+1, idx);
}