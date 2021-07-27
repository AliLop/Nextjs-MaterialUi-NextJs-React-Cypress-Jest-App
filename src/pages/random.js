import React from 'react';
import { apiService } from '../service/cocktailApi.js';
import { useEffect, useState } from 'react';
import { Container, Box } from '@material-ui/core';
import Header from '../components/Header';

function Random({ data }) {
  async function getStaticProps() {
    const data = await apiService.getRandom();
    return {
      props: {
        data,
      },
    };
  }

  const [drink, setDrink] = useState(data);

  const fetchDrink = async () => {
    const res = await getStaticProps();
    const dataResp = await res;

    console.log('RESP', dataResp);
    return dataResp;
  };

  useEffect(() => {
    const getDrink = async () => {
      const dataFromServer = await fetchDrink();
      setDrink(dataFromServer);
    };

    getDrink();
  }, []);

  return (
    <Container>
      <Header subtitle="Random Cocktail" />
      <Box> HEREE </Box>
      <p>{drink}</p>
    </Container>
  );
}

export default Random;
