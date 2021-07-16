import React from 'react';
import { Grid, Container, CircularProgress } from '@material-ui/core';
import Cocktail from '../components/Cocktail';
import Header from '../components/Header';

export default function Home({ data }) {
  return (
    <div>
      <Container>
        <Header subtitle="All Cocktails" />
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
