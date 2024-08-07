import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ScrollToTop from "./component/scrolltotop.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./dist/css/main.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
