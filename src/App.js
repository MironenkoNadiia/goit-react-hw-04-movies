import React from "react";
import { Route, NavLink,Switch } from "react-router-dom";
import HomeView from "./views/HomePage";
import NotFound from "./views/NotFound";
import "./App.css";

const App = () => (
  <>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/authors">Authors</NavLink>
      </li>
      <li>
        <NavLink to="/books">Movie</NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomeView} />
      {/* <Route exact path="/movies" component={MoviesPage} />
      <Route exact path="/movies/:movieId" component={MovieDetailsPage} />
      <Route exact path="/movies/:movieId/cast" component={Cast} />
      <Route exact path="/movies/:movieId/reviews" component={Reviews} /> */}
      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;
