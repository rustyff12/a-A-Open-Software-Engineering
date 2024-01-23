/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array of
objects as the first parameter and a string as the second. The `keyInObjectArray`
will return `true` if any of the objects contains the `keyString` as a key within them, and
`false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

***********************************************************************/
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];
// console.log(keyInObjectArray(objArray, 'planet')) // => true
// console.log(keyInObjectArray(objArray, 'age')); // => true
// console.log(keyInObjectArray(objArray, 'food')); // => false
// console.log(keyInObjectArray(objArray, 'animal')) // => false

function keyInObjectArray(objArray, keyString) {
  for (let i = 0; i < objArray.length; i++) {
    let keys = Object.keys(objArray[i]);
    if (keys.length > 1) {
      for (let j = 0; j < keys.length; j++) {
        let element = keys[j];
        if (element.toString() === keyString) {
          return true;
        }
      }
    }
    if (keys.toString() == keyString) {
      return true;
    }
  }
  return false;
};
// console.log("---------------------")

// Alternate
// Function to check if a key is present in an array of objects
/* function keyInObjectArrayAlt(objArray, keyString) {

  for (let i = 0; i < objArray.length; i++) {
    let keys = Object.keys(objArray[i]);
    if (keys.length > 1) {

      for (let j = 0; j < keys.length; j++) {
        if (keys[j] === keyString) {
          return true;
        }
      }
    }

    if (keys[0] === keyString) {
      return true;
    }
  }

  return false;
} */

// Example usage with console.log
// console.log(keyInObjectArrayAlt(objArray, 'planet')); // => true
// console.log(keyInObjectArrayAlt(objArray, 'age'));    // => true
// console.log(keyInObjectArrayAlt(objArray, 'food'));   // => false
// console.log(keyInObjectArrayAlt(objArray, 'animal')); // => false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
