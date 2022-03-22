import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

function LogoutButton() {
  const { isAuthenticated, logout } = useAuth0();

  return (
    isAuthenticated && (
      <Button
        style={{ margin: "0rem 1rem" }}
        variant="dark"
        onClick={() => {
          logout({ returnTo: window.location.origin });
        }}
      >
        Logout
      </Button>
    )
  );
}

export default LogoutButton;
