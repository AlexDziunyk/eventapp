const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


router.get('/config', async (req, res) => {
  return res.send({ publishableKey: process.env.STRIPE_SECRET_KEY });
});

router.post('/create-payment-intent', async (req, res) => {
  const { price } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "usd",
      amount: price * 100,
      automatic_payment_methods: {
        enabled: true
      }
    });

    res.send({ clientSecret: paymentIntent.client_secret });

  } catch (error) {
    console.log(error)
    return res.status(400).send({
      error: {
        message: error.message
      }
    })
  }

});


module.exports = router;
