//Author: Joni Tuhkanen
//this is the main app

import React, { Component } from 'react';
import styles from './Footer.module.css';
import { Typography } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <Typography variant='subtitle1'>
          Joni Tuhkanen
          <br />
          joni.tuhkanen@protonmail.com
        </Typography>
      </div>
    );
  }
}

export default App;
