import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import cyan from '@material-ui/core/colors/cyan';

export const theme = createMuiTheme({
  palette: {
    primary: { main: '#00acc1' },
    secondary: purple,
  },
  typography: {
    fontFamily: ['Arial'].join(','),
    h2: {
      color: '#fafafa',
      fontSize: '2.6rem',
    },
    h3: {
      color: '#fafafa',
      fontWeight: '600',
      fontSize: '1.7rem',
    },
    body1: {
      color: '#fafafa',
      fontSize: '1.5rem',
    },
    body2: {
      color: '#fafafa',
      fontSize: '1.8rem',
    },
    caption: {
      color: '#d9d9d9',
      fontSize: '1.5rem',
    },
    button: {
      fontWeight: '600',
      fontSize: '1.5rem',
    },
  },
});
