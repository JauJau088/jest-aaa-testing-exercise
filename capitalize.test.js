const capitalize = require('./capitalize');

test('Properly capitalize the first letter', () => {
  expect(capitalize('abcdefg'))
    .toBe('Abcdefg');
});
