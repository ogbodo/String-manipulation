const customString = require("./customString");

test("Returns true if the string contains vowels.", function() {
  var str = "My name is King Solomon and I am a software engineer";
  expect(str.hasVowels()).toBeTruthy();
});
