/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

let suffixCipher = function (sen, obj) {
    let firstKey = Object.keys(obj)[0];
    let secKey = Object.keys(obj)[1];
    let firstVal = Object.values(obj)[0];
    let secVal = Object.values(obj)[1];

    let arr = sen.split(" ");
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let str = element.toString();
        if (element.includes(firstKey)) {
            newArr.push(firstVal(str));
        } else if (element.includes(secKey)) {
            newArr.push(secVal(str));
        } else {
            newArr.push(element);
        }
    }

    return newArr.join(" ");
};

/* let cipher1 = {
    ly: function (word) {
        return word.slice(0, -1) + "ee";
    },
    ize: function (word) {
        return word + "r";
    },
};
console.log(suffixCipher("quietly and gently visualize", cipher1)); */
// quietlee and gentlee visualizer

/* let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL */

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
