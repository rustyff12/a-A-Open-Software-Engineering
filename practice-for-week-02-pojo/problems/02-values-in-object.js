/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/
let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
/* function valuesInObject(obj) {
  return Object.values(obj);
}; */
let valuesInObject = function (obj) {
  let arr = []
  for (const values in obj) {
    arr.push(obj[values])
  }
  return arr;
};

// console.log(valuesInObject(animals));
// console.log(valuesInObject(foods));
//valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
//valuesInObject(foods); // => ["tart", "sour", "sweet"]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
