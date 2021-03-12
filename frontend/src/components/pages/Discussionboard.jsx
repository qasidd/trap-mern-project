import CreatePost from "../Sidebar/CreatePost"
import { useState } from 'react';
import ReadPost from "../Posts/ReadPost";

const Discussionboard = () => {

    const [msg, setMsg] = useState('');

    const trigger = (data) => {
        setMsg(data);
    }

    return (
        <div className="container mainContent">
            <h1 className="display-4 mb-4">Discussion Board</h1>
            <div className="row">
                <div className="col-md-3">
                    <CreatePost trigger={trigger} />
                </div>
                <div className="col-md-9">
                    <div className="alert alert-success">{msg}</div>
                    <ReadPost msg={msg} trigger={trigger} />
                </div>
            </div>
        </div>
    )
}
export default Discussionboard;