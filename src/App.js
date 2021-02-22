import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/HomePage";
import MovieDetailsPage from "./views/MovieDetailsPage";
import Cast from "./views/Cast";
import Reviews from "./views/Reviews";

const App = () => (
  <>
    <Route path={"/"} component={HomePage}></Route>
    <Route path={"/movies"} component={MoviesPage}></Route>
    <Route path={"/movies/:movieId"} component={MovieDetailsPage}></Route>
    <Route path={"/movies/:movieId/cast"} component={Cast}></Route>
    <Route path={"/movies/:movieId/reviews"} component={Reviews}></Route>
  </>
);

export default App;
