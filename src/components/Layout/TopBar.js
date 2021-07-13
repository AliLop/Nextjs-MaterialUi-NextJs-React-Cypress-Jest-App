import Image from 'next/image'

import Typography from '@material-ui/core/Typography';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { Box, Link } from '@material-ui/core';
import NavBar from './Nav';

const useStyles = makeStyles((theme)  => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.primary.main,
  },
  toolbar: {
    minHeight: 64,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  logo: {
    cursor: 'pointer',
  },
  box: {
    display: 'flex',
    padding: 8,
  },
  minibox: {
    padding: 8,
  }      
}))

function TopBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <Box>
          {/* <MenuIcon /> */}
          <Link href='/'>
            <Image src="/vercel.svg" alt="Logo" width={72} height={18} className={classes.logo} />
          </Link>
        </Box>
        <Box>
          <Typography color="secondary">
            My NextJs App
          </Typography>
        </Box>
        <NavBar></NavBar>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;