import React, { useEffect, useState } from 'react';
import { Grid, Container, CircularProgress, Button } from '@material-ui/core';
import Cocktail from '../components/Cocktail';
import Header from '../components/Header';
import { useRouter } from 'next/router';

function Redirect({ to }) {
  const router = useRouter();

  useEffect(() => {
    router.push(to);
  }, [to]);

  return null;
}

export default function Home({ data }) {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  if (shouldRedirect) {
    return <Redirect to="/about" />;
  }

  return (
    <div>
      <Container>
        <Header subtitle="All Cocktails" />
        <Button onClick={() => setShouldRedirect(true)}>Redirect</Button>
        {data.length ? (
          <Grid container spacing={2}>
            {data.map((drink) => (
              <Grid item xs={3} key={drink.idDrink}>
                <Cocktail data={drink} />
              </Grid>
            ))}{' '}
          </Grid>
        ) : (
          <CircularProgress />
        )}
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`,
  );
  const data = await res.json();

  return {
    props: {
      data: data.drinks,
    },
  };
}
