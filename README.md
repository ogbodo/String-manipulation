# String Manipulation Using Regular Expression
With the consistent use of ES5 and Test Driven Devlopment (TDD) pattern, the Javascript String class was extended using the Prototype Oriented Programming (POP) concept; such that more methods, procedures and instance attributes where added to the String class to support more string manipulation features via the power of Regex. Listed below is a list of the methods added to the string class.

## Methods
- hasVowels: Returns true if the string contains vowels. This method must implement Regular Expression.

- toUpper: Returns the String in question but with all characters in upper cases as applicable. This method should be implemented without the use of toUpperCase internal methods.

- toLower: Returns the String in question but with all characters in their lower cases as applicable. This method should be implemented without the use of toLowerCase internal methods.
 
- toTitleCase: Returns the String in question but changes the First Character to an Upper case. Make use of your toUpper method above to implement this method or a one-liner.

- isQuestion: Return true if the string is a question (ending with a question mark). This method must implement Regular Expression.

- words: Returns a list of the words in the string, as an Array. This method must implement Regular Expression.

- wordCount: Returns the number of words in the string. It must make use of the words method above.

- toCurrency: Returns a currency representation of the String e.g 11111.11 should be represented as 11,111.11.

- fromCurrency: Returns a number representation of the Currency String e.g 11,111.11 should return 11111.11

- inverseCase: Returns each letter in the string as an inverse of its current case e.g Mr. Ben should return mR. bEN.

- alternatingCase: Returns the letters in alternating cases. It must start with a lower case e.g Onomatopoeia should return oNoMaToPoEiA.

- numberWords: Returns the numbers in words e.g 325 should return three two five.

- isDigit: Returns true if the string is a digit(one number) e.g 3 should return true and 34 should return false. This method must implement Regular Expression.


### To setup and run the project

1. Clone the Project

2. Make sure you have Node.js Installed. Or you can download it [here](https://nodejs.org/en/download/)
              
3. To install jest, run `npm install --save-dev jest`
 
4. To run all test cases, run `npm test`

