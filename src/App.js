import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from  "react-router-dom";
import { Navbar } from 'react-bootstrap'

import Footer from './Components/Footer';
import Home from './Views/Home';


function App() {
  return (
    <div className="pb-10 ">

        <Navbar fixed="top" bg="dark" variant="dark">
          <Navbar.Brand href="#">WP Engine</Navbar.Brand>
        </Navbar>

      <Router>
         
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
          </Switch>
          
       
      </Router>
      <Footer />
    </div>
  )  
}

export default App;
