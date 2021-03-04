const CreateContact = () =>{
 // states for form
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [subject, setSubject] = useState('');
 const [message, setMessage] = useState('');

 


 const create = (e) => {
     e.preventDefault(); 
     axios.post(`${Forum_URL}/create`, {name,email,subject,message})
         .then((res) => {
             // console.log(res.data);
             clearValues();
             trigger(res.data);
         }).catch((err) => {
             trigger(err.data);
         })
 }

 const clearValues = () => {
     setName('');
     setEmail('');
     setSubject('');
     setMessage('');
 }








return(<>
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