import { Toast, ToastBody, ToastHeader } from "reactstrap";
import DeletePost from "./DeletePost";
import EditPost from "./EditPost";

const PostList = ({ post, trigger }) => {

    return (
        // <Card>
        <div className="p-6 my-2 rounded">
            <Toast>
                <ToastHeader>{post.username}
                </ToastHeader>
                <ToastBody style={{ height: "auto" }}>
                    {post.comment}
                    <hr />
                    <DeletePost className="float-right" del={post._id} trigger={trigger} />
                    <EditPost className="float-right" post={post} trigger={trigger} />

                </ToastBody>
            </Toast>
        </div>

    )
}
export default PostList; 
