import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Grid, Container, Box, Typography, Button } from '@material-ui/core';
import CocktailCard from '../components/CocktailCard';
import Header from '../components/Header';
import { favServer } from '../config';

function Redirect({ to }) {
  const router = useRouter();

  useEffect(() => {
    router.push(to);
  }, [router, to]);

  return null;
}

export default function Favorites({ data }) {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  if (shouldRedirect) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Container>
        <Header subtitle="My Favorites" />
        {data.length ? (
          <Grid container spacing={2}>
            {data.map((drink) => (
              <Grid item xs={3} key={drink.idDrink}>
                <span data-cy="cocktail-card">
                  <CocktailCard data={drink} fav />
                </span>
              </Grid>
            ))}{' '}
          </Grid>
        ) : (
          <Grid container spacing={2} justifyContent="center">
            <Box textAlign="center" my={6}>
              Oops... <br />
              <br />
              It seems you have not yet marked any Cocktail as a Favorite.
              <br />
              <br />
              <Typography sx={{ fontSize: '20px' }}>
                Add some Cocktails to your Favorites!!
              </Typography>
              <Button
                onClick={() => setShouldRedirect(true)}
                style={{ padding: '20px', color: '#B8860B' }}
              >
                Go back to Main
              </Button>
            </Box>
          </Grid>
        )}
      </Container>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${favServer}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
