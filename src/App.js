import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Alert } from "./components/Alert";
import { Navbar } from "./components/Navbar";
import { AlertState } from "./context/alert/alertState";
import { GithubContext } from "./context/github/githubContext";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <GithubContext>
      <AlertState>
        <Router>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={{ text: "test-alert" }} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile:name" component={Profile} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubContext>
  );
}

export default App;
