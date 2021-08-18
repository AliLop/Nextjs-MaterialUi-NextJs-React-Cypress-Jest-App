import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

const subtitle = 'Test subtitle';

describe('Header subtitle', () => {
  it('accepts props', () => {
    if (typeof window !== 'undefined') {
      render(<Header subtitle={subtitle} />);

      expect(screen.getByRole('heading', { name: 'Test subtitle' }));
      console.log('rendering header');
    }
  });
});
