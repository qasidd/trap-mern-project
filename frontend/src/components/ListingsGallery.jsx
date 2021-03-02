'use strict';

import ShowingFilmItem from "./ShowingFIlmItem";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert, Spinner } from 'reactstrap';
import { FILM_URL } from './CONSTS.json';
import ListingsGalleryFilms from "./ListingsGalleryFilms";

const ListingsGallery = () => {

    return (
        <div className="mainContent container">
            <h1 className="display-4">Now Showing</h1>
            <ListingsGalleryFilms />
        </div>
    )
};

export default ListingsGallery;