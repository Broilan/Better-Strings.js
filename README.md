# Better-Strings.js Library
-------------------------------------------
## INSTALL: npm i @broilan/better-strings;

## IMPORT: import '@broilan/better-strings';

## REQUIRE: require('@broilan/better-strings');

## NOTE: You only need to import this in one file. Once imported, you have global access to every method in the library, no matter what file you're working in.

```javascript
String.prototype.reverse();
--------------------------

#Type: reverse(): String;
#Notes: reverses the string;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = 'hi my name is xyzabc123'

        str.reverse();
        output ---> '321cbazyx si eman ym ih'

    ----------------------- demo -----------------------
```

```javascript
String.prototype.countWords(n: number) 
--------------------------

#Type: countWords(): Number;
#Notes: Counts the number of strings seperate by spaces in a given string;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = 'hi my name is xyzabc123'

        str.countWords();
        output ---> 5

    ----------------------- demo -----------------------
```

```javascript
String.prototype.isPalindrome() 
--------------------------

#Type: isPalindrome(): Boolean;
#Notes: returns true or false based on whether or not a string is palindromic, regardless of spaces and capitalization;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = 'hi my name is xyzabc123'
        
        str.isPalindrome();
        output ---> false

        let str2 = "poor dan is in a droop"

        str2.isPalindrome()
        output ---> true

    ----------------------- demo -----------------------
```

```javascript
String.prototype.isAnagram() 
--------------------------

#Type: isAnagram(): Boolean;
#Notes: returns true or false based on whether or not a string is palindromic, regardless of spaces and capitalization;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = 'secure'
        let str2 = 'rescue'
        str.isAnagram();
        output ---> true

        let str3 = "poor"

        str.isAnagram(str3)
        output ---> false

    ----------------------- demo -----------------------  
```

```javascript
String.prototype.toPascalCase() 
--------------------------

#Type: toPascalCase(): Boolean;
#Notes: capitalizes the first letter of every word in a given string;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = 'hi my name is xyzabc123'

        str.toPascalCase();
        output ---> 'Hi My Name Is Xyzabc123'

    ----------------------- demo -----------------------
```

```javascript
String.prototype.toCamelCase() 
--------------------------

#Type: toCamelCase(): Boolean;
#Notes: capitalizes the first letter of every word in a given string, (except for the first word in the string);
#Mutates: false;

    ----------------------- demo -----------------------

        let str = 'hi my name is xyzabc123'

        str.toCamelCase();
        output ---> 'hi My Name Is Xyzabc123'

    ----------------------- demo -----------------------
```

```javascript
String.prototype.toSnakeCase() 
--------------------------

#Type: toSnakeCase(): Boolean;
#Notes: replaces all spaces and punctuation in a given string with underscores;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = 'hi my name is xyzabc123'

        str.toSnakeCase();
        output ---> 'hi_my_name_is_xyzabc123'

    ----------------------- demo -----------------------    
```

```javascript
String.prototype.toKebabCase() 
--------------------------

#Type: toKebabCase(): Boolean;
#Notes: replaces all spaces and punctation in a given string with hyphens;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = 'hi my name is xyzabc123'

        str.toKebabCase();
        output ---> 'hi-my-name-is-xyzabc123'

    ----------------------- demo -----------------------   
```

```javascript 
String.prototype.toTrainCase() 
--------------------------

#Type: toTrainCase(): Boolean;
#Notes: replaces all spaces and punctation in a given string with hyphens, and capitalizes the first letter of everyword;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = 'hi my name is xyzabc123'

        str.toTrainCase();
        output ---> 'Hi-My-Name-Is-Xyzabc123'

    ----------------------- demo -----------------------  
```

```javascript
String.prototype.removeWhiteSpace() 
--------------------------

#Type: removeWhiteSpace(): String;
#Notes: removes all whitespace from a string;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = 'hi my name is xyzabc123'

        str.removeWhiteSpace();
        output ---> 'himynameisxyzabc123'

    ----------------------- demo -----------------------   
```

```javascript      
String.prototype.reverseWords() 
--------------------------

#Type: reverseWords(): String;
#Notes: reverses everyword in a string;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = 'hi my name is xyzabc123'

        str.reverseWords();
        output ---> 'ih ym eman si 321cbazyx'

    ----------------------- demo -----------------------  
```

```javascript
String.prototype.escapeHTML() 
--------------------------

#Type: escapeHTML(): String;
#Notes: replaces any HTML tags in a string with their corresponding  HTML entities;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = '<div>hi<div>'

        str.escapeHTML();
        output ---> '&lt;div&gt;hi&lt;/div&gt'

    ----------------------- demo -----------------------     
```

```javascript
String.prototype.unescapeHTML() 
--------------------------

#Type: unescapeHTML(): String;
#Notes: replaces any HTML entities in a string with its corresponding HTML tag;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = '&lt;div&gt;hi&lt;/div&gt'

        str.unescapeHTML();
        output ---> '<div>hi<div>'

    ----------------------- demo -----------------------     
```

```javascript
String.prototype.stripHTML() 
--------------------------

#Type: stripHTML(): String;
#Notes: removes all HTML from a string;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = '<div>hi<div>'

        str.unescapeHTML();
        output ---> 'hi'

    ----------------------- demo -----------------------  
```

```javascript
String.prototype.isPhoneNumber() 
--------------------------

#Type: isPhoneNumber(): Boolean;
#Notes: checks whether or not a given string is in the form of a real phone number;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = '123-123-1234'
        
        str.isPhoneNumber();
        output ---> true

        let str2 = '123-123-123'
        str2.isPhoneNumber();
        output ---> false

    ----------------------- demo ----------------------- 
```

```javascript
String.prototype.isEmail() 
--------------------------

#Type: isEmail(): Boolean;
#Notes: checks whether or not a given string is in the form of a real email address;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = 'foobar@gmail.com'

        str.isEmail();
        output ---> true

        let str2 = 'foobargmail.com'

        str2.isEmail();
        output ---> false

    ----------------------- demo ----------------------- 
```

```javascript
String.prototype.isURL() 
--------------------------

#Type: isURL(): Boolean;
#Notes: checks whether or not a given string is in the form of a real URL;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = 'https://github.com/TannerEsch/Better-Strings.js'

        str.isURL();
        output ---> true

        let str2 = 'https://git'

        str2.isURL();
        output ---> false
        
    ----------------------- demo ----------------------- 
```

```javascript  
String.prototype.isIP() 
--------------------------

#Type: isIP(): Boolean;
#Notes: checks whether or not a given string is in the form of a real IP;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = '192.158.1.38'

        str.isIP();
        output ---> true

        let str2 = '192.158.1.3888'

        str2.isIP();
        output ---> false
        
    ----------------------- demo ----------------------- 
```

```javascript
String.prototype.stripLetters() 
--------------------------

#Type: stripLetters(): Boolean;
#Notes: removes all letters from a string;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = 'hi123'

        str.stripLetters();
        output ---> '123'
        
    ----------------------- demo -----------------------
```

```javascript 
String.prototype.stripNumbers() 
--------------------------

#Type: stripNumbers(): Boolean;
#Notes: removes all numbers from a string;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = 'hi123'

        str.stripNumbers();
        output ---> 'hi'
        
    ----------------------- demo ----------------------- 
```

```javascript
String.prototype.stripPunctuation() 
--------------------------

#Type: stripPunctuation(): Boolean;
#Notes: removes all numbers from a string;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = 'hi, how\'re you today?'

        str.stripPunctuation();
        output ---> 'hi howre you today'
        
    ----------------------- demo ----------------------- 
```

```javascript
String.prototype.stripSymbols() 
--------------------------

#Type: stripSymbols(): Boolean;
#Notes: removes all numbers from a string;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = '1 + 2 = 3'

        str.stripSymbols();
        output ---> '1   2   3'
        
    ----------------------- demo -----------------------       
```
