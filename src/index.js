import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ExplosionProvider from "context/Explosion";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <ExplosionProvider>
    <App />
  </ExplosionProvider>,
  document.getElementById("root")
);
registerServiceWorker();
