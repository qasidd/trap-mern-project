import axios from 'axios';
import { useState } from "react";
import { useEffect } from 'react';
import Checkout from './Checkout';
import { CardLink, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51IQCoXLkbOx0gq9RTzFXzEKFOhDnWUqOA8mtbrQPoOixCTUSUzsqldQLcdpsOzTM0DSGwxSoey80OTGF8AjSFnHI00Ay4P4Qlb");



//Card Submit button

const SubmitPayProcess = () => {
    const [data, setData] = useState("");

    const [showModal, setShowModal] = useState(false);
    const toggle = () => setShowModal(!showModal);


    const Process = ({ handleClick }) => (
        <section>
            <div className="booking">
                <div className="bill-description">
                    <h3>The Waterboy</h3>
                    <h5>£25.00</h5>
                </div>
            </div>
            <button type="button" id="payButton" className="btn btn-outline-success" onClick={handleClick}>Please Pay Now</button>
        </section>

    );

    useEffect(() => {
        const payQuery = new URLSearchParams(window.location.search);

        if (payQuery.get("success")) {
            setData(" Your booking is placed! We will email you an email confirmation.");
        }

        if (payQuery.get("canceled")) {
            setData(
                "Booking is canceled -- please continue your search and continue when you are ready"
            );

        }
    }, []);

    const handleClick = async (event) =>{
        const stripe = await stripePromise;

        const response = await fetch("/create-payment-checkout-session", {
            method: "POST",
        });

        const session = await response.json();

        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
          });

          if (result.error) {
    
          }
        };   

      

}
export default SubmitPayProcess; 