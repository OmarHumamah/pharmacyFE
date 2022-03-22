import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import LoginButton from "./LoginButton";
import { Container } from "react-bootstrap";

class Login extends React.Component {
  render() {
    return (
      <Container
        style={{ display: "flex", justifyContent: "center", margin: "50px" }}
      >
        <Card style={{ width: "25rem" }}>
          <Card.Header style={{ backgroundColor: "#169b9a" }}>
            Admen LogIn
          </Card.Header>
          <Card.Body>
            <Card.Title>Access denied</Card.Title>
            <Card.Text>Login or Register to manage the items</Card.Text>
            <LoginButton />
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
      </Container>
    );
  }
}

export default Login;
