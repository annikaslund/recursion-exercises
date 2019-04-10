/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums.pop() * product(nums);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, length = 0) {
  if (words.length === 0) return length;

  let word = words.pop()
  if (word.length > length) {
    length = word.length;
  }

  return longest(words, length)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, output = "") {
  if (i === str.length) return output;

  if (i % 2 === 0) {
    output += str[i]
  }

  return everyOther(str, i + 1, output)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = str.length - 1, compStr = "") {
  if (i < 0) return (str === compStr);

  compStr += str[i];
  return isPalindrome(str, i - 1, compStr);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, str, i = 0, idx = -1) {
  if (i >= arr.length) return idx;

  if (arr[i] === str) return i;

  return findIndex(arr, str, i + 1, idx);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1, reversedStr = "") {
  if (i < 0) return reversedStr;

  reversedStr += str[i];
  return revString(str, i - 1, reversedStr)
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj, objStrs=[]) {
  // let objStrs = [];

  // function _inner() {
  //   for (let key in obj) {
  //     if (typeof obj[key] === "object") {
  //       gatherStrings(obj[key])
  //     }
  //     if (typeof obj[key] === "string") objStrs.push(obj[key])
  //   }

  // }
  // _inner(obj);
  // return objStrs;
  for (let key in obj){
    if (typeof obj[key] === "string") objStrs.push(obj[key]);
    if (typeof obj[key] === "object") objStrs.push(...gatherStrings(obj[key]))
  }
  
  return objStrs;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
