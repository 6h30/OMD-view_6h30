import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  test('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText(/some text/i)).toBeInTheDocument();
  });

  test('handles click event', () => {
    render(<MyComponent />);
    const button = screen.getByRole('button');
    button.click();
    expect(screen.getByText(/button clicked/i)).toBeInTheDocument();
  });
});
