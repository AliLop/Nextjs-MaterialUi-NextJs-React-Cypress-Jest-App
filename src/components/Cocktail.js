// /import { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea, Container } from '@material-ui/core';

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
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ height: 140 }}
            title={`cocktail ${data.strDrink}`}
            image={`${data.strDrinkThumb}/preview`}
          />
          <CardContent>
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
