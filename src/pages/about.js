import Head from 'next/head';
import { Typography, Container } from '@material-ui/core';
import Link from 'next/link';

function about() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="Keywords" content="about, web development, programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div style={{ margin: '50px 0' }}>
          <Typography variant="h4" color="textSecondary" align="center">
            About
          </Typography>
        </div>
        <Typography variant="h6" color="textPrimary" align="center">
          Version 1.0.0
        </Typography>
        <br />
        <Typography variant="h6" color="textSecondary" align="center">
          <Link href="/" passHref>
            <span style={{ textDecoration: 'none', cursor: 'pointer' }}>
              Go back
            </span>
          </Link>
        </Typography>
      </Container>
    </>
  );
}

export default about;
