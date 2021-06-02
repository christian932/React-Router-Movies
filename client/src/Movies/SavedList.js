import React from 'react';
import { useHistory, Link, NavLink } from 'react-router-dom';

export default function SavedList(props) {
  const history = useHistory();

  const clickHandler = () => {

    history.push('/');

  };

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <SavedDetails key={movie.id} movie={movie} />
      ))}
      <div className="home-button" onClick={() => clickHandler()}>Home</div>
    </div>
  );
}

function SavedDetails(props) {

  const { title, id } = props.movie;

  return (
    <NavLink key={id} to={`/movies/${id}`}> {/* Link and NavLink only changing when you go back to home and then click on a link again, not when you are within a movie link and you try to click other links. I don't know why, but it probably has to do with the setup, or maybe due to the fact that that specific component has already been rendered. */}
      <span className="saved-movie">{title}</span>
    </NavLink>
  );

} 