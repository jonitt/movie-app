import React, { Component } from 'react';
import styles from './MovieSearch.module.css';
import MovieSearchFields from '../../components/MovieSearchFields/MovieSearchFields';

class MovieSearch extends Component {
  render() {
    return (
      <div className={styles.root}>
        <MovieSearchFields />
      </div>
    );
  }
}

export default MovieSearch;
