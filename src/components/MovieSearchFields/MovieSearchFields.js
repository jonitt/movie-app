import React, { Component } from 'react';
import styles from './MovieSearchFields.css';
import {
  TextField,
  Input,
  withStyles,
  Button,
  Grid,
  Divider,
  Typography,
} from '@material-ui/core';
import { theme } from '../../utils/theme';

const StyledInput = withStyles({
  root: {
    color: 'white',
  },
  //found this way the only way to override the underline color.
  underline: {
    '&:before': {
      borderBottom: '2px solid #3F3F3F',
    },
    '&:hover:not($disabled):before': {
      borderBottom: `2px solid #535353 !important`,
    },
  },
})(Input);

const StyledButton = withStyles({
  root: {
    paddingTop: '20px',
    paddingBottom: '10px',
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  disabled: {
    color: '#006064 !important',
  },
})(Button);

class MovieSearchFields extends Component {
  state = {
    titleValue: '',
    yearValue: '',
    yearError: '',
  };

  validateYearInput = e => {
    const { yearError } = this.state;
    let err = '';
    console.log(e.target.value);
    if (isNaN(e.target.value)) {
      err = 'Please input a valid year, e.g. 1993';
    }
    this.setState({ yearError: err, yearValue: e.target.value });
  };

  submitSearch = e => {
    const { yearValue, titleValue } = this.state;
    e.preventDefault();
    console.log(yearValue, titleValue);
    this.props.fetchMovie(titleValue, yearValue);
  };

  render() {
    const { yearError, titleValue } = this.state;
    return (
      <div className={styles.root}>
        <form onSubmit={e => this.submitSearch(e)}>
          <Grid container direction='row' style={{ height: '100%' }}>
            <Grid xs={9} md={10} item container direction='column'>
              <Grid item>
                <StyledInput
                  onChange={e => this.setState({ titleValue: e.target.value })}
                  placeholder='Movie name'
                  fullWidth={true}
                  inputProps={{ maxLength: 120 }}
                />
              </Grid>
              <Grid item>
                <StyledInput
                  error={!!this.state.yearError}
                  onChange={this.validateYearInput}
                  placeholder='Release year (optional)'
                  fullWidth={true}
                  style={{ marginTop: '12px' }}
                  inputProps={{ maxLength: 4 }}
                />
                {yearError ? (
                  <Typography variant='subtitle2' style={{ marginTop: '5px' }}>
                    {yearError}
                  </Typography>
                ) : null}
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={3}
              md={2}
              alignItems='center'
              justify='center'
              style={{ minHeight: '100%' }}
            >
              <Grid item>
                <StyledButton
                  disabled={!titleValue}
                  color='primary'
                  type='submit'
                >
                  Search
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </form>
        <Divider
          light={true}
          style={{
            marginTop: '33px',
            marginBottom: '10px',
            borderTop: '1px solid #6C6C6C',
          }}
          variant='fullWidth'
        />
      </div>
    );
  }
}

export default MovieSearchFields;
