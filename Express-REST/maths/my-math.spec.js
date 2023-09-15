const { describe, it, beforeEach } = require("mocha");
const { sum } = require("./my-math");
const { expect } = require('chai');

describe('my-math.js', () => {

  describe('sum function', () => {
    beforeEach(() => {

    })

    it('should add 2 positives integers', () => {
      // Arrange
      const nb1 = 1;
      const nb2 = 2;

      // Act
      const result = sum(nb1, nb2);

      // Assert
      expect(result).to.equal(3);
    });

  });



});
