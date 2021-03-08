import {Button} from 'react-bootstrap';

const Search = (props) => {

    const { stateQuery, updateQuery } = props;

    return (
        <>
        <div>
        <input type="text" placeholder="Type here to search" onChange={updateQuery} value={stateQuery} />
            <Button variant="info" type="submit">Search</Button>{' '}
        </div>
            

            <div>Hello world!</div>
            <p>Hey Dan-Dan</p>
        </>
    );
}

export default Search;