
const SearchList = ({ list, query }) => {

    const byQuery = (query) => (list) => list.Descrption.toLowerCase().includes(query.toLowerCase());

    let filteredList = [];

    filteredList = list.filter(byQuery(query));


    return (
        <>
            {filteredList.map((item) => (
                <div className="mb-4">
                    <h4><a href={item.URL}>{item.title}</a></h4>
                    <p>{item.Descrption}</p>
                </div>
            ))}
        </>
    )
}
export default SearchList;