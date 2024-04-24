import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

// Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

export default function Watched() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  //Declare Watched arrays
  const [watched, setWatched] = useState(() => {
    const storedWatched = localStorage.getItem("watched");
    return storedWatched ? JSON.parse(storedWatched) : [];
  });

  //UseEffect to set and update movie render on page
  useEffect(() => {
    const storedWatched = JSON.parse(localStorage.getItem("watched")) || [];
    setMovies(storedWatched);
  }, [movies]);

  //useEffect to add the watched film to local storage
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);




  //Function to handle adding and removing from watched
  function handleWatched(movie) {
    const isWatched = watched.some(
      (watchedMovie) => watchedMovie.id === movie.id,
    );
    isWatched
      ? setWatched(
          watched.filter((watchedMovie) => watchedMovie.id !== movie.id),
        )
      :
        setWatched([...watched, movie]);
  }



  return (
    <div className="text-center" style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 className="my-4" style={{ fontFamily: "Georgia, serif" }}>Watched</h1>
      <Container fluid>
        <Row>
          {movies.length > 0 ? (
            movies.map((movie) => {
              const { id, title, image, rating, year } = movie;
              return (
                <Col className="mb-5" key={id} xs={12} sm={6} md={4} lg={3}>
                  <Card className="h-100">
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text style={{ fontFamily: "Verdana, sans-serif" }}>
                        <span className="m-2">⭐ {rating}</span>
                        <span className="m-2">📅 {year}</span>
                      </Card.Text>
                      <div className="d-flex align-items-center justify-content-center mb-3">
                        <button
                          className="btn btn-light mx-3"
                          onClick={() => handleWatched(movie)}
                        >
                          👁
                        </button>
                      </div>
                      <Button className="btn mt-1">
                        <Link to={`${id}`} className="text-white text-decoration-none">
                          View Details
                        </Link>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <div>
              <h3>Your Watched Films will show here</h3>
              <Link to="/" className="btn btn-primary btn-lg mt-4">
                Back to movies
              </Link>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
}


