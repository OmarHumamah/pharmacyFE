import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Image} from 'react-bootstrap';
import { Link } from "react-router-dom";
import large_pharmacyleaf from "../assets/large_pharmacyleaf.png";

class Header extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand> <Image src={large_pharmacyleaf}/></Navbar.Brand>
        <Link to="/">Home </Link>
        <Link to="/Admen"> Admen </Link>
      </Navbar>
    );
  }
}

export default Header;
