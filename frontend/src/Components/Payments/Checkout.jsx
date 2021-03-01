import react from 'react';
import { useState } from "react";


const Checkout = ({ handleClick }) => {

    return (
        <section>
            <div className="Checkout Information">
                <title> Make the payment to confirm your booking </title>
            </div>
            <button type="button" id="checkoutButton" onClick={handleClick}>Checkout</button>
        </section>

    )

}

export default Checkout;