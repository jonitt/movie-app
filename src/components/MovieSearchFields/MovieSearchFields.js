import React, { Component } from 'react';
import styles from './MovieSearchFields.module.css';
import {
  TextField,
  Input,
  withStyles,
  Button,
  Grid,
  Divider,
} from '@material-ui/core';

const StyledInput = withStyles({
  root: {
    color: 'white',
  },
  //found this way the only way to override the underline color.
  underline: {
    '&:before': {
      borderBottom: '2px solid #535353',
    },
    '&:hover:not($disabled):before': {
      borderBottom: `2px solid #535353 !important`,
    },
  },
})(Input);

const StyledButton = withStyles({
  root: {
    color: 'white',
  },
})(Button);

class MovieSearchFields extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div>
          <Grid container>
            <Grid xs={10} item container direction='column'>
              <StyledInput placeholder='Movie name' fullWidth={true} />
              <StyledInput
                placeholder='Release year (optional)'
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={2}>
              <StyledButton>Search</StyledButton>
            </Grid>
          </Grid>
        </div>
        <Divider light={true}/>
      </div>
    );
  }
}

export default MovieSearchFields;
