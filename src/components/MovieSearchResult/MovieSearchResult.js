import React, { Component } from 'react';
import styles from './MovieSearchResult.module.css';
import { Typography } from '@material-ui/core';

class MovieSearchResult extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Typography variant='h2' style={{paddingBottom: '8px'}}>The Dark Knight Rises </Typography>
        <Typography style={{ display: 'inline-block', paddingBottom: '5px', paddingRight: '8px' }} variant='caption'>
          2012
        </Typography>
        <Typography style={{ display: 'inline-block', paddingBottom: '20px' }} variant='caption'>
          Action, Adventure
        </Typography>
        <Typography variant='h3' style={{paddingBottom: '5px'}}>{'IMDb: 8.4'}</Typography>
        <Typography variant='h3' style={{paddingBottom: '18px'}}>Rotten Tomatoes: 87%</Typography>
        <Typography variant='body1' style={{paddingBottom: '5px'}}>Directed by <b>Christopher Nolan</b></Typography>
        <Typography variant='body1' style={{paddingBottom: '20px'}}>
          Starred by <b>Christian Bale</b>, <b>Tom Hardy</b>, <b>Anne Hathaway</b>
        </Typography>
        <Typography variant='body1'>
          Despite his tarnished reputation after the events of The Dark Knight
          (2008), in which he took the rap for Dent's crimes, Batman feels
          compelled to intervene to assist the city and its Police force, which
          is struggling to cope with Bane's plans to destroy the city.
        </Typography>
      </div>
    );
  }
}

export default MovieSearchResult;
