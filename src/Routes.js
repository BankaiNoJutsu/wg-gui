import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Wgvpn() {
  return (
    <div>
      <h2>WGVPN</h2>
    </div>
  );
}

function BasicExample() {
  return (
    <Router>
	<Route exact path="/" component={Home} />
        <Route path="/wgvpn/" component={Wgvpn} />
    </Router>
  );
}

export default BasicExample;
