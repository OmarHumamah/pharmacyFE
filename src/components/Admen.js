import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoutButton from "./LogoutButton";
import { Navbar, Button } from "react-bootstrap";
import AddProduct from "./AddProduct";


class Admen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  open = () => {this.setState({show: !this.state.show})}

  render() {
    return (
      <>
      <Navbar>
        <LogoutButton/>
        <Button onClick={this.open}>Add Product</Button>
        <AddProduct show={this.state.show} close={this.open}/>
      </Navbar>
        <h1>Product list</h1>
      </>
    );
  }
}

export default Admen;
