import { Toast, ToastBody, ToastHeader } from "reactstrap";
import DeletePost from "./DeletePost";
import EditPost from "./EditPost";

const PostList = ({ post, trigger }) => {

    return (
        // <Card>
        <div className="p-6 my-2 rounded">
            <Toast>
                <ToastHeader>{post.username}</ToastHeader>
                <ToastBody style={{ height: "auto" }}>
                    <p className="mb-1">Movie: {post.movietitle}</p>
                    <p className="mb-1">Rating: {post.rating}</p>
                    <p className="mb-1">{post.comment}</p>
                    <p>{post.created}</p>
                    <hr />
                    <br></br>
                    
                    <DeletePost className="float-right" del={post._id} trigger={trigger} />
                    <EditPost className="float-right" post={post} trigger={trigger} />

                </ToastBody>
            </Toast>
        </div>

    )
}
export default PostList; 
