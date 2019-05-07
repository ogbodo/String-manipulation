require('../string-prototype-extension');

describe('Whether or not the string contains vowels.', function() {
  test('A case where the string contains vowels', function() {
    expect(
      'My name is King Solomon and I am a software engineer'.hasVowels()
    ).toBeTruthy();
  });

  test('A case where the string does not contain vowels.', function() {
    expect('KSlmlnpsq'.hasVowels()).toBeFalsy();
  });
});

describe('Whether or not the string is a question.', function() {
  test('Return true if the string is a question (ends with a question mark).', function() {
    expect('are you going home?'.isQuestion()).toBeTruthy();
  });
  test("Return false if the string is not a question (doesn't have a question mark).", function() {
    expect('welcome back home honey!'.isQuestion()).toBeFalsy();
  });
  test("Return false if the string is not a properly constructed question (doesn't end with a question mark).", function() {
    expect('are you going? home'.isQuestion()).toBeFalsy();
    expect('3445?'.isQuestion()).toBeTruthy();
  });
});

describe('Returns the numbers in words.', function() {
  test('For the case of 325', function() {
    expect('325'.numberWords()).toMatch('three two five ');
  });
  test('For the case of 048935', function() {
    expect('048935'.numberWords()).toMatch('zero four eight nine three five ');
  });
  test('For the case of string input mixed with numbers', function() {
    expect('048g135'.numberWords()).toMatch('zero four eight one three five ');
  });
});

test('Returns a list of the words in the string, as an Array', function() {
  expect('welcome to my home folks'.wordsToArray()).toEqual([
    'welcome',
    'to',
    'my',
    'home',
    'folks'
  ]);
});

describe('Returns the number of words in the string.', function() {
  test('For the case of: welcome to my home folks', function() {
    expect('welcome to my home folks'.wordCount()).toBe(5);
  });
  test('For the case of: welcome to my-home folks', function() {
    expect('welcome to my-home folks'.wordCount()).toBe(4);
  });
});

describe('Check if a string is a digit.', function() {
  test('For the case of 3', function() {
    expect('3'.isDigit()).toBeTruthy();
  });
  test('For the case of fr', function() {
    expect('fr'.isDigit()).toBeFalsy();
  });
  test('For the case of f87r', function() {
    expect('f87r'.isDigit()).toBeFalsy();
  });
});

describe('Returns a currency representation of the String', function() {
  test('In the case of input not supported', function() {
    expect('11dkP2.11'.toCurrency()).toBeFalsy();
  });
  test('In the case of 111.11', function() {
    expect('11111'.toCurrency()).toBe('11,111.00');

    expect('111.11'.toCurrency()).toBe('111.11');
  });
  test('In the case of 1110.11', function() {
    expect('1110.11'.toCurrency()).toBe('1,110.11');
  });
  test('In the case of 11101.11', function() {
    expect('11101.11'.toCurrency()).toBe('11,101.11');
  });
  test('In the case of 101101.11', function() {
    expect('101101.11'.toCurrency()).toBe('101,101.11');
  });
  test('In the case of 1101101.11', function() {
    expect('1101101.11'.toCurrency()).toBe('1,101,101.11');
  });
  test('In the case of 11101101.11', function() {
    expect('11101101.11'.toCurrency()).toBe('11,101,101.11');
  });
});

describe('Returns a number representation of the Currency String', function() {
  test('In the case of 1,110.11', function() {
    expect('1,110.11'.fromCurrency()).toBe(1110.11);
  });
  test('In the case of 101,101.11', function() {
    expect('101,101.11'.fromCurrency()).toBe(101101.11);
  });
  test('In the case of 101,101,455,879.11', function() {
    expect('101,101,455,879.11'.fromCurrency()).toBe(101101455879.11);
  });
  test('In the case of 101,101,455', function() {
    expect('101,101,455'.fromCurrency()).toBe(101101455);
  });
  test('In the case of none digit mixed with string input', function() {
    expect('101,er,455'.fromCurrency()).toBeFalsy();
  });
  test('In the case of none digit input', function() {
    expect('er,dkjskj.00'.fromCurrency()).toBeFalsy();
  });
});

describe('Returns the String in question but with all characters in upper cases as applicable.', function() {
  test('for the case of izu9kerberg.', function() {
    expect('izu9kerberg'.toUpper()).toBe('IZU9KERBERG');
  });
  test('for the case of new line input.', function() {
    expect('\n'.toUpper()).toBeFalsy();
  });
  test('for the case of Izuke670rbergE.', function() {
    expect('Izuke670rbergE'.toUpper()).toBe('IZUKE670RBERGE');
  });
});

describe('Returns the String in question but with all characters in their lower cases as applicable', function() {
  test('for the case of Izukerberg.', function() {
    expect('IZUKERBERG'.toLower()).toBe('izukerberg');
  });

  test('for the case of new line input.', function() {
    expect('\n'.toUpper()).toBeFalsy();
  });
  test('for the case of IZUKE670RBERG.', function() {
    expect('IZUKE670RBERG'.toLower()).toBe('izuke670rberg');
  });
});

describe('Returns the String in question but changes the First Character to an Upper case.', function() {
  test('In the case of: my name is izukerberg', function() {
    expect('my name is izukerberg'.ucFirst()).toBe('My Name Is Izukerberg ');
  });
  test('In the case of empty string', function() {
    expect(''.ucFirst()).toBeFalsy();
  });
  test('In the case of non string input', function() {
    expect('327261'.ucFirst()).toBe('327261 ');
  });
  test('In the case of: mY NamE is izuKer-BerG', function() {
    expect('mY NamE98 is izuKer-BerG'.ucFirst()).toBe(
      'My Name98 Is Izuker-berg '
    );
  });
});

describe('Returns each letter in the string as an inverse of its current case', function() {
  test('for the case of Izukerberg.', function() {
    expect('Mr. Izu iS A progRammeR'.inverseCase()).toBe(
      'mR. iZU Is a PROGrAMMEr'
    );
  });
  test('for the case of new line input.', function() {
    expect('\n'.inverseCase()).toBeFalsy();
  });
});

describe('Returns the letters in alternating cases. It must start with a lower case ', function() {
  test('for the case of Izukerberg.', function() {
    expect('Izukerberg'.alternatingCase()).toBe('iZuKeRbErG');
  });
  test('for the case of Izuke670rbergE.', function() {
    expect('Izuke670rbergE'.alternatingCase()).toBe('iZuKe670RbErGe');
  });
  test('for the case of new line input.', function() {
    expect('\n'.alternatingCase()).toBeFalsy();
  });
});
