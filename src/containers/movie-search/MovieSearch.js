import React, { Component } from 'react';
import styles from './MovieSearch.module.css';
import MovieSearchFields from '../../components/MovieSearchFields/MovieSearchFields';
import MovieSearchResult from '../../components/MovieSearchResult/MovieSearchResult';

class MovieSearch extends Component {
  render() {
    return (
      <div className={styles.root}>
        <MovieSearchFields />
        <MovieSearchResult />
      </div>
    );
  }
}

export default MovieSearch;
