import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  // An async function is a function declared with the async keyword, and the await keyword is permitted within it. 
  // The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding 
  // the need to explicitly configure promise chains.
  async function fetchMoviesHandler() {
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    const transformedMovies = data.results.map((movie) => {
      return {
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_date,
      };
    });

    setMovies(transformedMovies);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
