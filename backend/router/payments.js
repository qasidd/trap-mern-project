const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const router = require('express').Router();

const cinemaDomain = 'http://localhost:3000';

router.post('/create-checkout-session', async (req, res) => {
    const bookingData = req.body;
    console.log(bookingData.total);
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'gbp',
                    product_data: {
                        name: `${bookingData.movie_title} at ${bookingData.screening}`,
                        images: [bookingData.poster],
                        metadata: {
                            "Screening": bookingData.screening,
                            "Deluxe": bookingData.deluxe ? "Yes" : "No",
                            "Number of seats": bookingData.nofseats
                        }
                      },
                      unit_amount: (bookingData.total * 100).toFixed(0),
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${cinemaDomain}/new-booking/success?_id=${bookingData._id}`,
        cancel_url: `${cinemaDomain}/new-booking/cancelled?_id=${bookingData._id}`
    });

    res.json({ id: session.id, bookingId: bookingData._id });
});

module.exports = router;