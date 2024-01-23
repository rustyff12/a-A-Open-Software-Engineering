/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/
// console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
// console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
// console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}

function stringConverter(string) {
  let arr = string.split('');
  let stringConut = {};
  let uniqueChars = arr.filter(function (word, index, arr) {
    return arr.indexOf(word) === index;
  });

  for (let i = 0; i < uniqueChars.length; i++) {
    let uniqueChar = uniqueChars[i];
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      let char = arr[j];
      if (char === uniqueChar) {
        count++;
      }
    }
    stringConut[uniqueChar] = count;
  }
  return stringConut;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
