// Uncomment the code below and write your tests
import {  simpleCalculator, Action } from './index';

const testCases: { a:number, b:number, action: string, expected: number }[] = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },   
];

describe('simpleCalculator', () => {
  test.each(testCases)('Should work like table jest api', ({ a, b, action, expected }) => {
    expect(simpleCalculator({ a, b, action })).toBe(expected);
  })
});
