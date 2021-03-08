import Classifications from './components/Classifications/Classifications';
import ListingsGallery from './components/Galleries/ListingsGallery';
import NewReleasesGallery from './components/Galleries/NewReleasesGallery';
import Home from './components/Home/Home';
import OpeningTime from './components/Opening-Times/CinemaTime';
import './resources/App.css';
import {Link} from 'react-router-dom';
import Nav from "./components/Routing/Nav";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
      <Switch>
      <Route path="/" exact> 
        <Home/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      </Switch>
      </Router>
      {/*<Classifications /> */}
      {/* <ListingsGallery /> */}
      {/* </*NewReleasesGallery /> */} 
      {/* <OpeningTime/> */}
      {/*<Home/>*/}
    </div>
  );
}
// Random text so I can commit 
export default App;
