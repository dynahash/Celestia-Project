import React from 'react';
import { render, screen } from '@testing-library/react';
import Teste from './Teste';

test('renders learn react link', () => {
  render(<Teste />);
  const linkElement = screen.getByText(/Olá mundo!/i);
  expect(linkElement).toBeInTheDocument();
});
