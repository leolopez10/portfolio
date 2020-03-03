import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Post from "./pages/Post";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

import axios from "axios";

function App() {
  
  useEffect(() => {
    axios.get("/api/hello").then(result => {
      console.log(result.data);
    })
  }, [])

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/post/:id">
            <Post />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
