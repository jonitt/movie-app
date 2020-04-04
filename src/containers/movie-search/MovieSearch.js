import React, { Component } from 'react';
import styles from './MovieSearch.css';
import MovieSearchFields from '../../components/MovieSearchFields/MovieSearchFields';
import MovieSearchResult from '../../components/MovieSearchResult/MovieSearchResult';
import * as moviesApi from '../../api/movies';

class MovieSearch extends Component {
  state = { movie: null };

  fetchMovie(title, year) {
    const movie = moviesApi.fetchMovie(title, year).then(r => {
      console.log(r);

      this.setState({ movie: r });
      return r;
    });
  }

  render() {
    const { movie } = this.state;
    return (
      <div className={styles.root}>
        <MovieSearchFields fetchMovie={(t, y) => this.fetchMovie(t, y)} />
        <MovieSearchResult movie={movie} />
      </div>
    );
  }
}

export default MovieSearch;
