const sum = require('./lib');

test('adds 1 + 2 to equal 3', () => {
  const result1=sum.absolute(0);  
  expect(sum(1, 2)).toBe(5);
});