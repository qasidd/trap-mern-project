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
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div 
                className="galleryPoster zoom" 
                style={{ 
                    backgroundImage: `url(${poster})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    maxHeight: '400px'
                }}
            >
                <span>{title}</span>
            </div>
        </div>
    )
}

export default ShowingFilmItem;