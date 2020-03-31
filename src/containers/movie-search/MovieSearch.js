import React, { Component } from 'react';
import styles from './MovieSearch.module.css';
import MovieSearchFields from '../../components/MovieSearchFields/MovieSearchFields';
import MovieSearchResult from '../../components/MovieSearchResult/MovieSearchResult';
import * as moviesApi from '../../api/movies';

class MovieSearch extends Component {
  fetchMovie(title, year) {
    moviesApi.fetchMovie(title, year).then(r => console.log(r));
  }

  render() {
    this.fetchMovie();
    return (
      <div className={styles.root}>
        <MovieSearchFields fetchMovie={this.fetchMovie} />
        <MovieSearchResult />
      </div>
    );
  }
}

export default MovieSearch;
