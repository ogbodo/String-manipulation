const customString = require("./customString");

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
  expect(str.hasVowels()).toBeTruthy();
});

// test("Returns the String in question but with all characters in upper cases as applicable..", function() {
//   var str = "King Solomon";
//   expect(str.toUpper()).toBe("");
// });
