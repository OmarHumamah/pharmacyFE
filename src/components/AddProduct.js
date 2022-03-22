import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "default",
      packageSize: "10ml",
      price: "00",
      localMade: false,
    };
  }
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={()=>this.props.close()}>
          <Modal.Header >
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label required>Product name</Form.Label>
                <Form.Control type="text" placeholder="Enter Product name" onChange={(e) => this.setState({ name: e.target.value })}/>
              </Form.Group>
              <Form.Group >
                <Form.Label required>Package size</Form.Label>
                <Form.Control as="select" onChange={(e) => this.setState({ packageSize: e.target.value })}>
                  <option>10ml</option>
                  <option>15ml</option>
                  <option>20ml</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label required >Price</Form.Label>
                <Form.Control type="text" placeholder="Price" onChange={(e) => this.setState({ price: e.target.value })}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Local made" onChange={(e) => this.setState({ localMade: e.target.checked })} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>this.props.close()}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{this.props.add(this.state);this.props.close()}}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
