const { it, describe } = require("mocha");
const { list } = require("./todo");
const chai = require("chai");
const sinonChai = require("sinon-chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const Todo = require('../models/todo');
const app = require('../app');

const expect = chai.expect;

chai.use(sinonChai)
chai.use(chaiHttp)

describe('routes todos', () => {

  describe('GET /api/todos', () => {

    it('should return status 200 with data from database', async () => {
      // Arrange
      const req = chai.request(app).get('/api/todos');
      sinon.mock(Todo).expects('find').resolves([{id: 1, title: 'ABC'}]);

      // Act
      const res = await req

      // Assert
      expect(res).to.have.status(200);
      expect(res.body).to.deep.equal([{id: 1, title: 'ABC'}]);
    })

  })


  // Exercice 2
  // En vous inspirant du test ci-dessus
  // tester la route GET /api/todos/1
  // (status 200)
  // (findById mocké appelé avec "1")
  // (res.body deep equal le resolve du mock)
})
