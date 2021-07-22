import {
  Container,
  Typography,
  Button,
  CardMedia,
  Card,
  CardContent,
  Box,
  CircularProgress,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import { server, idServer } from '../../../config';

function Redirect({ to }) {
  const router = useRouter();

  useEffect(() => {
    router.push(to);
  }, [router, to]);

  return null;
}

export default function CocktailPage({ drinkData }) {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const { isFallback } = useRouter();

  if (shouldRedirect) {
    return <Redirect to="/" />;
  }

  return (
    <Container maxWidth="md">
      {isFallback ? (
        <>
          <Typography variant="h6" color="primary">
            Loading...
          </Typography>
          <br />
          <CircularProgress />
        </>
      ) : (
        <>
          <Header subtitle={`Cocktail ${drinkData.strDrink}`} />
          <Card
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#FFEFD5',
              marginTop: '30px',
            }}
          >
            <CardMedia
              component="img"
              sx={{ height: 140 }}
              title={`cocktail ${drinkData.strDrink}`}
              image={`${drinkData.strDrinkThumb}/preview`}
            />
            <CardContent>
              <Typography
                style={{ display: 'inline-block' }}
                variant="h6"
                color="primary"
              >
                Best served in:
              </Typography>{' '}
              <Typography
                style={{ display: 'inline-block' }}
                variant="body1"
                color="initial"
              >
                {drinkData.strGlass}{' '}
              </Typography>
              <br />
              <br />
              <Typography variant="h6" color="primary">
                Instructions:
              </Typography>
              <Typography variant="body1" color="initial">
                <span data-cy="instructions">{drinkData.strInstructions}</span>{' '}
              </Typography>
            </CardContent>
          </Card>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Box m={4}>
              <span data-cy="back-btn">
                <Button
                  onClick={() => setShouldRedirect(true)}
                  style={{ padding: '20px', color: '#B8860B' }}
                >
                  Go back to Main
                </Button>
              </span>
            </Box>
          </div>
          <br />
        </>
      )}
    </Container>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${server}`);
  const data = await res.json();
  const paths = data.drinks.map((drink) => ({
    params: { id: drink.idDrink.toString() },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const details = await fetch(`${idServer}${id}`);
  const detailsById = await details.json();
  return {
    props: {
      drinkData: detailsById.drinks[0],
    },
    revalidate: 10,
  };
}
