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
    marginTop: '20px',
  },
  disabled: {
    color: '#006064 !important',
  },
})(Button);

class MovieSearchFields extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div>
          <Grid container direction='row' style={{ height: '100%' }}>
            <Grid xs={10} item container direction='column'>
              <Grid item>
                <StyledInput placeholder='Movie name' fullWidth={true} />
              </Grid>
              <Grid item>
                <StyledInput
                  placeholder='Release year (optional)'
                  fullWidth={true}
                  style={{ marginTop: '12px' }}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={2}
              alignItems='center'
              justify='center'
              style={{ minHeight: '100%' }}
            >
              <Grid item>
                <StyledButton color='primary' >
                  Search
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </div>
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
