import { render, screen } from '@testing-library/react';
import App from './App';

test('expect heading', () => {
  render(<App />);
  const headerElement = screen.getByRole('heading',{level:1});
  expect(headerElement).toBeInTheDocument();
});
