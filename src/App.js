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
    <div className="relative pb-10  min-h-screen">

        <Navbar fixed="top" bg="dark" variant="dark">
          <Navbar.Brand href="#">WP Engine</Navbar.Brand>
        </Navbar>

      <Router>
         
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
          </Switch>
       
          <Footer />

      </Router>
      
    </div>
  )  
}

export default App;
