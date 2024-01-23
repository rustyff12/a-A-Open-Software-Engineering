/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = { name: 'Two', location: 'SF' };

//valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
// valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
// console.log(valuePair(object1, object2, 'location')) // => [ 'NY', 'SF' ]
// console.log(valuePair(object1, object2, 'name')); // => [ 'One', 'Two' ]

function valuePair(obj1, obj2, key) {
  let arr = []
  let keys1 = Object.entries(obj1);
  keys1.forEach(function (keyPairs) {
    if (keyPairs[0] === key) {
      arr.push(keyPairs[1])
    }
  });
  let keys2 = Object.entries(obj2);
  keys2.forEach(function (keyPairs) {
    if (keyPairs[0] === key) {
      arr.push(keyPairs[1])
    }
  });

  return arr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
