import { render, screen } from '@testing-library/react';
import { SobreNos } from './index';

test('renders learn react link', () => {
  render(<SobreNos/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
