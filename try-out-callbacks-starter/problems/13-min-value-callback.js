/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function (array, cb) {
    let smallest = 0;
    if (cb === undefined) {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            const previous = array[i - 1];
            if (i === 0) {
                smallest = element;
            } else if (element < previous) {
                smallest = element;
            }
        }
    } else {
        for (let j = 0; j < array.length; j++) {
            const element = array[j];
            const previous = array[j - 1];
            if (j === 0) {
                smallest = cb(element);
            } else if (cb(element) < previous) {
                smallest = cb(element);
            }
        }
    }
    return smallest;
};

// Alternate
/* let minValueCallback = function (array, cb) {
    let smallest = cb ? cb(array[0]) : array[0];

    for (let i = 1; i < array.length; i++) {
        const element = cb ? cb(array[i]) : array[i];
        smallest = Math.min(smallest, element);
    }

    return smallest;
}; */

// console.log(minValueCallback([64, 25, 49, 9, 100])); // 9
// console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt)); // 3

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
