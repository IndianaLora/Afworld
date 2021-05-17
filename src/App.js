import "./App.css";
import Home from "./components/pages/Home";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/pages/Navbar";

function App() {
  return (
    <div className="home-container">
      <div className="logo"></div>
      <div className="menu">
        <Navbar />
      </div>
      <Home/>
{/*     
      <Router>
        <Switch>
          <Route path="/"></Route>
          <Route path="/"></Route>
          <Route path="/"></Route>
        </Switch>
      </Router> */}
     
    </div>
  );
}

export default App;
