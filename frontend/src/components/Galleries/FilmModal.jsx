import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import { BASE_URL } from '../CONSTS.json';

const FilmModal = ({ modal, toggle, film, galleryType }) => {

    const {
        title,
        releasedate,
        screenings,
        runtime,
        genre,
        poster,
        trailer,
        classification,
        director,
        cast,
        desc
    } = film;

    return (
        <Modal isOpen={modal} toggle={toggle} className="filmModal modal-dialog-centered">
            <iframe title={`${title} trailer`} height="290px" src={trailer}></iframe>
            <div className="modal-header">
                <h5 className="mb-0">{title}</h5>
            </div>
            <ModalBody>
                <img src={poster} alt="Film poster" />
                <p className="mb-0"><b>Director(s)</b></p>
                <p className="mb-2">{director}</p>
                <p className="mb-0"><b>Starring</b></p>
                <p className="mb-2">{cast}</p>
                <div className="row">
                    <div className="col-md-4 col-12">
                        <div className="row">
                            <div className="col-5">
                                <p className="mb-0"><b>Runtime</b></p>
                                <p className="mb-2">{runtime} mins</p>
                                <p className="mb-0"><b>Genre</b></p>
                                <p className="mb-2">{genre}</p>
                            </div>
                            <div className="col-7">
                                <p className="mb-0"><b>Classification</b></p>
                                <p className="mb-2">{classification}</p>
                                <p className="mb-0"><b>Release date</b></p>
                                <p className="mb-2">{new Date(releasedate).toDateString().substr(4)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-12">
                        <p className="mb-0"><b>Synopsis</b></p>
                        <p className="mb-2">{desc}</p>
                    </div>
                    <div className="col-12">
                        <p className="mb-0"><b>Showing times:</b></p>
                        <div className="row" id="screeningsOverflowDiv">
                            {
                                screenings.length === 0 ?
                                    <div className="col-12"><p className="mb-2">Coming soon!</p></div> :
                                    screenings.map(scr => (
                                        <div className="col-sm-6 col-12">
                                            <p className="mb-2">{new Date(scr).toUTCString()}</p>
                                        </div>
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter className={galleryType === "upcoming" ? "d-none" : ""}>
                <a className="btn btn-outline-light" href={`${BASE_URL}/new-booking`}>
                        See Tickets
                </a>
            </ModalFooter>
        </Modal >
    )
}

export default FilmModal;