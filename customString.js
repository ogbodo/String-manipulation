function CustomString() {}
String.prototype.hasVowels = function() {
  var vowelRegex = /[aeiou]/gi;

  return vowelRegex.test(this);
};
String.prototype.isQuestion = function() {
  var isQuestionRegex = /\w+[?]/;
  return isQuestionRegex.test(this);
};

String.prototype.numberWords = function() {
  var numberWordRegex = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    pattern: /\d/g
  };
  var digitsArray = this.match(numberWordRegex.pattern);
  var numberToWord = "";
  digitsArray.forEach(digit => {
    numberToWord += numberWordRegex[digit].concat(" ");
  });
  return numberToWord;
};

String.prototype.wordsToArray = function() {
  var wordRegex = /\b\w+\b/g;
  var wordArray = this.match(wordRegex);
  return wordArray;
};

String.prototype.wordCount = function() {
  return this.wordsToArray().length;
};

String.prototype.toUpper = function() {
  //   var regex = /(.+)\U\1/g;
  var regex = /(.+)\U$1/g;

  var matchedText = regex.exec(this);

  var upeerCaseRegex = /\U/.exec(matchedText);
  //   matchedText.forEach(function(value, index, arr) {
  //     console.log(value);
  //     console.log(index);
  //   });
};

// CustomString.prototype = Object.create(String.prototype);
// CustomString.prototype.hasVowels = function() {};

/**Start customizing the prototype of the string class to suite my own implementations */

module.exports = CustomString;
