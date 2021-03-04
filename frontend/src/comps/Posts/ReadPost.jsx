import axios from 'axios';
import { useState, useEffect } from 'react';
import { Spinner } from 'reactstrap';
import { Forum_URL } from '../CONSTS.json';
import PostList from './ListPost';
const ReadPost = ({ msg , trigger}) => {

    // states
    const [postList, setPostList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');

    // useEffect -> triggers a sideEffect
    useEffect(() => {
        axios.get(`${Forum_URL}/getAll`)
            .then((res) => {
                setIsLoaded(true);
                setPostList(res.data);
            })
            .catch((err) => {
                setIsLoaded(true);
                setError(err.message);
            })
    }, [msg]);

    if (error) {
        return <p>{error}</p>
    } else if (!isLoaded) {
        return <Spinner animation="border" role="status" />
    } else {
        return (
            <div className="row">
                {postList.map((post) => (
                    <div className="col-md-6">
                        <PostList key={post._id} post={post} trigger={trigger} />
                    </div>
                ))}
            </div>
        )
    }
}

export default ReadPost;