String.prototype.hasVowels = function() {
  var vowelRegex = /[aeiou]/gi;
  var hasVowel = vowelRegex.test(this);
  return hasVowel;
};

String.prototype.isQuestion = function() {
  var isQuestionRegex = /[a-zA-Z_-][?]$/;
  return isQuestionRegex.test(this);
};

String.prototype.numberWords = function() {
  var numberWordRegex = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ];
  var digitsArray = this.match(/\d/g);
  var numberToWord = "";
  digitsArray.forEach(digit => {
    numberToWord += numberWordRegex[digit].concat(" ");
  });
  return numberToWord;
};

String.prototype.wordsToArray = function() {
  var wordRegex = /\b[0-9a-zA-Z_\-?]+\b/g;
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
  var regexPattern = /^\d+(\.\d+)?$/g;

  if (!regexPattern.test(this)) {
    return false;
  }

  var numbers = this.match(regexPattern);
  var formattedCurrency = "";
  numbers.forEach(currencyInput => {
    var mantissaPortion = /(\d+)(?:\.)/.exec(currencyInput);

    var mantissaValue =
      mantissaPortion != null ? mantissaPortion[1] : currencyInput;

    var aThousand = /(\d{1})/,
      tenThousand = /(\d{2})/,
      hundredThousand = /(\d{3})/,
      aMillion = /(\d{1})(\d{3})/,
      tenMillion = /(\d{2})(\d{3})/;

    if (/^\d{1,3}$/.test(mantissaValue)) {
      formattedCurrency += currencyInput + " ";
    } else if (/^\d{1,4}$/.test(mantissaValue)) {
      formattedCurrency += currencyInput.replace(aThousand, "$1,") + " ";
    } else if (/^\d{1,5}$/.test(mantissaValue)) {
      formattedCurrency += currencyInput.replace(tenThousand, "$1,") + " ";
    } else if (/^\d{1,6}$/.test(mantissaValue)) {
      formattedCurrency += currencyInput.replace(hundredThousand, "$1,") + " ";
    } else if (/^\d{1,7}$/.test(mantissaValue)) {
      formattedCurrency += currencyInput.replace(aMillion, "$1,$2,") + " ";
    } else if (/^\d{1,8}$/.test(mantissaValue)) {
      formattedCurrency += currencyInput.replace(tenMillion, "$1,$2,") + " ";
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
  if (regex.test(this)) {
    var upperCasedString = "";
    for (var character of this) {
      var asciiValue = character.charCodeAt();
      if (asciiValue >= 97 && asciiValue <= 122) {
        upperCasedString += String.fromCharCode(asciiValue - 32);
        continue;
      }
      upperCasedString += character;
    }
  }

  return upperCasedString;
};

String.prototype.toLower = function() {
  var regex = /.+/g;
  var lowerCasedString = "";
  if (regex.test(this)) {
    for (var character of this) {
      var asciiValue = character.charCodeAt();
      if (asciiValue >= 60 && asciiValue <= 90) {
        lowerCasedString += String.fromCharCode(asciiValue + 32);
        continue;
      }
      lowerCasedString += character;
    }
  }

  return lowerCasedString;
};

String.prototype.ucFirst = function() {
  var regex = /\b[a-zA-Z_-]+[\d\+]?\b/g;
  var upperCasedFirstString = false;

  if (regex.test(this)) {
    upperCasedFirstString = "";
    var arrayOfMatchedString = this.match(regex);

    arrayOfMatchedString.forEach(word => {
      upperCasedFirstString += word.charAt(0).toUpper();

      for (var index = 1; index <= word.length; index++) {
        upperCasedFirstString += word.charAt(index).toLower();
      }

      upperCasedFirstString += " ";
    });
  }
  return upperCasedFirstString;
};

String.prototype.inverseCase = function() {
  var regex = /.+/g;
  var inverseCaseString = "";
  if (regex.test(this)) {
    for (var character of this) {
      var asciiValue = character.charCodeAt();
      if (asciiValue >= 60 && asciiValue <= 90) {
        inverseCaseString += String.fromCharCode(asciiValue + 32);
      } else if (asciiValue >= 97 && asciiValue <= 122) {
        inverseCaseString += String.fromCharCode(asciiValue - 32);
      } else {
        inverseCaseString += character;
      }
    }
  }
  return inverseCaseString;
};

String.prototype.alternatingCase = function() {
  var regex = /.+/g;
  var alternatingCaseString = this.charAt(0).toLower();
  if (regex.test(this)) {
    var charIndex = 0;

    for (;;) {
      if (this.length === charIndex) {
        break;
      }
      charIndex++;
      alternatingCaseString += this.charAt(charIndex).toUpperCase();

      if (this.length === charIndex) {
        break;
      }
      charIndex++;
      alternatingCaseString += this.charAt(charIndex).toLower();
    }
  }
  return alternatingCaseString;
};
