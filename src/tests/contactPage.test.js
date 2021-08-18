import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactPage from '../pages/contact';

describe('Contact page', () => {
  it('should render', () => {
    if (typeof window !== 'undefined') {
      render(<ContactPage />);

      const header = screen.getByText('Contact Us');
      expect(header).toBeInTheDocument();

      const formNameField = screen.getByLabelText('Full Name');
      expect(formNameField).toBeInTheDocument();

      const button = screen.getByText('Go back');
      expect(button).toBeInTheDocument();

      console.log('rendering contact');
    }
  });
});
