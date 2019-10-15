const should = require('should');
const sinon = require('sinon');
const bookController = require('../controllers/booksController');

// Unit test
describe('Book controller test', () => {
  describe('Post', () => {
    it('should not allow an empty title when creating a book on POST', () => {
      // Creating a mock Book object
      // Dpoesn't require a 'shape' or 'type', just a function.
      const Book = function(book){
        this.save = () => {}
      };
      
      const req = {
        body: {
          author: 'Martin'
        }
      };

      const res = {
        status: sinon.spy(),
        send: sinon.spy(),
        json: sinon.spy()
      }

      const controller = bookController(Book);
      controller.post(req, res);
      // res.status.args is an array of each time it's called
      res.status.calledWith(400).should.equal(true, `Bad status ${res.status.args[0][0]}`);
      res.send.calledWith('Title is required').should.equal(true);
    })
  })
});