import queryString from 'query-string';

const PaymentSuccess = (props) => {

    const bookingId = queryString.parse(props.location.search)._id;

    return (
        <div className="mainContent container">
            <h1 className="dispaly-4">Booking failed...</h1>
            <p>Unforunately, payment for booking #{bookingId} has been unsuccessful. Don't worry, you have not been charged.</p>
        </div>
    )
}

export default PaymentSuccess;