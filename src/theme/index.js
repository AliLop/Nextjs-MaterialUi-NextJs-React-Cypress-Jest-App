import { createTheme } from '@material-ui/core/styles';
import { red, blueGrey } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#B8860B',
    },
    secondary: {
      main: '#FAFAD2',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#D3D3D3',
      dark: '#f4f6f8',
      paper: '#FFF0F5',
    },
    text: {
      primary: blueGrey[900],
      secondary: '#DAA520',
      initial: '#f4f6f8',
    },
  },
  spacing: 6,
  typography: {
    fontFamily: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
});

export default theme;
