const { describe } = require("mocha");
const sinon = require("sinon");
const authenticate = require("./authenticate");
const { tokens } = require("../models/user");
const { use, expect } = require("chai");
const sinonChai = require("sinon-chai");

use(sinonChai)

describe('authenticate middleware', () => {

  describe('with valid token', () => {
    beforeEach(() => {
      tokens.push('ABC123');
    });

    afterEach(() => {
      tokens.pop(); // remove 'ABC123'
    })

    it('should call next', () => {
      // Arrange
      const req = {
        headers: {
          authorization: 'Bearer ABC123',
        }
      };
      const res = {};
      const next = sinon.spy();

      // Act
      authenticate(req, res, next);

      // Assert
      expect(next).to.have.been.calledWithExactly();
    });
  })

  // Exercice 1
  // Couvrir la 2e branche de authenticate
  // où on ne passe pas dans le if
  // (si le token est invalide la réponse doit etre 401 avec le message Unauthorized)

  it('should call next', () => {
    // Arrange
    const req = {
      headers: {
        authorization: 'Bearer ZYX3454',
      }
    };
    const res = {
      json: sinon.spy(),
    };
    const next = () => {};

    // Act
    authenticate(req, res, next);

    // Assert
    expect(res.statusCode).to.equal(401);
    expect(res.json).to.have.been.calledWithExactly({
      msg: 'Unauthorized',
    });
  });
})
