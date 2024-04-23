//
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//Imports for Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [genres, setGenres] = useState([]);

  //Declare Favourites and Watched arrays
  const [favourites, setFavourites] = useState(() => {
    const storedFavourites = localStorage.getItem("favourites");
    return storedFavourites ? JSON.parse(storedFavourites) : [];
  });

  const [watched, setWatched] = useState(() => {
    const storedWatched = localStorage.getItem("watched");
    return storedWatched ? JSON.parse(storedWatched) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  //Function to handle adding and removing from favourites
  function handleFavourite(movie) {
    const isFavourite = favourites.some((favMovie) => favMovie.id === movie.id);
    isFavourite
      ? setFavourites(favourites.filter((favMovie) => favMovie.id !== movie.id))
      : setFavourites([...favourites, movie]);
  }
  //Function to handle adding and removing from watched
  function handleWatched(movie) {
    const isWatched = watched.some(
      (watchedMovie) => watchedMovie.id === movie.id,
    );
    isWatched
      ? setWatched(
          watched.filter((watchedMovie) => watchedMovie.id !== movie.id),
        )
      : setWatched([...watched, movie]);
  }

  useEffect(() => {
    async function getMovieData() {
      try {
        const { data } = await axios.get(
          "https://ga-api.netlify.app/api/movies",
        );
        setMovies(data);
        console.log(genres)
      } catch (error) {
        setError(error.message);
      }
    }
    getMovieData();
  }, []);

  //Functions for Filters
  function sortGenre(event) {
    const genres = event.target.value;
    if (genres === "") {
      setGenres([]);
    } else {
      setGenres([genres]);
    }
  }


  const filteredMovies = movies.filter((movie) => {
    return genres.length === 0 || movie.genres.some((genre) => genres.includes(genre));
  });


  return (
    <>
      <h1 className="text-center my-4">Movies Home</h1>
      <div className="mb-4">
        <select
          className="form-select"
          aria-label="Filter movies by genre"
          value={genres}
          onChange={sortGenre}
        >
          <option value="">All Genres</option>
          {[...new Set(movies.flatMap((movie) => movie.genres))].map(
            (genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ),
          )}
        </select>
      </div>
      <Container fluid className="text-center">
        <Row>
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => {
              const { id, title, image, rating, year } = movie;
              const favTrue = favourites.some(
                (favMovie) => favMovie.id === movie.id,
              );
              const watchedTrue = watched.some(
                (watchedMovie) => watchedMovie.id === movie.id,
              );
              return (
                <Col className="mb-5" key={id} xs={12} sm={6} md={4} lg={3}>
                  <Card className="h-100">
                    <Card.Img
                      variant="top"
                      src={image}
                    />
                    <Card.Body>
                      <Card.Title className="">{title}</Card.Title>
                      <Card.Text>
                        <span className="m-2">⭐:{rating}</span>
                        <span className="m-2">📅:{year}</span>
                      </Card.Text>
                      <div className="d-flex align-items-center justify-content-center">
                        <button
                          className={`btn mx-3 ${favTrue ? "btn-warning" : "btn-light"}`}
                          onClick={() => handleFavourite(movie)}
                        >
                          🩷
                        </button>
                        <button
                          className={`btn mx-3 ${watchedTrue ? "btn-success" : "btn-light"}`}
                          onClick={() => handleWatched(movie)}
                        >
                          👁
                        </button>
                      </div>
                      <Button className="btn mt-1">
                        <Link to={`${id}`} className="btn btn-brand">
                          View Details
                        </Link>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : (
            <Spinner
              className="mx-auto"
              animation="border"
              variant="secondary"
            />
          )}
        </Row>
      </Container>
    </>
  );
}
