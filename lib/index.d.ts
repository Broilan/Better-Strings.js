declare global {
    interface String {
        reverse(): String;
        countWords(): Number;
        isPalindrome(): Boolean;
        isAnagram(str2: String): Boolean;
        toCamelCase(): String;
        toSnakeCase(): String;
        toKebabCase(): String;
        toPascalCase(): String;
        toTrainCase(): String;
        removeWhiteSpace(): String;
        reverseWords(): String;
        escapeHTML(): String;
        unescapeHTML(): String;
        stripHTML(): String;
        stripLetters(): String;
        stripNumbers(): String;
        stripSymbols(): String;
        stripPunctuation(): String;
        isEmail(): Boolean;
        isURL(): Boolean;
        isIP(): Boolean;
        isPhoneNumber(): Boolean;
    }
  }
  
  export {};