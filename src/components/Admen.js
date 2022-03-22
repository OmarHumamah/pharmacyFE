import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Button, Table, Container } from "react-bootstrap";
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
        <Container>
          <Navbar
            style={{
              backgroundColor: "#169b9a",
              borderRadius: ".5rem .5rem 0rem 0rem",
              padding: ".5rem",
              marginTop: "2.5rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Navbar.Brand>Products list</Navbar.Brand>
            {/* button to open the add product form */}
            <Button variant="dark" onClick={() => this.open()}>
              Add Product +
            </Button>
            <AddProduct
              show={this.state.show}
              close={this.open}
              add={this.props.add}
            />
          </Navbar>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product name</th>
                <th>Packaging size</th>
                <th>Price</th>
                <th>made place</th>
              </tr>
            </thead>
            <tbody>
              {/* loop throw the products data to display all the results */}
              {this.props.products.map((product) => {
                return (
                  <tr>
                    <td>{product.name}</td>
                    <td>{product.packageSize}</td>
                    <td>{product.price}JD</td>
                    <td
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {product.localMade ? "Jordan" : "Foreign"}
                      {/* delete button handler will take the id of the product to delete route handler */}
                      <Button
                        variant="danger"
                        onClick={() => this.props.delete(product._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
}

export default Admen;
