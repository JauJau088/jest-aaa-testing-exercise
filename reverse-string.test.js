const reverseString = require("./reverse-string")

test('Reverse "abcdef" --> "fedcba"', () => {
  expect(reverseString('abcdef'))
    .toBe('fedcba');
});

test('Reverse "abc_0 def" --> "fed 0_cba"', () => {
  expect(reverseString('abc_0 def'))
    .toBe('fed 0_cba');
});
