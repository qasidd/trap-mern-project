'use strict';

import GalleryFilms from "./GalleryFilms";

const ListingsGallery = () => {

    return (
        <div className="mainContent container">
            <h1 className="display-4">Now Showing</h1>
            <div className="row mt-4">
                <GalleryFilms galleryType="nowShowing" />
            </div>
        </div>
    )
};

export default ListingsGallery;