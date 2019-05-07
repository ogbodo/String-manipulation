String.prototype.hasVowels = function() {
  var vowelRegex = /[aeiou]/gi; //Regex pattern to match any string having vowels.
  var hasVowel = vowelRegex.test(this);
  return hasVowel;
};

String.prototype.isQuestion = function() {
  var regex = /\w+[?]$/; //Regex pattern to match any sentence with question mark at the end.
  return regex.test(this);
};

String.prototype.numberWords = function() {
  var numberWordRegex = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
  ];
  var digitsArray = this.match(/\d/g); //Regex pattern to match any digit.
  var numberToWord = '';
  digitsArray.forEach(function(digit) {
    numberToWord += numberWordRegex[digit].concat(' ');
  });
  return numberToWord;
};

String.prototype.wordsToArray = function() {
  var wordRegex = /\b[0-9a-zA-Z_\-?]+\b/g; //Regex pattern to match any word in a sentence
  var wordArray = this.match(wordRegex);

  return wordArray;
};

String.prototype.wordCount = function() {
  return this.wordsToArray().length;
};

String.prototype.isDigit = function() {
  var digitRegex = /\d/g; //Regex pattern to match any digit.

  if (!digitRegex.test(this)) {
    return false;
  }
  return this.match(digitRegex).length === 1 ? true : false;
};

String.prototype.toCurrency = function() {
  var regexPattern = /^\d+(\.\d+)?$/g; //Regex pattern to match any digit with or without the decimal part in it.
  if (!regexPattern.test(this)) {
    return false;
  }
  var currency = Number(this)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,'); //Appends comma (,) after every three(3) digits left-ward from the decimal point.

  return currency;
};

String.prototype.fromCurrency = function() {
  var wordReg = /[a-z]/gi; //Regex pattern to match any upper or lower cased alphabet.
  var regexPattern = /([\d]+),/g; //Regex pattern to match one or more digits containing comma (,).
  if (wordReg.test(this)) {
    return false;
  }

  var formattedValue = this.replace(regexPattern, '$1');
  return parseFloat(formattedValue);
};

String.prototype.toUpper = function() {
  var regex = /.+/g; //Regex pattern to match any character one or more times except new line character(\n).

  var upperCasedString = '';
  if (!regex.test(this)) {
    return false;
  }
  for (var character of this) {
    var asciiValue = character.charCodeAt(); //Retrieve the American Standard code internal information (ASCII)
    if (asciiValue >= 97 && asciiValue <= 122) {
      upperCasedString += String.fromCharCode(asciiValue - 32);
      continue;
    }
    upperCasedString += character;
  }

  return upperCasedString;
};

String.prototype.toLower = function() {
  var regex = /.+/g; //Regex pattern to match any character one or more times except new line character(\n).
  var lowerCasedString = '';
  if (!regex.test(this)) {
    return false;
  }
  for (var character of this) {
    var asciiValue = character.charCodeAt(); //Retrieve the American Standard code internal information (ASCII)
    if (asciiValue >= 60 && asciiValue <= 90) {
      lowerCasedString += String.fromCharCode(asciiValue + 32); //Converts this character to Lower case using its ASCII value above
      continue;
    }
    lowerCasedString += character;
  }

  return lowerCasedString;
};

String.prototype.ucFirst = function() {
  var regex = /\b[a-zA-Z_\-0-9]+[\d\+]?\b/g; //Regex pattern to match any alphanumeric character which could form a word in the string.
  var upperCasedFirstString = false;

  if (!regex.test(this)) {
    return false;
  }
  upperCasedFirstString = '';
  var matchedStrings = this.match(regex); //Retrieves all matches as an array

  matchedStrings.forEach(function(word) {
    upperCasedFirstString += word.charAt(0).toUpper(); //Converts the first character to upper case

    for (var index = 1; index <= word.length; index++) {
      var lowerCase = word.charAt(index).toLower(); //Converts the first character to Lower case
      upperCasedFirstString += lowerCase === false ? '' : lowerCase; //returns empty string if the returned value of lowerCase is false.
    }
    upperCasedFirstString += ' '; //Appends emppty string at the end of every word
  });

  return upperCasedFirstString;
};

String.prototype.inverseCase = function() {
  var regex = /.+/g; //Regex pattern to match any character one or more times except new line character(\n).

  var inverseCaseString = '';

  if (!regex.test(this)) {
    return false;
  }

  for (var character of this) {
    var asciiValue = character.charCodeAt(); //Retrieve the American Standard code internal information (ASCII)

    if (asciiValue >= 60 && asciiValue <= 90) {
      inverseCaseString += String.fromCharCode(asciiValue + 32); //Converts this character to Lower case using its ASCII value above
    } else if (asciiValue >= 97 && asciiValue <= 122) {
      inverseCaseString += String.fromCharCode(asciiValue - 32); //Converts this character to Upper case using its ASCII value above
    } else {
      inverseCaseString += character; //Concatenate none alphabet characters
    }
  }
  return inverseCaseString;
};

String.prototype.alternatingCase = function() {
  var regex = /.+/g; //Regex pattern to match any character one or more times except new line character(\n).
  var alternatingCaseString = this.charAt(0).toLower(); //Converts the first character to lower case
  if (!regex.test(this)) {
    return false;
  }
  var charIndex = 0;

  //Indefinite loop
  for (;;) {
    if (this.length === charIndex) {
      break; //Breaks out of this infinite loop when we have gotten to the end of the string.
    }
    charIndex++;
    var char = this.charAt(charIndex);
    var alphabetRegex = /[a-zA-Z]/; //Regex to match only alphabet characters
    if (!alphabetRegex.test(char)) {
      alternatingCaseString += char;
      continue;
    }
    alternatingCaseString += this.charAt(charIndex).toUpperCase(); //Converts the current character to upper case

    charIndex++;
    var lowerCase = this.charAt(charIndex).toLower(); //Converts the current character to lower case

    alternatingCaseString += lowerCase === false ? '' : lowerCase; //returns empty string if the returned value of lowerCase is false.
  }

  return alternatingCaseString;
};
