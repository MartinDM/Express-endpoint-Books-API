const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

if ( process.env.ENV == 'Test') {
  console.log('Dev');
  const db = mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds137008.mlab.com:37008/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });
} else {
  console.log('Prod');
  const db = mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds137008.mlab.com:37008/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });
}

const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

// Body-parser adds request to req.body
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the books API!');
});

app.server = app.listen(port, () => {
  // Returns the server which is listening
    console.log(`Running on ${port}`);
});

module.exports = app;
