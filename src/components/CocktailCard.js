import { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import {
  CardActionArea,
  Container,
  CardMedia,
  Card,
  CardContent,
  Button,
  Box,
  makeStyles,
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { favServer } from '../config';

const useStyles = makeStyles(() => ({
  cardContent: {
    fontSize: '20px',
    height: '68px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  btn: {
    width: '133px',
    paddingBottom: '8px',
  },
}));

function CocktailCard({ data, fav }) {
  const classes = useStyles();
  const [isFav, setIsFav] = useState(fav);

  const addFav = async (drink) => {
    await fetch(`${favServer}`, {
      body: JSON.stringify({
        strDrink: drink.strDrink,
        strDrinkThumb: drink.strDrinkThumb,
        idDrink: drink.idDrink,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    setIsFav(true);
  };

  const remFav = async (drink) => {
    await fetch(`${favServer}`, {
      body: JSON.stringify({
        strDrink: drink.strDrink,
        strDrinkThumb: drink.strDrinkThumb,
        idDrink: drink.idDrink,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    });
    setIsFav(false);
    if (window.location.pathname !== '/') {
      Router.reload();
    }
  };

  return (
    <Container maxWidth="xs">
      <Card sx={{ maxWidth: 150 }}>
        <CardActionArea href={`/cocktail/${data.idDrink}`} as="/cocktail/[id]">
          <CardMedia
            component="img"
            sx={{ height: 140 }}
            title={`cocktail ${data.strDrink}`}
            image={`${data.strDrinkThumb}/preview`}
          />
          <CardContent className={classes.cardContent}>
            <span data-cy="cocktail-name">{data.strDrink}</span>
          </CardContent>
        </CardActionArea>
        <Box display="flex" justifyContent="space-between">
          <Link href={`/cocktail/${data.idDrink}`} passHref>
            <Button className={classes.btn}>Details</Button>
          </Link>
          {isFav ? (
            <Button
              onClick={() => remFav(data)}
              className={classes.btn}
              style={{ backgroundColor: 'rgba(38, 50, 56, 0.04)' }}
            >
              Remove
              <FavoriteIcon style={{ paddingLeft: '1px' }} />
            </Button>
          ) : (
            <Button
              onClick={() => addFav(data)}
              className={classes.btn}
              style={{ backgroundColor: 'rgba(38, 50, 56, 0.04)' }}
              data-testid="addFavIcon"
            >
              <FavoriteBorderIcon
                data-testid="favIcon"
                style={{ paddingLeft: '3px' }}
              />
            </Button>
          )}
        </Box>
      </Card>
    </Container>
  );
}

export default CocktailCard;
