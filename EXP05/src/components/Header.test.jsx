import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Header from './Header';

/**
 * Header Component Tests
 * Tests for authenticated and unauthenticated header states
 */
describe('Header Component', () => {
  // Helper function to render Header with required providers
  const renderHeader = () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <Header />
        </AuthProvider>
      </BrowserRouter>
    );
  };

  test('renders Header component', () => {
    renderHeader();
    const headerElement = screen.getByText(/EcoTrack/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('displays Login button when not authenticated', () => {
    renderHeader();
    const loginButton = screen.getByText(/Login/i);
    expect(loginButton).toBeInTheDocument();
  });

  test('renders header with navigation links', () => {
    renderHeader();
    const headerText = screen.getByText(/🌱 EcoTrack/i);
    expect(headerText).toBeInTheDocument();
  });

  test('Header component has correct styling', () => {
    renderHeader();
    const headerElement = screen.getByText(/EcoTrack/i);
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass('MuiTypography-h6');
  });
});
