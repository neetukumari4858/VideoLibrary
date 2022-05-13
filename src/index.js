import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {WatchlistContextProvider} from "./Context/watchLaterContext"
import {LikedContextProvider} from "./Context/LikedContext";
import {HistoryContextProvider} from "./Context/HistoryContext";
import {ModalContextProvider} from "./Context/ModelContext"
import {PlayListContextProvider} from "./Context/PlayListContext"
import { AuthProvider } from "./Context/AuthContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
      <WatchlistContextProvider>
        <LikedContextProvider>
          <HistoryContextProvider>
            <ModalContextProvider>
            <PlayListContextProvider>
              <App />
            </PlayListContextProvider>
            </ModalContextProvider>
          </HistoryContextProvider>
        </LikedContextProvider>
      </WatchlistContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
