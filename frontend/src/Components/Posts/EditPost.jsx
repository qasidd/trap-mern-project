import axios from 'axios';
import { useState } from 'react';
import { CardLink, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Forum_URL } from '../CONSTS.json';
const EditPost = ({ post, trigger }) => {

    // Data from DB
    const { username, movietitle, comment,created } = post;
    const [updateUsername, setUUsername] = useState(username);
    const [updateMovietitle, setUMovietitle] = useState(movietitle);
    const [updateComment, setUComment] = useState(comment);
    const [updateCreated, setUCreated] = useState(created);
    // Modal
    const [showModal, setShowModal] = useState(false);
    const toggle = () => setShowModal(!showModal);

    // function to updateDB
    const updateDatabase = (e) => {
        e.preventDefault();
        axios.patch(`${Forum_URL}/update/${post._id}`,
            { username: updateUsername, movietitle: updateMovietitle, comment: updateComment,created:updateCreated})
            .then((res) => {
                trigger(res.data);
                toggle();
            })
            .catch((err)=>{
                trigger(err.data);
            })
    }

    return (
        <>
            <CardLink className="btn btn-outline-warning" onClick={toggle}>EDIT </CardLink>
            <Modal isOpen={showModal}>
                <ModalHeader>{post.username}</ModalHeader>
                <form>
                    <ModalBody>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            value={updateUsername}
                            onChange={({ target }) => setUUsername(target.value)}
                        />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Movietitle"
                            value={updateMovietitle}
                            onChange={({ target }) => setUMovietitle(target.value)}
                        />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Comment"
                            value={updateComment}
                            onChange={({ target }) => setUComment(target.value)}
                        />
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Created"
                            value={updateCreated}
                            onChange={({ target }) => setUCreated(target.value)}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={() => toggle} className="btn btn-outline-danger">Cancel</button>
                        <button onSubmit={updateDatabase}type="submit" className="btn btn-outline-success">Update</button>
                    </ModalFooter>
                </form>
            </Modal>
        </>
    );
}
export default EditPost; 