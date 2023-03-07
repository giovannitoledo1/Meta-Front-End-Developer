const { default: TestRunner } = require('jest-runner');
const addFive = require('./addFive'); //./ is to indicate the addFive funtion is in the same folder as a test file. 

test('returns the number plus 5', () => {
    expect(addFive(1)).toBe(6);
})