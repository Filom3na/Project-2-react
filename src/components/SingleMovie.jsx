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
  // const isWatched = (id) => watchedMovie.some((watchedMovie) => watchedMovie.id === id);

  return (
    <div>
      {movie ? (
        <Container className="my-4 text-center ">
          <h1>Movie Details</h1>
          <Row key={id}>
            <Col>
              <img className="w-100 p-4" src={movie.image} alt={movie.title} />
            </Col>

            <Col className="my-auto">
              <h2 className="pb-2">{movie.title}</h2>
              <h4>Genres: {movie.genres}</h4>
              <h4>Year: {movie.year}</h4>
              <h4>Rating: {movie.rating}</h4>
              <h4>
                🩷: {isFavourite(movie.id) ? "Favourite" : "Not Favourite"}
              </h4>
              <h4>👁: {isWatched(movie.id) ? "Watched" : "Not Watched"}</h4>
              <Link to="/" className="btn btn-primary mt-4 ">
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
