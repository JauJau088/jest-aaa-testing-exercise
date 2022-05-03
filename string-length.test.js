const stringLength = require('./string-length');

test('Properly count the length of the input string', () => {
  expect(stringLength('123456'))
    .toBe(6);
});

test('Throw an error if string is less than 1 char long', () => {
  expect(() => stringLength(''))
    .toThrow();
});

test('Throw an error if string is more than 10 chars long', () => {
  expect(() => stringLength('this one is 24 char long'))
    .toThrow(Error);
});
