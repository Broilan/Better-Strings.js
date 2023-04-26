/// <reference path="./index.d.ts" />


let alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
let nums = new Set('0123456789+-/*^');
//reverses string: does not mutate
String.prototype.reverse = function() {
    return this.split("").reverse().join("");
} 

//counts the individual words in a string does not mutate
String.prototype.countWords = function() {
    return this.split(" ").length;
}

String.prototype.isPalindrome = function() {
    return this.split(' ').join('').reverse() === this.split(' ').join('');
}

String.prototype.toTitleCase = function() {
    return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

String.prototype.toCamelCase = function() {
    return this.split('').map((letter, i) => i !== 0 && this[i-1] === ' ' ? letter.toUpperCase() : letter).join('');
}

String.prototype.toSnakeCase = function() {
    return this.split('').map(l => !alphabet.has(l) && !nums.has(l) ? '_' : l).join('');
}




//tests
let testStr = 'hi my name is xyzabc123'
let testStr2 = 'racecar'

console.log(testStr.toSnakeCase());
testStr;
