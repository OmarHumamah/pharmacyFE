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
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ProductsArr: [],
    }
  }

  componentDidMount=()=>{
  axios
  .get('http://localhost:3031/getall')
  .then(result=>{
    this.setState({ProductsArr: result.data})
  })
  .catch(err=>{console.log(err);})

}

  render() {
    const { isAuthenticated } = this.props.auth0;
    return(
      <>
        <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home products={this.state.ProductsArr}/>
              </Route>
              <Route exact path="/Admen">
                {isAuthenticated? <Admen products={this.state.ProductsArr} />: <Login/>}
              </Route>
            </Switch>
            <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
