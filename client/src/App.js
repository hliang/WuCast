import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Fav from "./pages/Fav";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Fav} />
            <Route exact path="/fav" component={Fav} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
