declare global {
    interface String {
        reverse(): String;
        countWords(): Number;
        isPalindrome(): Boolean;
        toCamelCase(): String;
        toSnakeCase(): String;
        toKebabCase(): String;
        toPascalCase(): String;
        toTrainCase(): String;
    }
  }
  
  export {};