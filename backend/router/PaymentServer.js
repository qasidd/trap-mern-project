const stripe = require('stripe')('pk_test_51IQCoXLkbOx0gq9RTzFXzEKFOhDnWUqOA8mtbrQPoOixCTUSUzsqldQLcdpsOzTM0DSGwxSoey80OTGF8AjSFnHI00Ay4P4Qlb');
const express = require('express');
const app = express();
app.use(express.static('.'));

const cinemaDomain = 'http://localhost:5019';

app.post('/create-payment-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'gbp',
                    booking_data: {
                        filmName: 'The WaterBoy'

                    },
                    unit_amount: 2500,
                },
                quantity: 1,
            },
        ],
        mode: 'payment'
    });

    res.json({ id: session.id });
});

app.listen(5019, () => console.log('Running on port 5019'));