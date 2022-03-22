import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoutButton from "./LogoutButton";
import { Navbar, Button, Table } from "react-bootstrap";
import AddProduct from "./AddProduct";

class Admen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  open = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <>
        <Navbar>
          <LogoutButton />
          <Button onClick={()=>this.open()}>Add Product</Button>
          <AddProduct show={this.state.show} close={this.open} add={this.props.add} />
        </Navbar>
        <h1>Product list</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product name</th>
              <th>Packaging size</th>
              <th>Price</th>
              <th>made place</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => {
              return (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.packageSize}</td>
                  <td>{product.price}JD</td>
                  <td>{product.localMade ? "Jordan" : "Foreign"}</td>
                  <td>
                    
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </>
    );
  }
}

export default Admen;
