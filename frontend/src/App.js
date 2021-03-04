import Classifications from './components/Classifications/Classifications';
import ListingsGallery from './components/Galleries/ListingsGallery';
import NewReleasesGallery from './components/Galleries/NewReleasesGallery';
import OpeningTime from './components/Opening-Times/CinemaTime';
import './resources/App.css';

function App() {
  return (
    <div className="App">
      {/* <Classifications /> */}
      {/* <ListingsGallery /> */}
      <NewReleasesGallery />
      {/* <OpeningTime/> */}
    </div>
  );
}

export default App;
