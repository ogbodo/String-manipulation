require("./customString");

describe("Whether or not the string contains vowels.", function() {
  test("A case where the string contains vowels", function() {
    expect(
      "My name is King Solomon and I am a software engineer".hasVowels()
    ).toBeTruthy();
  });

  test("A case where the string does not contain vowels.", function() {
    expect("KSlmlnpsq".hasVowels()).toBeFalsy();
  });
});

describe("Whether or not the string is a question.", function() {
  test("Return true if the string is a question (ends with a question mark).", function() {
    expect("are you going home?".isQuestion()).toBeTruthy();
  });
  test("Return false if the string is not a question (doesn't have a question mark).", function() {
    expect("welcome back home honey!".isQuestion()).toBeFalsy();
  });
  test("Return false if the string is not a properly constructed question (doesn't end with a question mark).", function() {
    expect("are you going? home".isQuestion()).toBeFalsy();
  });
});

describe("Returns the numbers in words.", function() {
  test("For the case of 325", function() {
    expect("325".numberWords()).toMatch("three two five ");
  });
  test("For the case of 048935", function() {
    expect("048935".numberWords()).toMatch("zero four eight nine three five ");
  });
});

test("Returns a list of the words in the string, as an Array", function() {
  expect("welcome to my home folks".wordsToArray()).toEqual([
    "welcome",
    "to",
    "my",
    "home",
    "folks"
  ]);
});

describe("Returns the number of words in the string.", function() {
  test("For the case of: welcome to my home folks", function() {
    expect("welcome to my home folks".wordCount()).toBe(5);
  });
  test("For the case of: welcome to my-home folks", function() {
    expect("welcome to my-home folks".wordCount()).toBe(4);
  });
});

describe("Check if a string is a digit.", function() {
  test("For the case of 3", function() {
    expect("3".isDigit()).toBeTruthy();
  });
  test("For the case of fr", function() {
    expect("fr".isDigit()).toBeFalsy();
  });
  test("For the case of f87r", function() {
    expect("f87r".isDigit()).toBeFalsy();
  });
});

describe("Returns a currency representation of the String", function() {
  test("In the case of input not supported", function() {
    expect("11dkP2.11".toCurrency()).toBeFalsy();
  });
  test("In the case of 111.11", function() {
    expect("111.11".toCurrency()).toBe("111.11 ");
  });
  test("In the case of 1110.11", function() {
    expect("1110.11".toCurrency()).toBe("1,110.11 ");
  });
  test("In the case of 11101.11", function() {
    expect("11101.11".toCurrency()).toBe("11,101.11 ");
  });
  test("In the case of 101101.11", function() {
    expect("101101.11".toCurrency()).toBe("101,101.11 ");
  });
  test("In the case of 1101101.11", function() {
    expect("1101101.11".toCurrency()).toBe("1,101,101.11 ");
  });
  test("In the case of 11101101.11", function() {
    expect("11101101.11".toCurrency()).toBe("11,101,101.11 ");
  });
});

describe("Returns a number representation of the Currency String", function() {
  test("In the case of 1,110.11", function() {
    expect("1,110.11".fromCurrency()).toBe(1110.11);
  });
  test("In the case of 101,101.11", function() {
    expect("101,101.11".fromCurrency()).toBe(101101.11);
  });
});

test("Returns the String in question but with all characters in upper cases as applicable.", function() {
  expect("izukerberg".toUpper()).toBe("IZUKERBERG");
});

test("Returns the String in question but with all characters in their lower cases as applicable", function() {
  expect("IZUKERBERG".toLower()).toBe("izukerberg");
});

describe("Returns the String in question but changes the First Character to an Upper case.", function() {
  test("In the case of: my name is izukerberg", function() {
    expect("my name is izukerberg".ucFirst()).toBe("My Name Is Izukerberg ");
  });
  test("In the case of empty string", function() {
    expect("".ucFirst()).toBeFalsy();
  });
  test("In the case of non string input", function() {
    expect("327261".ucFirst()).toBeFalsy();
  });
  test("In the case of: mY NamE is izuKer-BerG", function() {
    expect("mY NamE is izuKer-BerG".ucFirst()).toBe("My Name Is Izuker-berg ");
  });
});

test("Returns each letter in the string as an inverse of its current case e.g Mr. Ben should return mR. bEN.", function() {
  expect("Mr. Izu iS A progRammeR".inverseCase()).toBe(
    "mR. iZU Is a PROGrAMMEr"
  );
});

test("Returns the letters in alternating cases. It must start with a lower case e.g Onomatopoeia should return oNoMaToPoEiA.", function() {
  expect("Izukerberg".alternatingCase()).toBe("iZuKeRbErG");
  expect("IzukerbergE".alternatingCase()).toBe("iZuKeRbErGe");
});
