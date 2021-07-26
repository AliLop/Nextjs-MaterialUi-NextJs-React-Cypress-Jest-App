import React from 'react';
import { Grid, Container, CircularProgress } from '@material-ui/core';
import CocktailCard from '../components/CocktailCard';
import { favServer, server } from '../config';
import Header from '../components/Header';

export default function Home({ data, favData }) {
  return (
    <Container>
      <Header subtitle="Cocktail Menu" />
      {data.length ? (
        <Grid container spacing={2}>
          {data.map((drink) => (
            <Grid item xs={3} key={drink.idDrink}>
              <span data-cy="cocktail-card">
                <CocktailCard
                  data={drink}
                  fav={
                    favData.filter(
                      (cocktail) => cocktail.idDrink === drink.idDrink,
                    ).length > 0
                  }
                />
              </span>
            </Grid>
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${server}`);
  const data = await res.json();

  const resp = await fetch(`${favServer}`);
  const favData = await resp.json();

  return {
    props: {
      data: data.drinks,
      favData,
    },
  };
}
