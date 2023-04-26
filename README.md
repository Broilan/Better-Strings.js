# Better-Strings.js
```javascript

String.prototype.reverse();
--------------------------

#Type: reverse(): String;
#Notes: reverses the string
#Mutates: false;

    ----------------------- demo -----------------------

        let str = 'hi my name is xyzabc123'

        str.reverse();
        output ---> 321cbazyx si eman ym ih

    ----------------------- demo -----------------------

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

String.prototype.toTitleCase() 
--------------------------

#Type: toTitleCase(): Boolean;
#Notes: capitalizes the first letter of every word in a given string;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = 'hi my name is xyzabc123'

        str.toTitleCase();
        output ---> Hi My Name Is Xyzabc123

    ----------------------- demo -----------------------

String.prototype.toCamelCase() 
--------------------------

#Type: toCamelCase(): Boolean;
#Notes: capitalizes the first letter of every word in a given string, (except for the first word in the string);
#Mutates: false;

    ----------------------- demo -----------------------

        let str = 'hi my name is xyzabc123'

        str.toCamelCase();
        output ---> hi My Name Is Xyzabc123

    ----------------------- demo -----------------------

String.prototype.toSnakeCase() 
--------------------------

#Type: toSnakeCase(): Boolean;
#Notes: replaces all spaces and punctuation in a given string with underscores;
#Mutates: false;

    ----------------------- demo -----------------------

        let str = 'hi my name is xyzabc123'

        str.toSnakeCase();
        output ---> hi_my_name_is_xyzabc123

    ----------------------- demo -----------------------    

