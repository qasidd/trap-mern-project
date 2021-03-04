import axios from "axios";
import { CardLink } from "reactstrap";
import { Forum_URL } from '../CONSTS.json';

const DeletePost = ({ del, trigger }) => {

    const remove = () => {
        axios.delete(`${Forum_URL}/delete/${del}`)
            .then((res) => {
                trigger("Successfully Deleted!")
            })
            .catch((err) => {
                trigger("Error Removing Object");
            })
    }

    return (
        <CardLink className="btn btn-outline-danger" onClick={remove}>X </CardLink>
    )
}
export default DeletePost; 
