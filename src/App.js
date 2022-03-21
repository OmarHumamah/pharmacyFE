import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import Login from './components/Login';
import Home from './components/Home';
import Admen from './components/Admen';

class App extends React.Component {

  render() {
    const { isAuthenticated } = this.props.auth0;
    return(
      <>
        <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/Admen">
                {isAuthenticated? <Admen />: <Login/>}
              </Route>
            </Switch>
            <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
