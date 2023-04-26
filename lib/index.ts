/// <reference path="./index.d.ts" />

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





//tests
let testStr = 'hi my name is xyzabc123'
let testStr2 = 'racecar'
testStr;
