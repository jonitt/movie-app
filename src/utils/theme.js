import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import cyan from '@material-ui/core/colors/cyan';

export const theme = createMuiTheme({
  palette: {
    primary: { main: '#4dd0e1' },
    secondary: purple,
  },
  typography: {
    fontFamily: ['Arial'].join(','),
    h2: {
      fontSize: '2.5rem',
      color: 'white',
    },
    body1: {
      color: 'white',
      fontSize: '1.5rem',
    },
    body2: {
      color: 'white',
      fontSize: '1.8rem',
    },
    button: {
      fontWeight: '600',
      color: 'black',
      fontSize: '1.5rem',
    },
  },
});
