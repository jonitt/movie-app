//Author: Joni Tuhkanen
//this is the main app

import React, { Component } from 'react';
import styles from './App.module.css';
import MovieSearch from '../movie-search/MovieSearch';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <MovieSearch />
      </div>
    );
  }
}

export default App;
