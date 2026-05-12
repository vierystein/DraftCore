// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DraftCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DraftCore/i);
    expect(titleElement).toBeInTheDocument();
});
