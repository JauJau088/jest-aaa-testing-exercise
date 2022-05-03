const Calculator = require("./calculator")

const calc = new Calculator;

describe('Calculator class methods tests:', () => {  
  test('Addition', () => {
    expect(calc.add(1, 1))
      .toBe(2);
  });

  test('Subtraction', () => {
    expect(calc.subtract(0, 1))
      .toBe(-1);
  });
  
  test('Multiplication', () => {
    expect(calc.multiply(2, 7))
      .toBe(14);
  });

  test('Division', () => {
    expect(calc.divide(36, 6))
      .toBe(6);
  });
});
