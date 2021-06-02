import React from 'react';
import {useHistory} from 'react-router-dom';
import MovieCard from './MovieCard';

export default function MovieList(props) {
  const history = useHistory();
  const clickHandler = (id) => {

    history.push(`/movies/${id}`);

  };
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieCard key={movie.id} click={clickHandler}/>
      ))}
    </div>
  );
}