import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home.jsx";
import DishDetailPage from "./DishDetailPage"
import Error from "./Error.jsx";
import Subscribe from "./Subscribe.jsx";
import AboutUs from "./AboutUs.jsx";

const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article"
};

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/subscribe">Subscribe</Link></li>
            <li><Link to="/aboutus">AboutUs</Link></li>
          </ul>
        </nav>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/subscribe" exact component={Subscribe}/>
        <Route path="/aboutus" exact component={AboutUs}/>
        <Route 
          path="/detail/:id"        
          exact
          render={({ match }) => (
            <DishDetailPage id={match.params.id}/>
          )}
        />
        <Route component={Error} />
      </Switch>
      </Router>
  );
}

export default App;
