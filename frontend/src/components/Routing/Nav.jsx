import {Link} from 'react-router-dom';

const Nav = () => {

return(
    <>

    <Link to ="/" className="btn btn-outline-info">Home</Link>
    <Link to ="/" className="btn btn-outline-info"> Gallery</Link>
    <Link to ="/" className="btn btn-outline-info">Opening Times</Link>
    <Link to ="/" className="btn btn-outline-info">Classifications</Link>
    <Link to ="/" className="btn btn-outline-info">Screens</Link>
    <Link to ="/" className="btn btn-outline-info">Bookings</Link>
    <Link to ="/" className="btn btn-outline-info">Payments</Link>
    <Link to ="/" className="btn btn-outline-info">Location</Link>
    <Link to ="/about" className="btn btn-outline-info">About</Link>
    <Link to ="/" className="btn btn-outline-info">Contact</Link>
    </>

)

}

export default Nav;