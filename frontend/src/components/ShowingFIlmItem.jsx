'use strict';

const ShowingFilmItem = ({ film }) => {

    const { 
        _id,
        title,
        releasedate,
        runtime,
        genre,
        poster,
        trailer,
        classification,
        director,
        cast
    } = film;

    return (
        <p>Title: {title}, Release date: {releasedate}, Director: {director}</p>
    )
}

export default ShowingFilmItem;