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
    digitPattern: /\d/g
  };
  var digitsArray = this.match(numberWordRegex.digitPattern);
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

String.prototype.isDigit = function() {
  var digitRegex = /\d/g;

  if (!digitRegex.test(this)) {
    return false;
  }
  return this.match(digitRegex).length === 1 ? true : false;
};

String.prototype.toCurrency = function() {
  var regexPattern = /\d+(\.\d+)?/g;

  if (!regexPattern.test(this)) {
    return false;
  }

  var numbers = this.match(regexPattern);
  var formattedCurrency = "";
  numbers.forEach(currencyInput => {
    var mantissaPortion = /(\d+)(?:\.)/.exec(currencyInput);

    var mantissaValue =
      mantissaPortion != null ? mantissaPortion[1] : currencyInput;

    if (/^\d{3}$/.test(mantissaValue)) {
      formattedCurrency += currencyInput + " ";
    } else {
      var oneGrouped = /(\d{3})/,
        twoGrouped = /(\d{3})(\d{3})/,
        threeGrouped = /(\d{3})(\d{3})(\d{3})/;

      if (/^\d{1,5}$/.test(mantissaValue)) {
        formattedCurrency += currencyInput.replace(oneGrouped, "$1,") + " ";
      } else if (/^\d{1,7}$/.test(mantissaValue)) {
        if (mantissaValue.length % 3 === 0) {
          formattedCurrency += currencyInput.replace(twoGrouped, "$1,$2") + " ";
        } else {
          formattedCurrency +=
            currencyInput.replace(twoGrouped, "$1,$2,") + " ";
        }
      } else if (/^\d{1,10}$/.test(mantissaValue)) {
        if (mantissaValue.length % 3 === 0) {
          formattedCurrency +=
            currencyInput.replace(threeGrouped, "$1,$2,$3") + " ";
        } else {
          formattedCurrency +=
            currencyInput.replace(threeGrouped, "$1,$2,$3,") + " ";
        }
      }
    }
  });

  return formattedCurrency;
};

String.prototype.fromCurrency = function() {
  var regex = /(\d+),(\d+),?(\d+)?(\.)?(\d+)?/;
  var num = this.replace(regex, "$1$2$3$4$5");
  return parseFloat(num);
};

String.prototype.toUpper = function() {
  var regex = /.+/g;
  var matchedString = regex.exec(this);
  var upperCasedString = "";
  matchedString.forEach(word => {
    for (var character of word) {
      var asciiValue = character.charCodeAt();
      if (asciiValue >= 97 && asciiValue <= 122) {
        upperCasedString += String.fromCharCode(asciiValue - 32);
        continue;
      }
      upperCasedString += character;
    }
  });
  return upperCasedString;
};

String.prototype.toLower = function() {
  var regex = /.+/g;
  var matchedString = regex.exec(this);
  var lowerCasedString = "";
  matchedString.forEach(word => {
    for (var character of word) {
      var asciiValue = character.charCodeAt();
      if (asciiValue >= 60 && asciiValue <= 90) {
        lowerCasedString += String.fromCharCode(asciiValue + 32);
        continue;
      }
      lowerCasedString += character;
    }
  });
  return lowerCasedString;
};

// CustomString.prototype = Object.create(String.prototype);
// CustomString.prototype.hasVowels = function() {};

/**Start customizing the prototype of the string class to suite my own implementations */
