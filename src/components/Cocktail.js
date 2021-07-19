// /import { useEffect, useState } from 'react';
import {
  CardActionArea,
  Container,
  CardMedia,
  Typography,
  Card,
  CardContent,
} from '@material-ui/core';

function Cocktail({ data }) {
  // const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   const res = await getStaticProps();
  //   const dataResp = await res;

  //   console.log('RESP', dataResp);
  //   return dataResp;
  // };

  // useEffect(() => {
  //   const getData = async () => {
  //     //const dataFromServer = await fetchData();
  //     setData(data);
  //   };

  //   getData();
  // }, []);
  // console.log('DATA const', data);

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
          <CardContent style={{ backgroundColor: '#FFEFD5' }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              align="center"
            >
              {data.strDrink}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}

export default Cocktail;
