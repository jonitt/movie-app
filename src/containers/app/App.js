//Author: Joni Tuhkanen
//this is the main app

import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../utils/theme';
import styles from './App.module.css';
import MovieSearch from '../movie-search/MovieSearch';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className={styles.app}>
          <MovieSearch />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
