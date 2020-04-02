import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TestComponent from "./TestComponent";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <Router>
        <Route path="/dev">
          <App />
        </Route>
        <Route path="/test">
          <TestComponent />
        </Route>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
