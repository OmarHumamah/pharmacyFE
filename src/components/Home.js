import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table } from "react-bootstrap";
class Home extends React.Component {
  render() {
    return (
      <>
        <Container style={{ marginTop: "2.5rem" }}>
          <h1>Products</h1>
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
                    <td>{product.localMade ? "Jordan" : "Foreign"}</td>
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

export default Home;
