const stripe = require('stripe')('pk_test_51IQCoXLkbOx0gq9RTzFXzEKFOhDnWUqOA8mtbrQPoOixCTUSUzsqldQLcdpsOzTM0DSGwxSoey80OTGF8AjSFnHI00Ay4P4Qlb');
const express = require('express');
const app = express();
app.use(express.static('.'));

const cinemaDomain = 'http://localhost:5019';

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'gbp',
                    booking_data: {
                        filmName: 'The Waterboy'

                    },
                    unit_amount: 2500,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${cinemaDomain}?success=true`,
        cancel_url: `${cinemaDomain}?canceled=true`,
    });

    res.json({ id: session.id });
});

app.use(express.json());
const calculateOrderAmount = items => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "gbp"
    });
    res.send({
        clientSecret: paymentIntent.client_secret
    });
});



app.listen(5019, () => console.log('Running on port 5019'));