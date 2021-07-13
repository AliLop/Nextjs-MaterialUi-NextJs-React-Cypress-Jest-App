import Head from 'next/head';
import { Typography, Container } from '@material-ui/core';
import Link from 'next/link';

// const useStyles = makeStyles((theme)  => ({
//   root: {
//     boxShadow: 'none',
//     zIndex: theme.zIndex.drawer + 1,
//     backgroundColor: theme.palette.primary.main,
//   },
//   toolbar: {
//     minHeight: 64,
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems:'center',
//   },
//   logo: {
//     cursor: 'pointer',
//   },
//   box: {
//     display: 'flex',
//     padding: 8,
//   },
//   minibox: {
//     padding: 8,
//   }      
// }))

function about() {
  // const classes = useStyles();
  
  return (
    <>
      <Head>
          <title>About</title>
          <meta name="Keywords" content="about, web development, programming" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Typography variant="h3" color="textSecondary" align="center">
            About
            <span>
              <h6>Version 1.0.0</h6>
              <Link href="/">Go back</Link>
            </span>
        </Typography>

      </Container>
    </>
  )
}

export default about;