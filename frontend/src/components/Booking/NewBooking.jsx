import { useState, useEffect } from 'react';
import axios from 'axios';
import { FILM_URL } from '../CONSTS.json';
import ConcessionInput from './ConcessionInput';

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
    const [concessionInputArray, setConcessionInputArray] = useState([]);
    const [concessionInputArrayLength, setConcessionInputArrayLength] = useState(0);
    const [concessions, setConcessions] = useState([]);
    const [total, setTotal] = useState(0.0);

    let _concessions = [null];

    const updateConcessionType = (index, value) => {
        _concessions[index].type = value;
        setConcessions(_concessions);
    }

    const updateConcessionsSize = (index, value) => {
        _concessions[index].size = value;
        setConcessions(_concessions);
    }

    const updateConcessionsQuantity = (index, value) => {
        _concessions[index].quantity = value;
        setConcessions(_concessions);
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

    const addConcessionInput = () => {
        setConcessionInputArrayLength(concessionInputArrayLength + 1);
    }

    useEffect(() => {
        if (concessionInputArrayLength) {
            setConcessionInputArray(
                [...concessionInputArray, 
                <ConcessionInput 
                    key={concessionInputArrayLength} 
                    index={concessionInputArrayLength}
                    updateType={updateConcessionType}
                    updateSize={updateConcessionsSize}
                    updateQuantity={updateConcessionsQuantity}
                />]
            );
            // TODO: push isn't adding a new object to _concessions array??
            _concessions.push({"type": "popcorn", "size": "S", "quantity": 0})
            console.log(_concessions);
            setConcessions(_concessions);
        }
    }, [concessionInputArrayLength]);

    const selectedFilm = ({ target }) => {
        setSelFilmName(target.value);
        const filmObject = filmList.filter((film) => {
            return film.title === target.value;
        })
        setSelFilmObject(filmObject[0]);
        setSelFilmScreenings(filmObject[0].screenings);
    }

    useEffect(() => {
        const val = (adults * 8) + (children * 6);
        setTotal(deluxe ? val * 1.5 : val);
    }, [deluxe, adults, children])

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="mainContent container">
            <h1 className="display-4">New Booking</h1>
            <form className="mt-3 bookingForm" onSubmit={handleSubmit}>
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
                                        selFilmScreenings.length === 0 ?
                                            (<option> - </option>) :
                                            selFilmScreenings.map((screening, i) => (
                                                <option key={i}>{new Date(screening).toUTCString()}</option>
                                            ))
                                    }
                                </select>
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="filmSelect">Deluxe</label>
                                <select
                                    class="form-control"
                                    onChange={({ target }) => setDeluxe(target.value === "Yes" ? true : false)}
                                >
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
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
                        <label>Concession(s)</label>
                        {concessionInputArray.map((input) => (input))}
                        <div className="form-row">
                            <div className="col-12">
                                <button
                                    className="btn btn-outline-accent"
                                    onClick={addConcessionInput}
                                >
                                    + Add new concession
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 order-md-2 order-1" id="filmPosterDiv">
                        <img src={selFilmObject == null ? "" : selFilmObject.poster} alt="Selected film poster" id="selFilmPoster" />
                        <div id="bookingTotalDiv">
                            <h4><small>Total:</small> {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'GBP' }).format(total)}</h4>
                            <button
                                type="submit"
                                className="btn btn-outline-light"
                            >
                                Proceed to payment
                        </button>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    );

}

export default NewBooking;