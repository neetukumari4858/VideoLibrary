import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {WatchlistContextProvider} from "./Context/watchLaterContext"
import {LikedContextProvider} from "./Context/LikedContext";
import {HistoryContextProvider} from "./Context/HistoryContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WatchlistContextProvider>
        <LikedContextProvider>
          <HistoryContextProvider>
            <App />
          </HistoryContextProvider>
        </LikedContextProvider>
      </WatchlistContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
