String.prototype.hasVowels = function() {
  var vowelPattern = /[aeiou]/gi; //Regex pattern to match any string having vowels.
  return vowelPattern.test(this);
};

String.prototype.isQuestion = function() {
  var questionPattern = /\w+[?]$/; //Regex pattern to match any sentence with question mark at the end.
  return questionPattern.test(this);
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
  var singleDigitPattern = /^\d$/g; //Regex pattern to match a single digit only.
  return singleDigitPattern.test(this);
};

String.prototype.toCurrency = function() {
  var digitWithOptionalDecimalPattern = /^\d+(\.\d+)?$/g; //Regex pattern to match any digit with or without the decimal part in it.
  if (!digitWithOptionalDecimalPattern.test(this)) {
    return false;
  }
  //Regex pattern that matches a digit only when there are three(3) digits after starting left-ward from the decimal point.
  var fractionPattern = /\d(?=(\d{3})+\.)/g;

  var currency = Number(this) //Wrap the digits with the Number class so we can take advantage of the Number class methods
    .toFixed(2) //Use the toFixed method of Number class to make the digits two decimal places
    .replace(fractionPattern, '$&,'); //Appends comma (,) after every three(3) digits left-ward from the decimal point.

  return currency;
};

String.prototype.fromCurrency = function() {
  var alphabetPattern = /[a-z]/gi; //Regex pattern to match any upper or lower cased alphabet.
  var commaSeparatedDigitsPattern = /([\d]+),/g; //Regex pattern to match one or more digits containing comma (,).

  if (alphabetPattern.test(this)) {
    return false;
  }

  var formattedValue = this.replace(commaSeparatedDigitsPattern, '$1');
  return parseFloat(formattedValue);
};

String.prototype.toUpper = function() {
  var anyCharacterPattern = /.+/g; //Regex pattern to match any character one or more times except new line character(\n).

  var upperCasedString = '';
  if (!anyCharacterPattern.test(this)) {
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
  var anyCharacterPattern = /.+/g; //Regex pattern to match any character one or more times except new line character(\n).
  var lowerCasedString = '';
  if (!anyCharacterPattern.test(this)) {
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

String.prototype.toTitleCase = function() {
  //Regex pattern to match any alphanumeric character which could form a word in the string.
  var alphanumericPattern = /\b[a-zA-Z_\-0-9]+[\d\+]?\b/g;
  var upperCasedFirstString = false;

  if (!alphanumericPattern.test(this)) {
    return false;
  }
  upperCasedFirstString = '';
  var matchedStrings = this.match(alphanumericPattern); //Retrieves all matches as an array

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
  var anyCharacterPattern = /.+/g; //Regex pattern to match any character one or more times except new line character(\n).

  var inverseCaseString = '';

  if (!anyCharacterPattern.test(this)) {
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
  var anyCharacterPattern = /.+/g; //Regex pattern to match any character one or more times except new line character(\n).
  var alternatingCaseString = this.charAt(0).toLower(); //Converts the first character to lower case
  if (!anyCharacterPattern.test(this)) {
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
