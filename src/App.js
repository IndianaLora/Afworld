import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/Products">
          <Products/>
        </Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
