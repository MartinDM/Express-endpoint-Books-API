const express = require('express');
const booksController = require('../controllers/booksController');

function routes(Book){

    const bookRouter = express.Router();
    const controller = booksController(Book);
    
    // Separated out for unit testing
    bookRouter.route('/books')
      .post(controller.post)
      .get(controller.get);

     // Middleware before passing on to other route handlers
     bookRouter.use('/books/:bookId', (req, res, next) => {
        Book.findById( req.params.bookId, (err, book) => {
            if (err) {
                console.log('error!');
                return res.send(err)
            }
            if(book){
                console.log('its ok!');
                // Add book to the object on request
                req.book = book;
                return next();
            }
            return res.sendStatus(404);
        });
    })

    bookRouter.route('/books/:bookId')
    .get((req, res) => {
        console.log(req.book);
       const returnBook = req.book.toJSON();
       const genre = req.book.genre.replace(' ', '%20');
       returnBook.links = {}
       returnBook.links.FilterByThisGenre = `http://${req.headers.host}/api/books/?genre=${genre}`;
       return res.json(returnBook)
    })
    .put( (req, res) => {
        const { book } = req;
        // Found the id, update the entry
        book.title = req.body.title;
        book.genre = req.body.genre;
        book.author = req.body.author;
        book.read = req.body.read;
        req.book.save( (err) => {
            if (err) {
                return res.send(err);
            }
            return res.json(book);
        })
    })
    .patch( (req, res) => {
        // Book already on the request
        const { book } = req;
        if (req.body._id) {
            delete req.body._id;
        }
        Object.entries( req.body ).forEach( item => {
            const key = item[0];
            const value = item[1];
            book[key] = value; 
        })
        // Re-save it
        req.book.save( (err) => {
            if (err) {
                return res.send(err);
            }
            return res.json(book);
        })
    })
    .delete( (req, res) => {
        req.book.remove( (err) => {
            if(err){
                res.send(err);
            }
            // 'Removed' status
            res.sendStatus(204)
        })
    })

    return bookRouter;
}

module.exports = routes;