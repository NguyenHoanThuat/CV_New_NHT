import React from "react";
import Home from "./containers/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

App.propTypes = {};

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Home}></Route>
      </div>
    </Router>
  );
}

export default App;
