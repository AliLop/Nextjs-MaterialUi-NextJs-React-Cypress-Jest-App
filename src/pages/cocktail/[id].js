import {
  Container,
  Typography,
  Button,
  CardMedia,
  Card,
  CardContent,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';

function Redirect({ to }) {
  const router = useRouter();

  useEffect(() => {
    router.push(to);
  }, [router, to]);

  return null;
}

export default function CocktailPage({ drinkData }) {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  if (shouldRedirect) {
    return <Redirect to="/" />;
  }
  return (
    <Container maxWidth="sm">
      <Button onClick={() => setShouldRedirect(true)}>Go back to Main</Button>
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

// Static
// export async function getStaticPaths() {
//   const res = await fetch(
//     `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`,
//   );
//   const data = await res.json();
//   const paths = data.drinks.map((drink) => ({
//     params: { id: drink.idDrink },
//   }));
//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const { id } = params;
//   const details = await fetch(
//     `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
//   );

//   const detailsById = await details.json();
//   // 178341
//   return {
//     props: {
//       drinkData: detailsById.drinks[0],
//     },
//   };
// }

// Server Side
export async function getServerSideProps(context) {
  const details = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${context.params.id}`,
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
