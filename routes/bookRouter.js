const express = require('express');
const booksController = require('../controllers/booksController');

function routes(Book){

    const bookRouter = express.Router();
    const controller = booksController(Book);
    
    // Separated out for unit testing
    // Tell express Router how to handle GET and POSTs from the controller above
    bookRouter.route('/')
      .get(controller.get);

     // Middleware before passing on to other route handlers
     bookRouter.use('/:bookId', (req, res, next) => {
        Book.findById( req.params.bookId, (err, book) => {
            if (err) {
                return res.send(err)
            }
            if(book){
                // Add book to the object on request
                req.book = book;
                return next();
            }
            return res.sendStatus(404);
        });
    })

    return bookRouter;
}

module.exports = routes;