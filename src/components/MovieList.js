import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
 

const MovieList = ({ movies }) => {
  return (
    <div className="movie-grid row">
      {movies.map((movie, index) => (
        <div className="col-md-3 col-lg-2 mb-4" key={index}>
          <div className="movie-card card">
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
              alt={movie.Title}
              className="card-img-top movie-poster"
            />
            <div className="movie-card-overlay">
              <div>
                <h5 className="movie-title">{movie.Title ? movie.Title : "No Title Available"}</h5>
                <p className="movie-year">{movie.Year}</p>
                <p className="font-italic font-weight-bold">clap for Nick</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
