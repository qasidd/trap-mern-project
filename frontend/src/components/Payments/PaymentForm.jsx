import { useState } from "react";
import { useEffect } from 'react';
import Checkout from './Checkout';
import { CardLink, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51IQCoXLkbOx0gq9RTzFXzEKFOhDnWUqOA8mtbrQPoOixCTUSUzsqldQLcdpsOzTM0DSGwxSoey80OTGF8AjSFnHI00Ay4P4Qlb");

const SubmitPayment = ({ handleClick }) => (
    <section>
        <div className="booking">
            <div className="description">
                <h3>The Waterboy</h3>
                <h4>£25.00</h4>
            </div>
        </div>
        <button type="button" id="checkout-button" role="link" className="btn btn-outline-success" onClick={handleClick}>
            Checkout
      </button>
    </section>
);
const Message = ({ message }) => (
    <section>
        <p>{message}</p>
    </section>
);
export default function App() {
    const [message, setMessage] = useState("");
    useEffect(() => {

        const query = new URLSearchParams(window.location.search);
        if (query.get("success")) {
            setMessage("Your Booking has been confirmed in our system! You will receive an email confirmation in the next 5 minutes.");
        }
        if (query.get("canceled")) {
            setMessage(
                "Booking canceled -- please continue to look for a film shop and checkout when you're ready."
            );
        }
    }, []);
    const handleClick = async (event) => {
        const stripe = await stripePromise;
        const response = await fetch("/create-checkout-session", {
            method: "POST",
        });
        const session = await response.json();

        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });
        if (result.error) {

        }
    };
    return message ? (
        <Message message={message} />
    ) : (
        <SubmitPayment handleClick={handleClick} />
    );
}