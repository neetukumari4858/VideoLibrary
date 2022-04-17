import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {WatchlistContextProvider} from "./Context/watchLaterContext"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WatchlistContextProvider>
        <App />
      </WatchlistContextProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById("root")
);
