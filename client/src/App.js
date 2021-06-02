import React, { useState, useEffect, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    if (!saved.find(item => item.id === Number(id))) {
      const temp = saved;
      temp.push(movieList[id]);
      temp.sort((a, b) => a.id - b.id);
      setSaved([...temp]); // Just adding the array variable doesn't re-render the saved movies list.
      console.log(`${movieList[id].title} has been added to the saved movies list.`);
    }
    else {
      console.log(`${movieList[id].title} has already been added to the saved movies list.`);
    }
  };

  return (
    <Fragment>
    <SavedList list={saved} />
    <Switch>
      <Route exact path='/'>
        <MovieList movies={movieList} />
      </Route>
      <Route path='/movies/:id'>
        <Movie movies={movieList} save={addToSavedList} />
      </Route>
    </Switch>
    {/* <div>Replace this Div with your Routes</div> */}
  </Fragment>
  );
}
