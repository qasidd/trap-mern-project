import { useState } from 'react';
import SearchList from './SearchList';
import Search from './Search';
import SearchInfo from './SearchInfo.json';
import { Modal } from 'react-bootstrap';

const Searchable = () => {

    const [query, setQuery] = useState(``);
    // const [check, setCheck] = useState(false);

    const handleQuery = e => {
        setQuery(e.target.value);
    }

    return (
        <div className="container mainContent">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h1 className="display-4">Search</h1>
                <Search
                    stateQuery={query}
                    updateQuery={handleQuery}
                />
            </div>
            <SearchList list={SearchInfo} query={query} />
        </div>
    );

}

export default Searchable;