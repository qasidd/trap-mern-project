
const SearchList = ({ list, query }) => {

    const byQuery = (query) => (list) => list.Descrption.toLowerCase().includes(query.toLowerCase());

    let filteredList = [];

    filteredList = list.filter(byQuery(query));


    return (
        <>
            {filteredList.map((item) => (
                <div>
                    <h4>{item.title}</h4>
                    <p>{item.Descrption}</p>
                    <a href={item.URL}>link</a>
                </div>
            ))}
        </>
    )
}
export default SearchList;