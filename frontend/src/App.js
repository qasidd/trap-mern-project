import './resources/App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Classifications from './components/Classifications/Classifications';
import ListingsGallery from './components/Galleries/ListingsGallery';
import NewReleasesGallery from './components/Galleries/NewReleasesGallery';
import OpeningTime from './components/Opening-Times/CinemaTime';
import NewBooking from './components/Booking/NewBooking';
import PaymentSuccess from './components/Booking/PaymentSuccess';

function App() {
  return (
    <div className="App">
      {/* <Classifications /> */}
      {/* <ListingsGallery /> */}
      {/* <NewReleasesGallery /> */}
      {/* <OpeningTime/> */}
      {/* <NewBooking /> */}
      {/* <PaymentForm /> */}
      {/* <CardForm /> */}
      <Router>
        <Switch>
          <Route path="/" exact>
            <NewBooking />
          </Route>
          <Route path="/new-booking/success" component={PaymentSuccess} />
        </Switch>
      </Router>
    </div>
  );
}
// Random text so I can commit 
export default App;
