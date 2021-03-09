import queryString from 'query-string';
import axios from 'axios';
import { BOOKING_URL } from '../CONSTS.json';
import { useState, useEffect } from 'react';
import PaymentSuccessBookingDetails from './PaymentSuccessBookingDetails';

const PaymentSuccess = (props) => {

    const [booking, setBooking] = useState(null);

    useEffect(() => {
        const bookingId = queryString.parse(props.location.search)._id;
        axios.patch(`${BOOKING_URL}/update/${bookingId}`, { paymentsuccess: true })
            .then((res) => {
                setBooking(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    if (booking === null) {
        return (
            <div className="mainContent container">
                <h1 className="dispaly-4">Booking successful!</h1>
            </div>
        );
    }

    return (
        <div className="mainContent container">
            <h1 className="dispaly-4"><span>&#10003;</span> Booking successful!</h1>
            <p>You are now booked to see {booking.movie_title} on {booking.screening}.</p>
            <PaymentSuccessBookingDetails booking={booking} />
        </div>
    );
}

export default PaymentSuccess;