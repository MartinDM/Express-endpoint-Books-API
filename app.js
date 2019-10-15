const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

if ( process.env.ENV == 'Test') {
  console.log('Dev');
  const db = mongoose.connect('mongodb://localhost/books', { useNewUrlParser: true, useUnifiedTopology: true });
} else {
  console.log('Prod');
  const db = mongoose.connect('mongodb://localhost/bookAPIProd', { useNewUrlParser: true, useUnifiedTopology: true });
}

const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');

const bookRouter = require('./routes/bookRouter')(Book);

// Body-parser adds request to req.body
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the de API');
});

app.server = app.listen(port, () => {
  // Returns the server which is listening
    console.log(`Running on ${port}`);
});

module.exports = app;
