import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/index";
import reportWebVitals from "./reportWebVitals";

// css
import "./styles/variables.css";
import "./styles/reset.css";
import "./styles/globals.css";
// == Import : Router
import { BrowserRouter as Router } from "react-router-dom";

// == Import : redux - store
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
