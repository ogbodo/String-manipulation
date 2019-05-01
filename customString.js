function CustomString() {
  //customString().call(this);
}
String.prototype.hasVowels = function() {
  console.log(this);

  var vowelRegex = /[aeiou]/gi;

  return vowelRegex.test(this);
};
String.prototype.isQuestion = function() {
  var isQuestionRegex = /\w+[?]/;
  return isQuestionRegex.test(this);
};
String.prototype.toUpper = function() {
  console.log(this);
  //   var regex = /(.+)\U\1/g;
  var regex = /(.+)\U$1/g;

  var matchedText = regex.exec(this);
  console.log(matchedText);

  var upeerCaseRegex = /\U/.exec(matchedText);
  //   matchedText.forEach(function(value, index, arr) {
  //     console.log(value);
  //     console.log(index);
  console.log(regex.exec(this));
  //   });
};

CustomString.prototype = Object.create(String.prototype);
// CustomString.prototype.hasVowels = function() {};

/**Start customizing the prototype of the string class to suite my own implementations */

module.exports = CustomString;
