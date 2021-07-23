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
import { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';

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

  const addFav = async (data) => {
    await fetch(`${favServer}`, {
      body: JSON.stringify({
        strDrink: data.strDrink,
        strDrinkThumb: data.strDrinkThumb,
        idDrink: data.idDrink,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    setIsFav(true);
  };

  const remFav = async (data) => {
    await fetch(`${favServer}`, {
      body: JSON.stringify({
        strDrink: data.strDrink,
        strDrinkThumb: data.strDrinkThumb,
        idDrink: data.idDrink,
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
        <Box display={'flex'} justifyContent={'space-between'}>
          <Link href={`/cocktail/${data.idDrink}`} passHref>
            <Button className={classes.btn}>See details</Button>
          </Link>
          {isFav ? (
            <Button onClick={() => remFav(data)} className={classes.btn}>
              Remove
              <FavoriteIcon style={{ paddingLeft: '1px' }} />
            </Button>
          ) : (
            <Button onClick={() => addFav(data)} className={classes.btn}>
              Add Fav
              <FavoriteBorderIcon style={{ paddingLeft: '3px' }} />
            </Button>
          )}
        </Box>
      </Card>
    </Container>
  );
}

export default CocktailCard;
