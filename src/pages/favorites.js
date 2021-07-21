import { Grid, Container, CircularProgress } from '@material-ui/core';
import CocktailCard from '../components/CocktailCard';
import Header from '../components/Header';

export default function Favorites({ data }) {
  return (
    <div>
      <Container>
        <Header subtitle="My Favorites" />
        {data.length ? (
          <Grid container spacing={2}>
            {data.map((drink) => (
              <Grid item xs={3} key={drink.idDrink}>
                <span data-cy="cocktail-card">
                  <CocktailCard data={drink} />
                </span>
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

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/favCocktails');
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
