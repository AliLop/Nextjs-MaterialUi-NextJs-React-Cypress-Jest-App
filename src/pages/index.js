import React, { useState } from 'react';
import {
  Grid,
  Container,
  CircularProgress,
  Paper,
  InputBase,
  IconButton,
  makeStyles,
  Box,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CocktailCard from '../components/CocktailCard';
import { favServer, server } from '../config/index';
import Header from '../components/Header';

const useStyles = makeStyles((theme) => ({
  form: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    marginBottom: theme.spacing(4),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Home({ data, favData }) {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState('');

  return (
    <Container>
      <Header subtitle="Cocktail Menu" />
      <Box display="flex" justifyContent="center">
        <Paper component="form" className={classes.form}>
          <InputBase
            className={classes.input}
            placeholder="Search Cocktails"
            inputProps={{ 'aria-label': 'search cocktails' }}
            onChange={(event) => {
              setSearchInput(event.target.value);
            }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
      {data.length ? (
        <Grid container spacing={2}>
          {data
            .filter((val) => {
              if (searchInput === '') {
                return val;
              } else if (
                val.strDrink.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return val;
              }
            })
            .map((drink) => (
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
