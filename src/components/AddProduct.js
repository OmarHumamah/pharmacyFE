import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default class AddProduct extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label required>Product name</Form.Label>
                <Form.Control type="text" placeholder="Enter Product name" />
              </Form.Group>
              <Form.Group >
                <Form.Label required>Package size</Form.Label>
                <Form.Control as="select">
                  <option>10ml</option>
                  <option>15ml</option>
                  <option>20ml</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label required >Price</Form.Label>
                <Form.Control type="text" placeholder="Price" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Local made" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.close}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.close}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
