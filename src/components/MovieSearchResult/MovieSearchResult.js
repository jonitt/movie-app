import React, { Component } from 'react';
import styles from './MovieSearchResult.css';
import { Typography } from '@material-ui/core';

class MovieSearchResult extends Component {
  getMovieRatingValue(name, ratings) {
    const na = 'N/A';
    if (ratings) {
      const rating = ratings.find(
        r => r.Source.toLowerCase() === name.toLowerCase()
      );
      if (rating) return rating.Value;
    }
    return na;
  }

  render() {
    const { movie } = this.props;
    const na = 'N/A';
    console.log(movie ? movie.Title : 'xd');
    return (
      <div className={styles.root}>
        {movie ? (
          movie.Response === 'True' ? (
            <div>
              <Typography variant='h2' style={{ paddingBottom: '8px' }}>
                {movie.Title}
              </Typography>
              <Typography
                style={{
                  display: 'inline-block',
                  paddingBottom: '5px',
                  paddingRight: '8px',
                }}
                variant='caption'
              >
                {movie.Year || na}
              </Typography>
              <Typography
                style={{ display: 'inline-block', paddingBottom: '20px' }}
                variant='caption'
              >
                {movie.Genre || na}
              </Typography>
              <Typography variant='h3' style={{ paddingBottom: '5px' }}>
                {`IMDb: ${this.getMovieRatingValue(
                  'Internet Movie Database',
                  movie.Ratings
                )}`}
              </Typography>
              <Typography variant='h3' style={{ paddingBottom: '18px' }}>
                {`Rotten Tomatoes: ${this.getMovieRatingValue(
                  'Rotten Tomatoes',
                  movie.Ratings
                )}`}
              </Typography>
              <Typography variant='body1' style={{ paddingBottom: '5px' }}>
                {'Directed by '} <b>{movie.Director || na}</b>
              </Typography>
              <Typography variant='body1' style={{ paddingBottom: '20px' }}>
                {'Starred by '}
                {movie.Actors
                  ? movie.Actors.split(', ').map((a, i) =>
                      i === 0 ? (
                        <b key={i}>{`${a}`}</b>
                      ) : (
                        <b key={i}>{`, ${a}`}</b>
                      )
                    )
                  : na}
              </Typography>
              <Typography variant='body1'>{movie.Plot || na}</Typography>
            </div>
          ) : (
            <Typography variant='subtitle1'>
              Movie not found. Check spelling of the name and try searching
              without release year.
            </Typography>
          )
        ) : null}
      </div>
    );
  }
}

export default MovieSearchResult;
