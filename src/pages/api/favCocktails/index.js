import { favDrinks } from '../../../data';

export default function handler(req, res) {
  try {
    const { method } = req;
    const { strDrink, strDrinkThumb, idDrink } = req.body;
    const i = favDrinks.findIndex((drink) => drink.idDrink === idDrink);

    switch (method) {
      case 'GET':
        res.status(200).json(favDrinks);
        break;
      case 'POST':
        if (i === -1) {
          favDrinks.push({
            strDrink,
            strDrinkThumb,
            idDrink,
          });
        }
        res.status(200).json(favDrinks);
        break;
      case 'DELETE':
        if (i > -1) {
          favDrinks.splice(i, 1);
        }
        res.status(200).json(favDrinks);
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
        res.status(405).end(`Method ${method} not allowed`);
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
