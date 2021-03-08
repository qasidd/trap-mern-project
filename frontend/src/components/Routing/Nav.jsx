import {Link} from 'react-router-dom';

const Nav = () => {

return(
    <>

    <Link to ="/">Home</Link>
    <Link to ="/p2go">Places to Go</Link>
    <Link to ="/bookings">Bookings</Link>
    <Link to ="/movies">Movies</Link>
    <Link to ="/about">About</Link>
    <Link to ="/Contact Us">Contact Us</Link>
    </>

)

}

export default Nav;