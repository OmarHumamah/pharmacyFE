import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <Navbar
        className="footer"
        collapseOnSelect
        expand="lg"
        style={{
          backgroundColor: "#169b9a",
          color: "#545454",
          marginTop: "16%",
        }}
      >
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Navbar.Brand>&copy; 2022 Omar Nabeel</Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default Footer;
