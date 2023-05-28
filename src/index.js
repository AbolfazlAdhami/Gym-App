import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);
