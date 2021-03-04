const ContactForm = () =>{
return(
    <>
    <Card>
<CardBody>
<CardTitle>Contact us Form</CardTitle>
<form onSubmit={create}>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Fullname"
                                value={username}
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
                        </form>










</CardBody>
    </Card>
    
    
    </>

)








}

export default ContactForm