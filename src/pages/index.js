import React from 'react';
import { Grid, Container } from '@material-ui/core';
import Cocktail from '../components/Cocktail';
import Header from '../components/Header';

export default function Home({ data }) {
  return (
    <div>
      <Container>
        {/* <Button variant="contained" color="primary">
          Primary
        </Button> */}
        <Header subtitle="All Coktails"></Header>
        <Grid container spacing={2}>
          {data.map((data) => (
            <Grid item xs={3}>
              <Cocktail key={data.idDrink} data={data}></Cocktail>
            </Grid>
          ))}{' '}
        </Grid>
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
