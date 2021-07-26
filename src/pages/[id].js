import { Container, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Header from '../components/Header';

export default function cocktailPage({ drinkData }) {
  return (
    <Container maxWidth="sm">
      <Header subtitle={`Cocktail ${drinkData.strDrink}`} />
      <Card>
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          title={`cocktail ${drinkData.strDrink}`}
          image={`${drinkData.strDrinkThumb}/preview`}
        />
        <CardContent>
          <Typography variant="body1" color="primary">
            Best served in: {drinkData.strGlass}
          </Typography>
          <Typography variant="body1" color="primary">
            Instructions: <br />
            {drinkData.strInstructions}
          </Typography>
        </CardContent>
      </Card>
      <br />
    </Container>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`,
  );
  const data = await res.json();

  const paths = data.drinks.map((drink) => ({
    params: { id: drink.idDrink },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const details = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  const detailsById = await details.json();

  // 178341
  // console.log('detailsbyid', detailsById);

  return {
    props: {
      drinkData: detailsById.drinks[0],
    },
  };
}
