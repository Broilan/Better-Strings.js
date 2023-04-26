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

String.prototype.toCamelCase = function() {
    return this.split('').map((letter, i) => i !== 0 && this[i-1] === ' ' ? letter.toUpperCase() : letter).join('');
}

String.prototype.toSnakeCase = function() {
    return this.split('').map(l => !alphabet.has(l) && !nums.has(l) ? '_' : l).join('');
}

String.prototype.toKebabCase = function() {
    return this.split('').map(l => !alphabet.has(l) && !nums.has(l) ? '-' : l).join('');
}

String.prototype.toPascalCase = function() {
    return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join('');
}

String.prototype.toTrainCase = function() {
    return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join('-');
}

String.prototype.removeWhiteSpace = function() {
    return this.split(' ').join('');
}

String.prototype.reverseWords = function() {
    return this.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

String.prototype.escapeHTML = function() {
    return this.split('').map(l => {
        switch(l) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
            case '"':
                return '&quot;';
            case "'":
                return '&apos;';
            default:
                return l;
        }
    }).join('');
}

String.prototype.unescapeHTML = function() {
    const htmlEntities: {[key: string]: string} = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#039;': '\'',
      };
    return this.replace(/(&amp;|&lt;|&gt;|&quot;|&#039;)/g, function(match) {
        return htmlEntities[match];
      });
}

String.prototype.stripHTML = function() {
    return this.replace(/(<([^>]+)>)/gi, '');
}

String.prototype.isEmail = function() {
    return this.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) ? true : false;
}

String.prototype.isPhoneNumber = function() {
    return this.match(/^\d{3}-\d{3}-\d{4}$/) ? true : false;
}

//tests
let phoneNumber = '123-456-7890';
let testStr = 'hi my name is xyzabc123'
let htmlStr = '<div>hi</div>'
let testStr2 = 'racecar'
let email = "eschmannTanner@gmail.com"
console.log(email.isEmail())
htmlStr;
testStr;
