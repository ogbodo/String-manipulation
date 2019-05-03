require("./customString");

test("Returns true if the string contains vowels.", function() {
  var str = "My name is King Solomon and I am a software engineer";
  expect(str.hasVowels()).toBeTruthy();
});

test("Returns false if the string does not contain vowels.", function() {
  var str = "KSlmlnpsq";
  expect(str.hasVowels()).toBeFalsy();
});
test("Return true if the string is a question (ending with a question mark).", function() {
  var str = "are you going home?";
  expect(str.isQuestion()).toBeTruthy();
});

test("Return false if the string is not a question (doesn't end with a question mark).", function() {
  var str = "welcome back home honey!";
  expect(str.isQuestion()).toBeFalsy();
});

test("Returns the numbers in words e.g 325 should return three two five", function() {
  var str = "325";
  expect(str.numberWords()).toMatch("three two five ");
  str = "048935";
  expect(str.numberWords()).toMatch("zero four eight nine three five ");
});

test("Returns a list of the words in the string, as an Array", function() {
  var str = "welcome to my home folks";
  expect(str.wordsToArray()).toEqual(["welcome", "to", "my", "home", "folks"]);
});

test("Returns the number of words in the string", function() {
  var str = "welcome to my home folks";
  expect(str.wordCount()).toBe(5);
});

test("Returns true if the string is a digit(one number) e.g 3 should return true and 34 should return false", function() {
  var str = "7";
  expect(str.isDigit()).toBeTruthy();
  str = "fr";
  expect(str.isDigit()).toBeFalsy();
});

test("Returns a currency representation of the String e.g 11111.11 should be represented as 11,111.11.", function() {
  var str = "11111.11";
  expect(str.toCurrency()).toBe("111,11.11 ");
});

test("Returns a number representation of the Currency String e.g 11,111.11 should return 11111.11", function() {
  var str = "11,1111.11";
  expect(str.fromCurrency()).toBe(111111.11);
});

test("Returns the String in question but with all characters in upper cases as applicable.", function() {
  var str = "izukerberg";
  expect(str.toUpper()).toBe("IZUKERBERG");
});

test("Returns the String in question but with all characters in their lower cases as applicable", function() {
  var str = "IZUKERBERG";
  expect(str.toLower()).toBe("izukerberg");
});
