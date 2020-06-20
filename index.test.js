const assert = require('assert');
const sum = require('./index');

describe('function sum', () => {
  it('should sum 2 numbers', () => {
    assert.strictEqual(sum(1, 2), 3);
  });
});
