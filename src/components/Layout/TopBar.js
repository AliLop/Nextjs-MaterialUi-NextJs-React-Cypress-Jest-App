import Image from 'next/image';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Box,
  Link,
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
    cursor: 'pointer',
  },
}));

function TopBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <Box>
          <Link href="/">
            <Image
              src="/vercel.svg"
              alt="Logo"
              width={72}
              height={18}
              className={classes.logo}
            />
          </Link>
        </Box>
        <Typography variant="h6" color="secondary">
          Cocktail Bar
        </Typography>
        <NavBar />
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
