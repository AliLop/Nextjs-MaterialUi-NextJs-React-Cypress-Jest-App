import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '../components/ContactForm';

describe('ContactForm', () => {
  it('should render', () => {
    if (typeof window !== 'undefined') {
      render(<ContactForm />);

      const inputName = screen.getByLabelText('Full Name');
      fireEvent.change(inputName, { target: { value: 'MARIA' } });
      expect(inputName).toHaveValue('MARIA');
      expect(inputName).toBeInTheDocument();
      expect(inputName).toBeVisible();

      const submitBtn = screen.getByRole('button', { name: 'Send Message' });
      expect(submitBtn).toBeVisible();
      expect(submitBtn).toBeInTheDocument();
      expect(submitBtn).toBeDisabled();

      const inputEmail = screen.getByLabelText('Email');
      fireEvent.change(inputEmail, { target: { value: 'a@example.com' } });
      expect(inputEmail).toHaveValue('a@example.com');
      expect(inputEmail).toBeVisible();

      const inputMessage = screen.getByLabelText('Message');
      fireEvent.change(inputMessage, { target: { value: 'Any message' } });
      expect(inputMessage).toHaveValue('Any message');
      expect(inputMessage).toBeInTheDocument();
      expect(inputMessage).toBeVisible();

      fireEvent.click(submitBtn);
      expect(screen.findByText('Thank you for reaching out to us!'));
    }
  });
});
