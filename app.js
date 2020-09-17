const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();
const app = express();
if ( process.env.ENV == 'Dev') {
  console.log('Dev mode');
  // mongoose.connect returns promise
  const db = mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true })
                      .catch(error => handleError(error));
} else {
  console.log('Prod mode');
  const db = mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true })
                      .catch(error => handleError(error));
}
 
const handleError = (err) => console.log(err); 
const port = process.env.PORT || 3000;

mongoose.connection.on('error', err => {
  handleError(err); 
}); 

// Books API
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book); 

// Body-parser adds request to req.body
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()); 
app.use('/api', bookRouter); 

app.server = app.listen(port, () => {
  // Returns the server which is listening
  console.log(`Running on ${port}`);
});

module.exports = app;