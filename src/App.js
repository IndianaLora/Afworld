import React, { useEffect } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/index";
import Products from "./pages/Products";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Route path="/" exact component={Home} />
      <Switch>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
