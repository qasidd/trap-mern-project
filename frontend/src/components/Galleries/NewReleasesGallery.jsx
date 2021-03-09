import GalleryFilms from "./GalleryFilms";

const NewReleasesGallery = () => {

    return (
        <div className="mainContent container">
            <h1 className="display-4">Upcoming Showings</h1>
            <div className="row mt-4">
                <GalleryFilms galleryType="upcoming" />
            </div>
        </div>
    )
};

export default NewReleasesGallery;