import CreateContact from './createcontact'
import { useState } from "react";

const ContactForm = () => {
    const [msg, setMsg] = useState('');

    const trigger = (data) => {
        setMsg(data);
    }

    return (
        <div className="container mainContent">
            <h1 className="display-4 mb-3">Contact Us</h1>
            <div className="row">
                <div className="col-6">
                    <h5>Address</h5>
                    <p className="mb-0"> 8, St James's Building</p>
                    <p className="mb-0">61-95 Oxford St</p>
                    <p>Manchester M1 6FQ</p>
                </div>
                <div className="col-6">
                    <h5>Contact number</h5>
                    <p>Phone: 0845 757 3888</p>
                </div>
            </div>
            <p>Please use the form below if you would like to contact our UK Head Office.
             By completing this form you consent to us contacting you related to this enquiry.</p>

            <CreateContact trigger={trigger} />
        </div>

    )
}

export default ContactForm