import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

import Person from "./pages/Person/Person";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movie/Movies";
import Instruction from "./pages/Instruction/Instruction";
import PersonProfile from "./Components/PersonProfile/PersonProfile";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Movie" exact>
            <Movies />
          </Route>
          <Route path="/Person" exact>
            <Person />
          </Route>
          <Route path="/Instruction" component={Instruction} exact>
            <Instruction />
          </Route>
          <Route path="/PersonProfile/:name" component={PersonProfile}>
            <PersonProfile />
          </Route>
          <Route path="/PersonProfile/:name" component={PersonProfile}>
            <PersonProfile />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
