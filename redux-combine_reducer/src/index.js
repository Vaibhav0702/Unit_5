import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { Provider as ReduxProvider } from "react-redux"; // react- redux

import { store } from "./Redux/store"; // js : redux 

ReactDOM.render(
  <React.StrictMode>
     {/* react */}
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);