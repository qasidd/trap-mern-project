import { Button } from 'react-bootstrap';
// import '../../resources/CSS/Search.css';

const Search = (props) => {

    const { stateQuery, updateQuery } = props;

    return (
        <div className="d-flex align-items-center">
            <input 
                type="text" 
                placeholder="Type here to search" 
                onChange={updateQuery} 
                value={stateQuery} 
                className="mr-2"
            />
            <button className="btn btn-outline-accent" type="submit">Search</button>{' '}
        </div>
    );
}

export default Search;