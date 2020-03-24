import React from "react";
import { Router } from "@reach/router";

import SingleExplosion from "pages/SingleExplosion/SingleExplosion";
import All from "pages/All/All";

export default function App() {
  return (
    <div>
      <Router>
        <SingleExplosion path="/" />
        <All path="/all" />
      </Router>
    </div>
  );
}
