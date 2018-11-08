var expect = require('chai').expect;

// Run 'npm install -g mocha'

const addNumbers = require('../numeric.js').addNumbers;
const multiplyNumbers = require('../numeric.js').multiplyNumbers;
const subtractNumbers = require('../numeric.js').subtractNumbers;

describe('Add', () => {
  it('can add numbers', () => {
      // Arrange
      let x = 2, y = 3, sum = 5;

      // Act
      let result = addNumbers(x, y);

      // Assert
      expect(result).to.equal(sum)
  });
});

describe('Multiply', () => {
  it('can multiply numbers', () => {
      // Arrange
      let x = 2, y = 3, product = 6;

      // Act
      let result = multiplyNumbers(x, y);

      // Assert
      expect(result).to.equal(product)
  });
});

describe('Subtract', () => {
  it('can multiply numbers', () => {
      // Arrange
      let x = 3, y = 2, difference = 1;

      // Act
      let result = subtractNumbers(x, y);

      // Assert
      expect(result).to.equal(difference)
  });
});