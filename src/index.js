import React from "react";
import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

ReactDOM.render(
    <CookiesProvider>
        <App />
    </CookiesProvider>, 
    document.getElementById("root"));
