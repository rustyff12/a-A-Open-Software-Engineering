/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/
// console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
// console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
//console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}

function arrayConverter(array) {
  let wordCount = {};

  let uniqueWords = array.filter(function (word, index, array) {
    return array.indexOf(word) === index;
  });

  for (let i = 0; i < uniqueWords.length; i++) {
    let uniqueWord = uniqueWords[i];
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      let word = array[j];
      if (word === uniqueWord) {
        count++;
      }
    }
    wordCount[uniqueWord] = count;
  }
  return wordCount;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
