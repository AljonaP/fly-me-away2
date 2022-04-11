import React from "react";
import "./index.css";
import App from"./App";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";


import ContextAuthorizationProvider from "./context/ContextAuthorization/ContextAuthorization";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ContextAuthorizationProvider>
                <App/>
            </ContextAuthorizationProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);



