import {Link} from 'react-router-dom';

const Nav = () => {

return(

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">QA Cinemas</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
   <Link to ="/">  <a class="nav-item nav-link active" >Home <span class="sr-only">(current)</span></a> </Link>
   <Link to ="/about"> <a class="nav-item nav-link" >Gallery</a> </Link> 
   <Link to ="/about"> <a class="nav-item nav-link" >Opening Times</a> </Link> 
   <Link to ="/about"> <a class="nav-item nav-link" >Classifications</a> </Link> 
   <Link>  <a class="nav-item nav-link" >Screens</a> </Link> 
   <Link to ="/about"> <a class="nav-item nav-link" >Bookings</a> </Link> 
   <Link to ="/about"> <a class="nav-item nav-link" >Payments</a> </Link> 
   <Link to ="/about"> <a class="nav-item nav-link" >Location</a> </Link> 
   <Link to ="/about"> <a class="nav-item nav-link" >About</a> </Link> 
   <Link to ="/about">  <a class="nav-item nav-link disabled">Contact Us</a> </Link> 
    </div>
  </div>
</nav>







/*     <>
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
    </> */

)

}

export default Nav;

