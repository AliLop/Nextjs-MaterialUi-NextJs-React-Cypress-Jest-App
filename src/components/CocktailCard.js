import {
  CardActionArea,
  Container,
  CardMedia,
  Typography,
  Card,
  CardContent,
} from '@material-ui/core';

function CocktailCard({ data }) {
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
              <span data-cy="cocktail-name">{data.strDrink}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}

export default CocktailCard;
