import { useState, useEffect } from 'react';
import axios from 'axios';
import { FILM_URL, BOOKING_URL } from '../CONSTS.json';
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
    const [concessions, setConcessions] = useState([]);
    const [total, setTotal] = useState(0.0);
    const [invalidForm, setInvalidForm] = useState(false);

    const updateConcession = (index, key, value) => {

        setConcessions((prevConcessions) => {
            let _concessions = [...prevConcessions];
            _concessions[index][key] = value;
            return _concessions;
        })
    }

    const addConcessionInput = () => {
        setConcessionInputArray(
            [...concessionInputArray,
            <ConcessionInput
                key={concessionInputArray.length}
                index={concessionInputArray.length}
                updateConcession={updateConcession}
            />]
        );
        const newCon = { "type": "Popcorn", "size": "S", "quantity": 0 };
        setConcessions((conArray) => [...conArray, newCon]);
    }

    const selectedFilm = ({ target }) => {
        setSelFilmName(target.value);
        const filmObject = filmList.filter((film) => {
            return film.title === target.value;
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

    useEffect(() => {
        let val = 0;
        val = (adults * 8) + (children * 6);
        val = deluxe ? val * 1.5 : val;
        concessions.forEach((con) => {
            if (con.type.toLowerCase() === "popcorn") {
                val = val + (con.quantity) * (con.size === "L" ? 5.4 : con.size === "M" ? 4.9 : 4.5);
            } else if (con.type.toLowerCase() === "drink") {
                val = val + (con.quantity) * (con.size === "L" ? 3.6 : con.size === "M" ? 3.25 : 2.95);
            } else {
                val = val + (con.quantity) * (con.size === "L" ? 6 : con.size === "M" ? 5.6 : 5.2);
            }
        });
        setTotal(val);
    }, [deluxe, adults, children, concessions])

    const createBooking = () => {
        console.log("createBooking triggered");

        const newBookingBody = {
            "name": name,
            "movie_title": selFilmName,
            "screening": screening,
            "nofseats": parseInt(adults) + parseInt(children),
            "adult": adults,
            "child": children,
            "concessions": concessions,
            "total": total,
            "paymentsuccess": false
        }

        axios.post(`${BOOKING_URL}/create`, newBookingBody)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const isBlankFilm = () => {
        return selFilmName === "";
    }

    const isBlankScreening = () => {
        return screening === "";
    }

    const isBlankName = () => {
        return name === "";
    }

    const isBlankSeats = () => {
        return (adults + children) === 0
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isBlankFilm() && !isBlankScreening() && !isBlankName() && !isBlankSeats()) {
            setInvalidForm(false);
            createBooking();
        } else {
            setInvalidForm(true);
        }
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
                                className={isBlankFilm() && invalidForm ? "form-control form-control-lg is-invalid" : "form-control form-control-lg"}
                                onChange={selectedFilm}
                            >
                                {filmList.map(({ title }, i) => (
                                    <option key={i}>{title}</option>
                                ))}
                            </select>
                            <div className={isBlankFilm() && invalidForm ? "invalid-feedback" : "d-none"}>
                                Please select a film.
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-8">
                                <label htmlFor="filmSelect">Screenings</label>
                                <select
                                    className={isBlankScreening() && invalidForm ? "form-control is-invalid" : "form-control"}
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
                                <div className={isBlankScreening() && invalidForm ? "invalid-feedback" : "d-none"}>
                                    Please select a screening.
                                </div>
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="filmSelect">Deluxe?</label>
                                <select
                                    className="form-control"
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
                                className={isBlankName() && invalidForm ? "form-control is-invalid" : "form-control"}
                                name="nameInput"
                                id="nameInput"
                                onChange={({ target }) => { setName(target.value) }}
                            />
                            <div className={isBlankName() && invalidForm ? "invalid-feedback" : "d-none"}>
                                Please provide a name for the booking.
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label htmlFor="numOfAdultsInput">Adult(s) <small><em>£8, £12 deluxe</em></small></label>
                                <input
                                    type="number"
                                    className={isBlankSeats() && invalidForm ? "form-control is-invalid" : "form-control"}
                                    name="numOfAdultsInput"
                                    id="numOfAdultsInput"
                                    onChange={({ target }) => { setAdults(target.value) }}
                                />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="numOfChildrenInput">Child(ren) <small><em>£6, £9 deluxe</em></small></label>
                                <input
                                    type="number"
                                    className={isBlankSeats() && invalidForm ? "form-control is-invalid" : "form-control"}
                                    name="numOfChildrenInput"
                                    id="numOfChildrenInput"
                                    onChange={({ target }) => { setChildren(target.value) }}
                                />
                            </div>
                        </div>
                        <label>Concession(s)</label>
                        <div className={concessionInputArray.length === 0 ? "d-none" : "row"}>
                            <div className="col-6">
                                <label>Type</label>
                            </div>
                            <div className="col-4">
                                <label>Size</label>
                            </div>
                            <div className="col-2">
                                <label>Qty</label>
                            </div>
                        </div>
                        {concessionInputArray.map((input) => (input))}

                        <div className="form-row">
                            <div className="col-12">
                                <button
                                    type="button"
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