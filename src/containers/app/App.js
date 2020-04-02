//Author: Joni Tuhkanen
//this is the main app

import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { theme } from '../../utils/theme';
import styles from './App.module.css';
import MovieSearch from '../movie-search/MovieSearch';
import Footer from '../../components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className={styles.app}>
          <MovieSearch />
        </div>
        <Footer />
      </ThemeProvider>
    );
  }
}

export default App;
