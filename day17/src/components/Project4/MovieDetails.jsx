import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "./movieData";
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (isNaN(id)) {
    return <div className="alert alert-danger text-center">Invalid ID: Must be a number</div>;
  }

  if (!movie) {
    return <div className="alert alert-warning text-center">Movie not found</div>;
  }

  return (
    <div className="container mt-4">
      <h2>{movie.title}</h2>
      <p><strong>Year:</strong> {movie.year}</p>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Description:</strong> {movie.description}</p>
    </div>
  );
};

export default MovieDetails;