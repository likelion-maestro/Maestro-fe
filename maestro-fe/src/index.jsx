import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    html, body, #root {
        height: 100%;
    }


    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px white inset !important;
    }

`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>
);
