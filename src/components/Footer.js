import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>&copy; 2022 Omar Nabeel</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
