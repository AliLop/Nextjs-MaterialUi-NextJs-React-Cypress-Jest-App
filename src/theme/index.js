import { createTheme } from '@material-ui/core/styles';
import { red, green, amber, blueGrey } from '@material-ui/core/colors';

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
      default: amber,
      dark: '#f4f6f8',
      paper: amber,
    },
    text: {
      primary: blueGrey[900],
      secondary: blueGrey[600],
    },
    spacing: 6,
  },
});

export default theme;
