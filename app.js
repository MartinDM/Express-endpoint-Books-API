const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const stripe = require('stripe')(process.env.SK);
// Secret Key from Stripe dashboard

const app = express();
const port = process.env.PORT || 3000;

// Body-parser adds request to req.body
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.server = app.listen(port, () => {
  // Returns the server which is listening
    console.log(`Running on ${port}`);
});

app.post('/intents', async (req, res) => {
  console.log(req.body);
  const { amount, currency } = req.body; 
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
    payment_method_types: ['card']
  });
  res.json(paymentIntent);
});

module.exports = app;