import CreateContact from './createcontact'
import { useState } from "react";

const ContactForm = () => {
    const [msg, setMsg] = useState('');

    const trigger = (data) => {
        setMsg(data);
    }

    return (
        <>
            <div>
                <h5>Address</h5>
                <p> 8, St James's Bldg, 61-95 Oxford St, Manchester M1 6FQ</p>
                <h5><em>Contact number</em></h5>
                <p>Phone: 0845 757 3888</p>

                <p>Please use the form below if you would like to contact our UK Head Office.
             By completing this form you consent to us contacting you related to this enquiry.</p>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <CreateContact trigger={trigger} />
                </div>
            </div>
        </>

    )
}

export default ContactForm