import Typography from '@material-ui/core/Typography';
import Image from 'next/image'
import { Box, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)  => ({
  footer: {
    minHeight: 64,
    display: 'flex',
    justifyContent: 'center',
    padding: 10,
  },
  logo: {
    cursor: 'pointer',
    paddingTop: -15,
  },
  copy: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3
  }     
}))


function Footer() {
  const classes = useStyles();

    return (
      <Box pb={2} className={classes.footer}>
        <Typography variant="body2" color="textPrimary" align="center">
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit" 
        >
          <span className={classes.copy}>
          Powered by{' '}
          </span>
          <span>
          <Image src="/vercel.svg" alt="Logo" width={72} height={18} className={classes.logo} />
          </span>
        </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center" className={classes.copy}>
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
      </Box>
    )
}

export default Footer;