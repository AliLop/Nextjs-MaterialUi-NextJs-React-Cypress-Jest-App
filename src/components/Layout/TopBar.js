import Image from 'next/image'

import Typography from '@material-ui/core/Typography';
import { AppBar, Toolbar, IconButton, makeStyles } from '@material-ui/core';
import { Box, Link } from '@material-ui/core';
//import MenuIcon from '@material-ui/icons/Menu';

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
        <Box className={classes.box}>
          <Box className={classes.minibox}>
            <Link href='/'><Typography color="secondary">
              Home 
            </Typography></Link>
          </Box>
          <Box className={classes.minibox}>
            <Link href='/about'><Typography color="secondary">
              About
            </Typography></Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;