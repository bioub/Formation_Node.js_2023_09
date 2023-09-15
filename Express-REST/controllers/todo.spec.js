const { it, describe } = require("mocha");
const { list } = require("./todo");
const { use, expect } = require("chai");
const sinonChai = require("sinon-chai");
const sinon = require("sinon");
const Todo = require('../models/todo');

use(sinonChai)

describe('todo controllers', () => {

  describe('list controller', () => {

    it('should call res.json with data from model', async () => {
      // Arrange
      const req = {};
      const res = {
        json: sinon.spy(),
      };
      const next = () => {};

      sinon.mock(Todo).expects('find').resolves([{id: 1, title: 'ABC'}]);

      // Act
      await list(req, res, next);

      // Assert
      expect(res.json).to.have.been.calledOnceWithExactly([{id: 1, title: 'ABC'}])
      sinon.verifyAndRestore()
    })

  })

})
