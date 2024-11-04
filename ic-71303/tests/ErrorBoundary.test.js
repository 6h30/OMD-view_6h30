import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';
import MyComponent from './MyComponent';

test('ErrorBoundary catches errors', () => {
  const ErrorComponent = () => {
    throw new Error('Error!');
  };

  render(
    <ErrorBoundary>
      <ErrorComponent />
    </ErrorBoundary>
  );

  expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
});
