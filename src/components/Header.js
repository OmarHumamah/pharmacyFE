import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import large_pharmacyleaf from "../assets/large_pharmacyleaf.png";
import "./header.css";
import LogoutButton from "./LogoutButton";

class Header extends React.Component {
  render() {
    return (
      <Navbar
        className="headerName"
        collapseOnSelect
        expand="lg"
        variant="light"
      >
        <Container className="cont">
          <Navbar.Brand>
            <Image width={150} src={large_pharmacyleaf} />
          </Navbar.Brand>
          <Link to="/">Home </Link>
          <Link to="/Admen"> Admen </Link>
        </Container>
        {this.props.auth && <LogoutButton />}
      </Navbar>
    );
  }
}

export default Header;
