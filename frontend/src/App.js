import Classifications from './components/Classifications';
import OpeningTime from './components/Opening-Times/CinemaTime';
import PlacesToGo from './components/PlacesToGo/PlacesToGo';
import './resources/App.css';

const App =()=> {
  return (
    <div className="App">
      {/* <Classifications /> */}
      {/* <OpeningTime/> */}
      <PlacesToGo/>
    </div>
  );
}

export default App;
