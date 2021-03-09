import {useState} from 'react';
import SearchList from './SearchList';
import Search from './Search';
import SearchInfo from './SearchInfo.json';

const Searchable = () =>{
    
    const [query, setQuery] = useState(``);
    // const [check, setCheck] = useState(false);

    const handleQuery = e => {
        setQuery(e.target.value);
    }

    return(
        <>
        <Search
        stateQuery = {query}
        updateQuery = {handleQuery}
        />
        <SearchList list={SearchInfo} query={query}/>
        </>
    );

} 

export default Searchable; 