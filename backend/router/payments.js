// const stripe = require('stripe')('pk_test_51IQCoXLkbOx0gq9RTzFXzEKFOhDnWUqOA8mtbrQPoOixCTUSUzsqldQLcdpsOzTM0DSGwxSoey80OTGF8AjSFnHI00Ay4P4Qlb');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const router = require('express').Router();

const cinemaDomain = 'http://localhost:3000';

router.post('/create-checkout-session', async (req, res) => {
    const orderData = req.body;
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'gbp',
                    product_data: {
                        name: `${orderData.movie_title} at ${orderData.screening}`,
                        images: [orderData.poster],
                        metadata: {
                            "Screening": orderData.screening,
                            "Deluxe": orderData.deluxe ? "Yes" : "No",
                            "Number of seats": orderData.nofseats
                            // "Concessions": [...JSON.stringify(orderData.concessions)]
                        }
                      },
                      unit_amount: orderData.total * 100,
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

// const calculateOrderAmount = items => {
//     // Replace this constant with a calculation of the order's amount
//     // Calculate the order total on the server to prevent
//     // people from directly manipulating the amount on the client
//     return 1400;
// };

// router.post("/create-payment-intent", async (req, res) => {
//     const { items } = req.body;
//     // Create a PaymentIntent with the order amount and currency
//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: calculateOrderAmount(items),
//         currency: "gbp"
//     });
//     res.send({
//         clientSecret: paymentIntent.client_secret
//     });
// });

// app.listen(5019, () => console.log('Running on port 5019'));
module.exports = router;