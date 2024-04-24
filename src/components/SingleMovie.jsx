import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

// Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

export default function SingleMovie() {
  const [movie, setMovie] = useState();
  const [error, setError] = useState("");

  const { id } = useParams();
  const favourite = JSON.parse(localStorage.getItem("favourites")) || [];
 
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
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {movie ? (
        <Container className="my-4 text-center">
          <h1 style={{ fontFamily: "Georgia, serif" }}>Movie Details</h1>
          <Row>
            <Col md={6}>
              <img className="img-fluid p-4" src={movie.image} alt={movie.title} />
            </Col>
            <Col md={6} className="my-auto">
              <h2 style={{ fontFamily: "Verdana, sans-serif" }}>{movie.title}</h2>
              <h4>Genres: {movie.genres.join(", ")}</h4>
              <h4>Year: {movie.year}</h4>
              <h4>Rating: {movie.rating}</h4>
              <h4>🩷: {isFavourite(movie.id) ? "Liked" : "Not Liked"}</h4>
              <h4>👁: {isWatched(movie.id) ? "Watched" : "Not Watched"}</h4>
              <Link to="/" className="btn btn-primary mt-4">
                Back to movies
              </Link>
            </Col>
          </Row>
        </Container>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Spinner className="mx-auto" animation="border" variant="secondary" />
      )}
    </div>
  );
}
