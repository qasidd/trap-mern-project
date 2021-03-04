import { useState, useEffect } from 'react';
import axios from 'axios';
import { FILM_URL } from '../CONSTS.json';

const NewBooking = (props) => {

    const [filmList, setFilmList] = useState([]);
    const [selFilmObject, setSelFilmObject] = useState(null);
    const [selFilmName, setSelFilmName] = useState("");
    const [selFilmScreenings, setSelFilmScreenings] = useState([]);
    const [screening, setScreening] = useState("");
    const [deluxe, setDeluxe] = useState(false);
    const [name, setName] = useState("");
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [concession, setConcession] = useState("");

    const selectedFilm = ({ target }) => {
        setSelFilmName(target.value);
        const filmObject = filmList.filter((film) => {
            return film.title == target.value;
        })
        setSelFilmObject(filmObject[0]);
        setSelFilmScreenings(filmObject[0].screenings);
    }

    useEffect(() => {
        axios.get(`${FILM_URL}/getAll/nowShowing`)
            .then((res) => {
                setFilmList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="mainContent container">
            <h1 className="display-4">New Booking</h1>
            <form className="mt-3 bookingForm">
                <div className="row">
                    <div className="col-md-6 col-lg-8 order-md-1 order-2">
                        <div className="form-group">
                            <label htmlFor="filmSelect">Film</label>
                            <select
                                class="form-control form-control-lg"
                                onChange={selectedFilm}
                            >
                                {filmList.map(({ title }, i) => (
                                    <option key={i}>{title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-8">
                                <label htmlFor="filmSelect">Screenings</label>
                                <select
                                    class="form-control"
                                    onChange={({ target }) => { setScreening(target.value) }}
                                >
                                    {
                                        selFilmScreenings.length == 0 ?
                                            (<option> - </option>) :
                                            selFilmScreenings.map((screening, i) => (
                                                <option key={i}>{new Date(screening).toUTCString()}</option>
                                            ))
                                    }
                                </select>
                            </div>
                            <div className="form-group col-4">
                                <div className="form-check">
                                    <input 
                                        type="checkbox" 
                                        name="deluxeCheck" 
                                        id="deluxeCheck" 
                                        className="form-check-input" 
                                    />
                                    <label htmlFor="deluxeCheck" className="form-check-label">Deluxe</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="nameInput">Name on booking</label>
                            <input
                                type="text"
                                className="form-control"
                                name="nameInput"
                                id="nameInput"
                                onChange={({ target }) => { setName(target.value) }}
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label htmlFor="numOfAdultsInput">Adult(s)</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="numOfAdultsInput"
                                    id="numOfAdultsInput"
                                    onChange={({ target }) => { setAdults(target.value) }}
                                />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="numOfChildrenInput">Child(ren)</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="numOfChildrenInput"
                                    id="numOfChildrenInput"
                                    onChange={({ target }) => { setChildren(target.value) }}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="concessionSelect">Concession</label>
                            <select
                                class="form-control"
                                name="concessionSelect"
                                onChange={({ target }) => { setConcession(target.value) }}
                            >
                                <option value="None">None</option>
                                <option value="Student">Student</option>
                                <option value="Senior">Senior</option>
                                <option value="Armed Forces">Armed Forces</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 order-md-2 order-1" id="filmPosterDiv">
                        <img src={selFilmObject == null ? "" : selFilmObject.poster} alt="Selected film poster" id="selFilmPoster" />
                    </div>
                </div>
            </form>
        </div >
    );

}

export default NewBooking;