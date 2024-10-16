// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const numbersTestCases = [
      {
        a: 1,
        b: 2,
        action: Action.Add
      },
      {
        a: 10,
        b: 3,
        action: Action.Add
      },
      {
        a: -2,
        b: 4,
        action: Action.Add
      },
      {
        a: 4,
        b: 27,
        action: Action.Add
      },
      {
        a: 13,
        b: 9,
        action: Action.Add
      },
      {
        a: 8,
        b: 4,
        action: Action.Add
      },
    ];
    numbersTestCases.forEach(({a, b, action}) => {
      const result = simpleCalculator({a, b, action});
      return expect(result).toBe(a + b);
    })
  });

  test('should subtract two numbers', () => {
    const numbersTestCases = [
      {
        a: 1,
        b: 2,
        action: Action.Subtract
      },
      {
        a: 10,
        b: 3,
        action: Action.Subtract
      },
      {
        a: -2,
        b: 4,
        action: Action.Subtract
      },
      {
        a: 4,
        b: 27,
        action: Action.Subtract
      },
      {
        a: 13,
        b: 9,
        action: Action.Subtract
      },
      {
        a: 8,
        b: 4,
        action: Action.Subtract
      },
    ];
    numbersTestCases.forEach(({a, b, action}) => {
      const result = simpleCalculator({a, b, action});
      return expect(result).toBe(a - b);
    })
  });

  // test('should multiply two numbers', () => {
  //   // Write your test here
  // });

  // test('should divide two numbers', () => {
  //   // Write your test here
  // });

  // test('should exponentiate two numbers', () => {
  //   // Write your test here
  // });

  // test('should return null for invalid action', () => {
  //   // Write your test here
  // });

  // test('should return null for invalid arguments', () => {
  //   // Write your test here
  // });
});
