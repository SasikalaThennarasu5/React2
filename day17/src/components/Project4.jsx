// Project4.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Project4 = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setMovie(data);
          setLoading(false);
        }
      })
      .catch(() => setLoading(false));

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) return <p>Loading movie...</p>;
  if (!movie || !movie.id) return <p>Movie not found.</p>;

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>{movie.name}</h2>
      {movie.image?.medium && <img src={movie.image.medium} alt={movie.name} />}
      <p><strong>Genres:</strong> {movie.genres.join(', ')}</p>
      <p><strong>Rating:</strong> {movie.rating.average || "N/A"}</p>
      <p><strong>Premiered:</strong> {movie.premiered}</p>
      <div dangerouslySetInnerHTML={{ __html: movie.summary }} />
    </div>
  );
};

export default Project4;
