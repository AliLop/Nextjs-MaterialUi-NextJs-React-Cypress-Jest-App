import { Typography, Container, Box, Button, Grid } from '@material-ui/core';
import { useRouter } from 'next/router';
import Header from '../components/Header';

function about() {
  return (
    <Container>
      <Header subtitle="About Cocktail Bar" />
      <Grid container spacing={2} justifyContent="center">
        <Box textAlign="center" my={6}>
          Explore cocktails and get inspired <br />
          <br />
          <br />
          <Typography sx={{ fontSize: '20px' }}>
            Mark any Cocktail as a Favorite!!
          </Typography>
        </Box>
      </Grid>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          onClick={() => router.back()}
          style={{ padding: '20px', color: '#B8860B' }}
        >
          Go back
        </Button>
      </div>
    </Container>
  );
}

export default about;
