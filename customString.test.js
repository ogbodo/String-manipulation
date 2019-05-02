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
});

// test("Returns a list of the words in the string, as an Array", function() {
//   var str = "Welcome to my paradize folks";
//   expect(str.wordsToArray()).toBe(["welcome", "to", "my", "paradize"]);
// });

// test("Returns the String in question but with all characters in upper cases as applicable..", function() {
//   var str = "King Solomon";
//   expect(str.toUpper()).toBe("");
// });
