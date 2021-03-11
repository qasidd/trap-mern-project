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
   <Link to ="/listings-gallery" className="btn btn-outline-info" >Gallery</Link> 
   <Link to ="/new-releases" className="btn btn-outline-info" >New Releases</Link>
   <Link to ="/opening-times" className="btn btn-outline-info">Opening Times</Link> 
   <Link to ="/classification" className="btn btn-outline-info" >Classifications</Link> 
   <Link to ="/screens"   className="btn btn-outline-info" >Screens</Link> 
   <Link to ="/new-booking" className="btn btn-outline-info" >Bookings</Link>  
   <Link to ="/location" className="btn btn-outline-info" >Getting Here</Link> 
   <Link to ="/placestogo" className="btn btn-outline-info" >Places to Go</Link>
   <Link to ="/about" className="btn btn-outline-info" >About</Link> 
   <Link to ="/contactus" className="btn btn-outline-info" >Contact Us</Link> 
   <Link to ="/discussion" className="btn btn-outline-info" >Discussion Board</Link> 
   <Link to="/search" className="btn btn-outline-info">Search</Link>
    </div>
  </div>
</nav>

)

}

export default Nav;

