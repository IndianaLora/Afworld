import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" exact component={Home}/>
        <Route path="/products" >
          <Products/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
