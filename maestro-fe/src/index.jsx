import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Provider } from "react-redux";
import { createStore } from "redux";

var BPM = 100;

const GlobalStyle = createGlobalStyle`
    ${reset}

    html, body, #root {
        height: 100%;
        //drag 방지 코드
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
         user-select:none
    }


    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px white inset !important;
    }

`;

function reducer(state = BPM, action) {
  if (action.type === "1증가") {
    state++;
    return state;
  } else if (action.type === "1감소") {
    state--;
    return state;
  } else if (action.type === "scroll") {
    state = action.changeNum;
    return state;
  } else {
    return state;
  }
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Router />
    </Provider>
  </React.StrictMode>
);
