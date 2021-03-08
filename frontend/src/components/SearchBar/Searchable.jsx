import {useState} from 'react';
import Search from './Search';

const Searchable = () =>{
    
    const [query, setQuery] = useState(``);
    const [check, setCheck] = useState(false);

    const handleQuery = e => {
        setQuery(e.target.value);
    }

    return(
        <>
        <Search
        stateQuery = {query}
        updateQuery = {handleQuery}
        />
        </>
    );

} 

export default Searchable; 