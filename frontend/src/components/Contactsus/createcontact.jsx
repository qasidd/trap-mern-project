import { Card, CardBody, CardTitle } from "reactstrap"
import axios from "axios";
import { useState } from "react";
import { CONTACT_URL } from '../CONSTS.json'

const CreateContact = ({ trigger }) => {
    // states for form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const SubmitEmail = (e) => {
        e.preventDefault();
        axios.post(`${CONTACT_URL}/sendemail`, { name, email, subject, message })
            .then((response) => {
                if (response.data.status === 'success') {
                    alert("Message Sent.");
                    this.resetForm();
                } else if (response.data.status === 'fail') {
                    alert("Message failed to send.")
                }
            })
            .catch((err) => { console.log(err) })
    }

    const ClearValues = () => {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    return (<>
        <Card>
            <CardBody>
                <CardTitle>Contact us Form</CardTitle>
                <form onSubmit={SubmitEmail} id="contact-form" method="post" role="form">
                    <div className="row form-group">
                        <div className="col-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Full name"
                                value={name}
                                onChange={({ target }) => setName(target.value)}
                                required
                            />
                        </div>
                        <div className="col-6">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={email}
                                onChange={({ target }) => setEmail(target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            value={subject}
                            onChange={({ target }) => setSubject(target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            placeholder="Message"
                            rows="12" cols="35"
                            value={message}
                            onChange={({ target }) => setMessage(target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group row">
                        <div className="col-6">
                        <button type="submit" className="btn btn-outline-success w-100">Send</button>
                        </div>
                        <div className="col-6">
                        <button type="reset" className="btn btn-outline-warning w-100" onClick={ClearValues} >Clear</button>
                        </div>
                    </div>
                </form>
            </CardBody>
        </Card>


    </>
    )
}

export default CreateContact