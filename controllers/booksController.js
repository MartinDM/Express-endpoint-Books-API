function booksController(Book) {


  function get(req, res) {
    console.log('list all books here')
    const query = {};
    if( req.query.genre ) {
        query.genre = req.query.genre;
    }
    Book.find( query, (err, books) => {
        if (err) {
            return res.send(err)
        }
        const returnedBooks = books.map( (book) => {
          const newBook = book.toJSON();
          newBook.links = {};
          // Provide a link to the id of the book result
          newBook.links.self = `http://${req.headers.host}/api/books/${book._id}`;
          return newBook;
        });
        return res.json(returnedBooks);
    });
  };
  // Expose these functions to the app
  return { get };
}

module.exports = booksController;