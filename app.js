const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.SK);

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

app.post('/intents', async (req, res) => {
  console.log(req.body)
  const { amount, currency } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
    payment_method_types: ['card']
  });
  res.send(paymentIntent);
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
