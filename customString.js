function CustomString() {
  //customString().call(this);
}
String.prototype.hasVowels = function() {
  var vowelRegex = /[aeiou]/g;
  console.log(this);

  return vowelRegex.test(this);
};

CustomString.prototype = Object.create(String.prototype);
// CustomString.prototype.hasVowels = function() {};

/**Start customizing the prototype of the string class to suite my own implementations */

module.exports = CustomString;
