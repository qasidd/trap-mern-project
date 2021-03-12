import { Table } from 'reactstrap';

const PaymentSuccessBookingDetails = ({ booking }) => {
    console.log(booking.concessions);

    return (
        <>
            <h4 className="mb-3">Booking details</h4>
            <Table hover>
                <tbody>
                    <tr>
                        <th scope="row">Booking ID:</th>
                        <td>{booking._id}</td>
                    </tr>
                    <tr>
                        <th scope="row">Name on booking:</th>
                        <td>{booking.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Movie:</th>
                        <td>{booking.movie_title}</td>
                    </tr>
                    <tr>
                        <th scope="row">Screening:</th>
                        <td>{booking.screening}</td>
                    </tr>
                    <tr>
                        <th scope="row">Deluxe:</th>
                        <td>{booking.deluxe ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                        <th scope="row">Number of seats:</th>
                        <td>{booking.nofseats}</td>
                    </tr>
                    {
                        booking.concessions.map((con, i) => (
                            <tr>
                                <th scope="row">Concession {i+1}:</th>
                                <td>{con.type}, {con.size}, {con.quantity}</td>
                            </tr>
                        ))
                    }
                    <tr>
                        <th scope="row">Total:</th>
                        <td>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'GBP' }).format(booking.total)}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
};

export default PaymentSuccessBookingDetails;