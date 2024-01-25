/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of parameters
and returns a function.

The returned function will also accept any number of parameters and will
return a string including all of the parameters of smoothieMachine as well
as the returned function's parameters. Look at the examples for a guide of
how your return should be formatted!

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

const smoothieMachine = (...ingredients) => {
    let newStr = "I'm having a smoothie with";
    let newArr = newStr.split(" ");
    let initial = [...ingredients];
    for (let j = 0; j < initial.length; j++) {
        const element = initial[j];
        if (j === 0) {
            newArr.push(element);
        } else {
            newArr.push(`and ${element}`);
        }
    }
    function newIngredients(...ingredient) {
        let word = ingredient;
        for (let i = 0; i < word.length; i++) {
            const element = word[i];
            if (i === word.length - 1 && newArr.length < 6) {
                newArr.push(`${element}`);
            } else {
                newArr.push(`and ${element}`);
            }
        }
        return newArr.join(" ");
    }

    return newIngredients;
};

/* let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple")); */
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = smoothieMachine;
} catch (e) {
    return null;
}

// Alternate
/* const smoothieMachine = (...ingredients) => {
    let newStr = "I'm having a smoothie with";
    let newArr = [...ingredients];

    function newIngredients(...ingredient) {
        for (let i = 0; i < ingredient.length; i++) {
            const element = ingredient[i];
            newArr.push(element);
        }
        return `${newStr} ${newArr.join(' and ')}`;
    }

    return newIngredients;
}; */
