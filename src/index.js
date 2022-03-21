import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
  domain="omar-n-h.us.auth0.com"
  clientId="ol2huSzeXkTS4xZ6kizAGzRGwR0Ab8lE"
  redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
