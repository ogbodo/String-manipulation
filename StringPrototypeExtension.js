String.prototype.hasVowels = function() {
  var vowelRegex = /[aeiou]/gi;
  var hasVowel = vowelRegex.test(this);
  return hasVowel;
};

String.prototype.isQuestion = function() {
  var isQuestionRegex = /\w+[?]$/;
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
  var currency = Number(this)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");

  return currency;
};
String.prototype.fromCurrency = function() {
  var wordReg = /[a-z]/gi;
  var regexPattern = /([\d]+),/g;
  if (wordReg.test(this)) {
    return false;
  }

  var num = this.replace(regexPattern, "$1");
  return parseFloat(num);
};

String.prototype.toUpper = function() {
  var regex = /.+/g;
  var upperCasedString = "";
  if (regex.test(this)) {
    for (var character of this) {
      var asciiValue = character.charCodeAt();
      if (asciiValue >= 97 && asciiValue <= 122) {
        upperCasedString += String.fromCharCode(asciiValue - 32);
        continue;
      }
      upperCasedString += character;
    }
  } else {
    return false;
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
  } else {
    return false;
  }

  return lowerCasedString;
};

String.prototype.ucFirst = function() {
  var regex = /\b[a-zA-Z_\-0-9]+[\d\+]?\b/g;
  var upperCasedFirstString = false;

  if (regex.test(this)) {
    upperCasedFirstString = "";
    var arrayOfMatchedString = this.match(regex);

    arrayOfMatchedString.forEach(word => {
      upperCasedFirstString += word.charAt(0).toUpper();

      for (var index = 1; index <= word.length; index++) {
        var lowerCase = word.charAt(index).toLower();
        upperCasedFirstString += lowerCase === false ? "" : lowerCase;
      }

      upperCasedFirstString += " ";
    });
  } else {
    return false;
  }
  return upperCasedFirstString;
};

String.prototype.inverseCase = function() {
  var regex = /.+/g;
  var lowerCasePattern = /[a-z]/;
  var upperCasePattern = /[A-Z]/;
  var inverseCaseString = "";

  if (regex.test(this)) {
    for (var character of this) {
      if (upperCasePattern.test(character)) {
        inverseCaseString += String.fromCharCode(character.charCodeAt() + 32);
      } else if (lowerCasePattern.test(character)) {
        inverseCaseString += String.fromCharCode(character.charCodeAt() - 32);
      } else {
        inverseCaseString += character;
      }
    }
  } else {
    return false;
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
      var char = this.charAt(charIndex);
      if (!/[a-zA-Z]/.test(char)) {
        alternatingCaseString += char;
        continue;
      }
      alternatingCaseString += this.charAt(charIndex).toUpperCase();

      // if (this.length === charIndex) {
      //   break;
      // }
      charIndex++;
      var lowerCase = this.charAt(charIndex).toLower();

      alternatingCaseString += lowerCase === false ? "" : lowerCase;
    }
  } else {
    return false;
  }
  return alternatingCaseString;
};
