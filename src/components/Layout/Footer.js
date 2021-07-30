
import { Link, makeStyles, Box, Container, Grid } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  logo: {
    cursor: 'pointer',
  },
  link: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
  copy: {
    paddingLeft: theme.spacing(2),
    position: 'relative',
    top: '-3px',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer data-cy="footer">
      <hr
        style={{
          borderColor: '#B8860B',
          marginBottom: '0px',
          marginTop: '0px',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          color: '#B8860B',
          backgroundColor: '#FFEFD5',
        }}
        p={2}
      >
        <Container maxWidth="lg">
          <Grid container spacing={9}>
            <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
              <Box borderBottom={1} p={1}>
                Help
              </Box>
              <Box p={1}>
                <Link href="/contact" color="inherit" className={classes.link}>
                  Contact us
                </Link>
              </Box>
              <Box p={1}>
                <Link href="/about" color="inherit" className={classes.link}>
                  About us
                </Link>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              style={{
                textAlign: 'center',
                alignSelf: 'center',
              }}
            >
              <Box style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  className={classes.link}
                >
                  <FacebookIcon />
                </Link>
                <Link
                  href="https://github.com/AliLop/Nextjs-MaterialUi-React-Cocktail-App"
                  target="_blank"
                  className={classes.link}
                >
                  <GitHubIcon />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/aliciahl/"
                  target="_blank"
                  className={classes.link}
                >
                  <LinkedInIcon />
                </Link>
              </Box>
              <Box style={{ textAlign: 'center', paddingTop: '40px' }}>
                <Link
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}
                >
                  <span className={classes.copy}>
                    {'Copyright © '}
                    {new Date().getFullYear()}.
                  </span>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
              <Box borderBottom={1} p={1}>
                Information
              </Box>
              <Box p={1}>
                <Link
                  href="https://nextjs.org/"
                  color="inherit"
                  className={classes.link}
                >
                  Next.js
                </Link>
              </Box>
              <Box p={1}>
                <Link
                  href="https://next.material-ui.com/"
                  color="inherit"
                  className={classes.link}
                >
                  Material Ui
                </Link>
              </Box>
              <Box p={1}>
                <Link
                  href="https://reactjs.org/"
                  color="inherit"
                  className={classes.link}
                >
                  React
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
>>>>>>> main
  );
}

export default Footer;
