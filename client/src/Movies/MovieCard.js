import React from 'react';

export default function MovieCard (props) {
  const { title, director, metascore, stars, id } = props.movie;

  if (props.itemID) {

    return (
      <div className="save-wrapper">
        <div className="movie-card">
          <h2>{title}</h2>
          <div className="movie-director">
            Director: <em>{director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
          <h3>Actors</h3>

          {stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>
        <div className="save-button" onClick={() => props.save(props.itemID)}>Save</div>
      </div>
    );

  }

  else {

    return (
      <div className="movie-card" onClick={() => props.click(id)}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    );

  }

}
