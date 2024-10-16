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

  test('should multiply two numbers', () => {
    const numbersTestCases = [
      {
        a: 1,
        b: 2,
        action: Action.Multiply
      },
      {
        a: 10,
        b: 3,
        action: Action.Multiply
      },
      {
        a: -2,
        b: 4,
        action: Action.Multiply
      },
      {
        a: 4,
        b: 27,
        action: Action.Multiply
      },
      {
        a: 13,
        b: 9,
        action: Action.Multiply
      },
      {
        a: 8,
        b: 4,
        action: Action.Multiply
      },
    ];
    numbersTestCases.forEach(({a, b, action}) => {
      const result = simpleCalculator({a, b, action});
      return expect(result).toBe(a * b);
    })
  });

  test('should divide two numbers', () => {
    const numbersTestCases = [
      {
        a: 1,
        b: 2,
        action: Action.Divide
      },
      {
        a: 10,
        b: 3,
        action: Action.Divide
      },
      {
        a: -2,
        b: 4,
        action: Action.Divide
      },
      {
        a: 4,
        b: 27,
        action: Action.Divide
      },
      {
        a: 13,
        b: 9,
        action: Action.Divide
      },
      {
        a: 8,
        b: 4,
        action: Action.Divide
      },
    ];
    numbersTestCases.forEach(({a, b, action}) => {
      const result = simpleCalculator({a, b, action});
      return expect(result).toBe(a / b);
    })
  });

  test('should exponentiate two numbers', () => {
    const numbersTestCases = [
      {
        a: 1,
        b: 2,
        action: Action.Exponentiate
      },
      {
        a: 10,
        b: 3,
        action: Action.Exponentiate
      },
      {
        a: -2,
        b: 4,
        action: Action.Exponentiate
      },
      {
        a: 4,
        b: 27,
        action: Action.Exponentiate
      },
      {
        a: 13,
        b: 9,
        action: Action.Exponentiate
      },
      {
        a: 8,
        b: 4,
        action: Action.Exponentiate
      },
    ];
    numbersTestCases.forEach(({a, b, action}) => {
      const result = simpleCalculator({a, b, action});
      return expect(result).toBe(a ** b);
    })
  });

  test('should return null for invalid action', () => {
    const numbersTestCases = [
      {
        a: 1,
        b: 2,
        action: '%'
      },
      {
        a: 10,
        b: 3,
        action: '//'
      },
      {
        a: -2,
        b: 4,
        action: '++'
      },
      {
        a: 4,
        b: 27,
        action: '--'
      },
      {
        a: 13,
        b: 9,
        action: '/\\/'
      },
      {
        a: 8,
        b: 4,
        action: '#'
      },
    ];
    numbersTestCases.forEach(({a, b, action}) => {
      const result = simpleCalculator({a, b, action});
      return expect(result).toBeNull();
    })
  });

  test('should return null for invalid arguments', () => {
    const numbersTestCases = [
      {
        a: '10',
        b: 5,
        action: Action.Subtract
      },
      {
        a: 20,
        b: '7',
        action: Action.Subtract
      },
      {
        a: null,
        b: 8,
        action: Action.Subtract
      },
      {
        a: undefined,
        b: 2,
        action: Action.Subtract
      },
      {
        a: true,
        b: 6,
        action: Action.Subtract
      },
      {
        a: '5',
        b: 3,
        action: Action.Multiply
      },
      {
        a: 2,
        b: '4',
        action: Action.Multiply
      },
      {
        a: null,
        b: 9,
        action: Action.Multiply
      },
      {
        a: undefined,
        b: 2,
        action: Action.Multiply
      },
      {
        a: [],
        b: 4,
        action: Action.Multiply
      },
      {
        a: '20',
        b: 5,
        action: Action.Divide
      },
      {
        a: 15,
        b: '3',
        action: Action.Divide
      },
      {
        a: null,
        b: 7,
        action: Action.Divide
      },
      {
        a: undefined,
        b: 1,
        action: Action.Divide
      },
      {
        a: {},
        b: 5,
        action: Action.Divide
      },
      {
        a: '3',
        b: 2,
        action: Action.Exponentiate
      },
      {
        a: 5,
        b: '3',
        action: Action.Exponentiate
      },
      {
        a: null,
        b: 4,
        action: Action.Exponentiate
      },
      {
        a: undefined,
        b: 2,
        action: Action.Exponentiate
      },
      {
        a: Symbol(),
        b: 3,
        action: Action.Exponentiate
      },
    ];
    
    numbersTestCases.forEach(({a, b, action}) => {
      const result = simpleCalculator({a, b, action});
      return expect(result).toBeNull();
    })
  });
});
