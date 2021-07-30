import { useRouter } from 'next/router';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Box,
  Button,
} from '@material-ui/core';
import NavBar from '../NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.primary.main,
  },
  toolbar: {
    minHeight: 60,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    textDecoration: 'none',
    cursor: 'pointer',
    fontFamily: ['Roboto', 'sans-serif'],
  },
}));

function TopBar() {
  const classes = useStyles();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <Box paddingLeft="20px">
          <Button className={classes.logo} onClick={handleClick}>
            <Typography variant="h6" color="secondary">
              Cocktail Bar
            </Typography>
          </Button>
        </Box>
        <NavBar />
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
