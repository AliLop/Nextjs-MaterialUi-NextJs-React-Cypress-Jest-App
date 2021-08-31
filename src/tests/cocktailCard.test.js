import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CocktailCard from '../components/CocktailCard';

const drink = {
  strDrink: '9 1/2 Weeks',
  strDrinkThumb:
    'https://www.thecocktaildb.com/images/media/drink/xvwusr1472669302.jpg',
  idDrink: '16108',
};

describe('CocktailCard', () => {
  it('should render', () => {
    if (typeof window !== 'undefined') {
      render(<CocktailCard data={drink} />);

      expect(
        screen.getByRole('img', { name: 'cocktail 9 1/2 Weeks' }),
      ).toBeVisible();

      const link = screen.getByRole('link', { name: 'Details' });
      expect(link).toBeVisible();

      const icon = screen.getByTestId('favIcon');
      expect(icon).toBeVisible();

      const button = screen.getByTestId('addFavIcon');
      fireEvent.click(button);
      expect(screen.findByText('Remove'));
    }
  });
});
