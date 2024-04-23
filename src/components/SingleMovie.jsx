import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

// Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

export default function SingleMovie({ favourites, watched }) {
  const [movie, setMovie] = useState();
  const [error, setError] = useState("");

  const { id } = useParams();
  const favourite = JSON.parse(localStorage.getItem("favourites")) || [];
  console.log(favourite);
  const watchedMovie = JSON.parse(localStorage.getItem("watched")) || [];

  useEffect(() => {
    async function getMovieData() {
      try {
        const { data } = await axios.get(
          `https://ga-api.netlify.app/api/movies/${id}`,
        );
        setMovie(data);
      } catch (error) {
        setError(error.message);
      }
    }
    getMovieData();
  }, [id]);

  const isFavourite = (id) => {
    return favourite.some((favMovie) => favMovie.id === id);
  };

  const isWatched = (id) => {
    return watchedMovie.some((seenMovie) => seenMovie.id === id);
  };
  
  return (
    <div>
      {movie ? (
        <Container className="my-4">
          <h1>Movie Details</h1>
          <Row key={id}>
            <Col>
              <img className="w-100" src={movie.image} alt={movie.title} />
            </Col>
            <h2>{movie.title}</h2>
            <h2>Genres: {movie.genres}</h2>
            <h2>Year: {movie.year}</h2>
            <h2>Rating: {movie.rating}</h2>
            <h2>🩷: {isFavourite(movie.id) ? "Y" : "N"}</h2>
            <h2>👁: {isWatched(movie.id) ? "Y" : "N"}</h2>
            <Col></Col>
            <Link to="/" className="btn btn-primary">
              Back to movies
            </Link>
          </Row>
        </Container>
      ) : (
        console.log(error)
      )}
    </div>
  );
}
