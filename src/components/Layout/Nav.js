import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import { Box, Link } from '@material-ui/core';

const useStyles = makeStyles(()  => ({
  box: {
    display: 'flex',
    padding: 8,
  },
  minibox: {
    padding: 8,
  }      
}))

function NavBar() {
  const classes = useStyles();

  return (
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
  );
}

export default NavBar;