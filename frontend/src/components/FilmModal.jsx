'use strict';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const FilmModal = ({ modal, toggle, film }) => {

    const {
        title,
        releasedate,
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
            <iframe height="290px" src={trailer}></iframe>
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
                    <div className="col-4">
                        <p className="mb-0"><b>Classification</b></p>
                        <p className="mb-2">{classification}</p>
                        <p className="mb-0"><b>Genre</b></p>
                        <p className="mb-2">{genre}</p>
                    </div>
                    <div className="col-8">
                        <p className="mb-0"><b>Runtime</b></p>
                        <p className="mb-2">{runtime} mins</p>
                        <p className="mb-0"><b>Release date</b></p>
                        <p className="mb-2">{releasedate}</p>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default FilmModal;