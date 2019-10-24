require('should');

const request = require('supertest');
const mongoose = require('mongoose');

process.env.ENV = 'Test';
const app = require('../app');
const Book = mongoose.model('Book');
const agent = request.agent(app);

// BDD style
describe(`Book 'CRUD' test`, () => {
  
  it('should allow a book to be posted and return read and _id properties', (done) => {
    const bookPost = {title: 'Book title', author: 'Martin' }
    agent.post('/api/books')
      .send(bookPost)
      .expect(200)
      .end( (error, results) => {
        results.body.read.should.not.equal(true)
        results.body.should.have.property('_id');
        // Completes the test for Supertest and Mocha
        done();
      })
  })

  // Clean test entries from DB. Runs after each test.
  afterEach( (done) => {
    Book.deleteMany({}).exec();
    done();
  })

  // Close mongoose connection
  after( (done) => {
    mongoose.connection.close();
    // Close the app's connection
    // Server is a method on app.server
    app.server.close( (done() ))
  });

})