import React from "react";
import { Link } from "react-router-dom";
import { movies } from "./movieData";
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieList = () => {
  return (
    <div className="container mt-4">
      <h2>Movie List</h2>
      <div className="list-group">
        {movies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            className="list-group-item list-group-item-action"
          >
            {movie.title} ({movie.year})
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;