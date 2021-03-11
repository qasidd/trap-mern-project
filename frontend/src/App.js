import './resources/App.css';

import Discussionboard from './components/pages/Discussionboard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Classifications from './components/Classifications/Classifications';
import ContactForm from './components/Contactsus/contactform';
import ListingsGallery from './components/Galleries/ListingsGallery';
import NewReleasesGallery from './components/Galleries/NewReleasesGallery';
import Home from './components/Home/Home';
import OpeningTime from './components/Opening-Times/CinemaTime';
import './resources/App.css';
import Nav from "./components/Routing/Nav";
import About from './components/About/About';
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react";
import GettingThere from './components/Getting-There/GettingThere';
import PlacesToGo from './components/PlacesToGo/PlacesToGo';
import NewBooking from './components/Booking/NewBooking';
import Search from './components/SearchBar/Search';
import Searchable from './components/SearchBar/Searchable';
import PaymentSuccess from './components/Booking/PaymentSuccess';
import PaymentCancelled from './components/Booking/PaymentCancelled';
import Screenparent from './components/Screens/screenparent';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/listings-gallery">
            <ListingsGallery/>
          </Route>
          <Route path="/new-releases">
            <NewReleasesGallery/>
          </Route>
          <Route path="/opening-times">
            <OpeningTime/>
          </Route>
          <Route path="/classification">
            <Classifications/>
          </Route>
          <Route path="/screens">
            <Screenparent/>
          </Route>
          <Route path="/new-booking" exact>
            <NewBooking />
          </Route>
          <Route path="/location" exact>
            <GettingThere/>
          </Route>
          <Route path="/placestogo" exact>
            <PlacesToGo/>
          </Route>
          <Route path="/contactus" exact>
            <ContactForm/>
          </Route>
          <Route path="/discussion" exact>
            <Discussionboard/>
          </Route>
          <Route path="/search">
            <Searchable />
          </Route>
          <Route path="/new-booking/success" component={PaymentSuccess} />
          <Route path="/new-booking/cancelled" component={PaymentCancelled} />
        </Switch>
      </Router>
      {/* <Searchable/> */}
     
    </div>
  );
}


// Random text so I can commit 
export default App;
