
import CreateContact from './createcontact'
import { useState } from "react";


const ContactForm = () =>{
    const [msg, setMsg] = useState('');

    const trigger = (data) => {
        setMsg(data);
    }

    return (

        <div className="row">
            <div className="col-md-3">
                <CreateContact trigger={trigger} />
            </div>
            
            </div>
        
    )







}

export default ContactForm