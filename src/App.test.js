import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./firebase', () => ({
  dbFirebase: {
    collection: jest.fn(() => ({
      add: jest.fn(),
      where: jest.fn(() => ({
        get: jest.fn(() => Promise.resolve({ forEach: jest.fn() })),
      })),
    })),
  },
  auth: {},
  firestore: {},
  storage: {},
}));

test('renders the website home page', () => {
  render(<App />);
  expect(screen.getByText(/rent a car worldwide/i)).toBeInTheDocument();
  expect(screen.getByText(/select a city/i)).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /hosting/i }).length).toBeGreaterThan(0);
});
