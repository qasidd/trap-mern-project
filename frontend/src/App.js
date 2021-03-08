import Classifications from './components/Classifications/Classifications';
import ListingsGallery from './components/Galleries/ListingsGallery';
import NewReleasesGallery from './components/Galleries/NewReleasesGallery';
import GettingThere from './components/Getting-There/GettingThere';
import OpeningTime from './components/Opening-Times/CinemaTime';
import PlacesToGo from './components/PlacesToGo/PlacesToGo';

import NewBooking from './components/Booking/NewBooking';
import './resources/App.css';

function App() {
  return (
    <div className="App">
      {/* <Classifications /> */}
      {/* <ListingsGallery /> */}
      {/* <NewReleasesGallery /> */}
      {/* <OpeningTime/> */}
      {/* <PlacesToGo/> */}
      <GettingThere/>
      <NewBooking />
    </div>
  );
}
// Random text so I can commit 
export default App;
