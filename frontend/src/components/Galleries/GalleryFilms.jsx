'use strict';

import ShowingFilmItem from "./ShowingFIlmItem";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert, Spinner } from 'reactstrap';
import { FILM_URL } from '../CONSTS.json';

const GalleryFilms = ({ galleryType }) => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [filmList, setFilmList] = useState([]);

    useEffect(() => {
        axios.get(`${FILM_URL}/getAll/${galleryType}`)
            .then((res) => {
                setFilmList(res.data);
                setIsLoaded(true);
            })
            .catch((err) => {
                setError(err);
                setIsLoaded(true);
            });
    }, [])

    if (error) {
        return <Alert color="danger">Error - {error}</Alert>
    } else if (!isLoaded) {
        return <Spinner className="text-center" animation="border" role="status" />
    } else {
        return (
            <>
                {filmList.map((film, i) => (
                    <ShowingFilmItem key={i} film={film} galleryType={galleryType} />
                ))}
            </>
        )
    }
};

export default GalleryFilms;