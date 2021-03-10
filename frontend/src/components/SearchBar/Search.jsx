import {Button} from 'react-bootstrap';
// import '../../resources/CSS/Search.css';

const Search = (props) => {

    const { stateQuery, updateQuery } = props;

    return (
        <>
        <div>
        <input type="text" placeholder="Type here to search" onChange={updateQuery} value={stateQuery} />
            <Button variant="info" type="submit">Search</Button>{' '}
        </div>
       
        </>
    );
}

export default Search;