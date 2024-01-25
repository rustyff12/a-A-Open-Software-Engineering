/***********************************************************************
Write a function reverseStr(str) that accepts a string and returns that string
reversed.

Write this function using a fat arrow function!

Examples:
let result1 = reverseStr("hello"); // returns "olleh"
let result2 = reverseStr("garden"); // returns "nedrag"
let result3 = reverseStr("potato"); // returns "otatop"


***********************************************************************/
const reverseStr = (str) => {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        const element = str[i];
        newStr += element;
    }
    return newStr;
};
/* // Examples:
let result1 = reverseStr("hello"); // returns "olleh"
let result2 = reverseStr("garden"); // returns "nedrag"
let result3 = reverseStr("potato"); // returns "otatop"
console.log(result1);
console.log(result2);
console.log(result3); */
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = reverseStr;
} catch (e) {
    return null;
}
