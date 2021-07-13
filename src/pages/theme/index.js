import { createTheme } from '@material-ui/core/styles';
import { red, green, white, blueGrey } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#3F51B5',
    },
    secondary: {
      main: green.A400,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: white,
      dark: '#f4f6f8',
      paper: white
    },
    text: {
      primary: blueGrey[900],
      secondary: blueGrey[600],
    },
    spacing: 8,
  },
});

export default theme;
