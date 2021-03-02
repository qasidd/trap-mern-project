
import { Card, CardBody, CardTitle } from "reactstrap"
import axios from "axios";
import { useState } from "react";
import {Forum_URL} from '../CONSTS.json'

const CreatePost  = ({trigger}) => {
   
        // states for form
        const [username, setUsername] = useState('');
        const [movietitle, setMovietitle] = useState('');
        const [comment, setComment] = useState('');
        const [created, setCreated] = useState('');
        
       
    
        const create = (e) => {
            e.preventDefault(); 
            axios.post(`${Forum_URL}/create`, {username,movietitle,comment,created})
                .then((res) => {
                    // console.log(res.data);
                    clearValues();
                    trigger(res.data);
                }).catch((err) => {
                    trigger(err.data);
                })
        }
    
        const clearValues = () => {
            setUsername('');
            setMovietitle('');
            setComment('');
            setCreated('');
        }
    
        return(
            <div className="bg-light border-right" id="sidebar">
                <Card>
                    <CardBody>
                        <CardTitle>Create New Post</CardTitle>
                        <form onSubmit={create}>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Username"
                                value={username}
                                onChange={({target}) => setUsername(target.value)}
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Movietitle"
                                value={movietitle}
                                onChange={({ target }) => setMovietitle(target.value)}
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Comment"
                                value={comment}
                                onChange={({ target }) => setComment(target.value)}
                            />
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Created"
                                value={created}
                                onChange={({ target }) => setCreated(target.value)}
                            />
                            <br/>
                            <button type="submit" className="btn btn-outline-success col-md-12">Post</button>
                        </form>
                    </CardBody>
                </Card>
            </div>     
        )
    }
export default CreatePost