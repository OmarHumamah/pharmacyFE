import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import Login from "./components/Login";
import Home from "./components/Home";
import Admen from "./components/Admen";
import axios from "axios";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductsArr: [],
    };
  }
  // get all the data from the database once the page is loaded
  componentDidMount = () => {
    axios
      .get("http://localhost:3031/getall")
      .then((result) => {
        this.setState({ ProductsArr: result.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // add product handler
  addProduct = (product) => {
    axios
      .post("http://localhost:3031/addproduct", product)
      .then((result) => {
        this.setState({ ProductsArr: result.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // delete product handler
  deleteProduct = (id) => {
    axios
      .delete(`http://localhost:3031/deleteproduct/${id}`)
      .then((result) => {
        this.setState({
          ProductsArr: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        {/*switcher to navigate the page*/}
        <Router>
          <Header auth={isAuthenticated} />
          <Switch>
            <Route exact path="/">
              {/*pass the products data throw home page component*/}
              <Home products={this.state.ProductsArr} />
            </Route>
            <Route exact path="/Admen">
              {isAuthenticated ? (
                <Admen
                  // pass the products data and the handlers throw Admen page component
                  products={this.state.ProductsArr}
                  add={this.addProduct}
                  delete={this.deleteProduct}
                />
              ) : (
                 <Login /> // if not authenticated login component will appear 
              )}
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
