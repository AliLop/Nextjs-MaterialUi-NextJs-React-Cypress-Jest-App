import Head from 'next/head';
import { Typography, Container, Box, Button } from '@material-ui/core';
import { useRouter } from 'next/router';
import Header from '../components/Header';

function About() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>About</title>
        <meta name="Keywords" content="about, web development, programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header subtitle="About" />
        <Typography variant="h6" color="textPrimary" align="center">
          Version 1.0.0
        </Typography>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Box m={4}>
            <Button
              onClick={() => router.back()}
              style={{ padding: '20px', color: '#B8860B' }}
            >
              Go back
            </Button>
          </Box>
        </div>
      </Container>
    </>
  );
}

export default About;
