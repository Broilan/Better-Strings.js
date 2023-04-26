declare global {
    interface String {
        reverse(): String;
        countWords(): Number;
        isPalindrome(): Boolean;
        toTitleCase(): String;
        toCamelCase(): String;
        toSnakeCase(): String;
    }
  }
  
  export {};