import { Card, CardBody, CardTitle } from "reactstrap"
import axios from "axios";
import { useState } from "react";



const CreateContact = ({trigger}) =>{
 // states for form
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [subject, setSubject] = useState('');
 const [message, setMessage] = useState('');

 


 

 const ClearValues = () => {
     setName('');
     setEmail('');
     setSubject('');
     setMessage('');
 }








return(<>
    <Card>
<CardBody>
<CardTitle>Contact us Form</CardTitle>
<form action="mailto:WTahir@qa.com&subject:{subject}" method="get" enctype="text/plain">
<input 
                                type="text" 
                                className="form-control" 
                                placeholder="Fullname"
                                value={name}
                                onChange={({target}) => setName(target.value)}
                            />
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Email"
                                value={email}
                                onChange={({target}) => setEmail(target.value)}
                            />
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Subject"
                                value={subject}
                                onChange={({target}) => setSubject(target.value)}
                            />
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Message"
                                value={message}
                                onChange={({target}) => setMessage(target.value)}
                            />
                            
                            <br/>
                            <button type="submit" className="btn btn-outline-success col-md-12">Send</button>
                            <button type="reset" className="btn btn-outline-success col-md-12" onClick= {ClearValues} >Clear</button>
                        </form>










</CardBody>
    </Card>
    
    
    </>
)



}
export default CreateContact