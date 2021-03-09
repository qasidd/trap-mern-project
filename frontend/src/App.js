import './resources/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Discussionboard from './comps/pages/Discussionboard';
function App() {
  return (
    <Router>
    <Switch>
    <Route path="/discussionboard" >
        <Discussionboard/>
    </Route>
    
    <Route>
      {/* Call a component for a 404 NOT FOUND */}
      <p>Sorry can't find what you're looking for!</p>
    </Route>
    </Switch>
  </Router>
  );
}

export default App;
