import {Link} from 'react-router-dom';

const Nav = () => {

return(
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" >QA Cinemas</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
   <Link to ="/"  className="btn btn-outline-info" >Home <span class="sr-only">(current)</span></Link>
   <Link to ="/about" className="btn btn-outline-info" >Gallery</Link> 
   <Link to ="/about" className="btn btn-outline-info">Opening Times</Link> 
   <Link to ="/about" className="btn btn-outline-info" >Classifications</Link> 
   <Link to ="/about"   className="btn btn-outline-info" >Screens</Link> 
   <Link to ="/about" className="btn btn-outline-info" >Bookings</Link> 
   <Link to ="/about" className="btn btn-outline-info" >Payments</Link> 
   <Link to ="/about" className="btn btn-outline-info" >Location</Link> 
   <Link to ="/about" className="btn btn-outline-info" >About</Link> 
   <Link to ="/about" className="btn btn-outline-info" >Contact Us</Link> 
    </div>
  </div>
</nav>

)

}

export default Nav;

