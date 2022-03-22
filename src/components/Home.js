import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
class Home extends React.Component {

  render() {
    return (
      <>
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
    {this.props.products.map(product=>{
      return (
        <tr>
        <td>{product.name}</td>
        <td>{product.packageSize}</td>
        <td>{product.price}JD</td>
        <td>{product.localMade?"Jordan":"Foreign"}</td>
      </tr>    
      )
    })}
  </tbody>
</Table>
      </>
    )
  }
}

export default Home;
