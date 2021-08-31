import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutPage from '../pages/about';

describe('About page', () => {
  it('should render', () => {
    if (typeof window !== 'undefined') {
      render(<AboutPage />);

      expect(screen.getByText('About Cocktail Bar')).toBeInTheDocument();

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    }
  });
});
