'use strict';

import React, { useState } from 'react';
import FilmModal from './FilmModal';

const ShowingFilmItem = ({ film }) => {

    const {
        title,
        poster,
    } = film;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

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
                onClick={toggle}
            >
                <span>{title}</span>
            </div>
            <FilmModal modal={modal} toggle={toggle} film={film} />
        </div>
    )
}

export default ShowingFilmItem;