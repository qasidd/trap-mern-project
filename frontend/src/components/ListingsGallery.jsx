'use strict';

import ListingsGalleryFilms from "./ListingsGalleryFilms";

const ListingsGallery = () => {

    return (
        <div className="mainContent container">
            <h1 className="display-4">Now Showing</h1>
            <div className="row mt-4">
                <ListingsGalleryFilms />
            </div>
        </div>
    )
};

export default ListingsGallery;