import { memo, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Dashboard, Assignment, Logout, Login as LoginIcon } from "@mui/icons-material";

// Memoized component to prevent unnecessary re-renders
const Header = memo(() => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Memoize handleLogout callback to prevent recreation on every render
  const handleLogout = useCallback(() => {
    setIsAuthenticated(false);
    navigate("/login");
  }, [setIsAuthenticated, navigate]);

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'primary.dark' }}>
      <Toolbar sx={{ maxWidth: '1200px', width: '100%', mx: 'auto', px: 3 }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ 
            flexGrow: 1, 
            textDecoration: 'none', 
            color: 'inherit',
            fontWeight: 600,
            letterSpacing: 1
          }}
        >
          🌱 EcoTrack
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          {isAuthenticated ? (
            <>
              <Button
                component={Link}
                to="/"
                color="inherit"
                startIcon={<Dashboard />}
              >
                Dashboard
              </Button>
              <Button
                component={Link}
                to="/logs"
                color="inherit"
                startIcon={<Assignment />}
              >
                Logs
              </Button>
              <Button
                onClick={handleLogout}
                color="error"
                variant="contained"
                startIcon={<Logout />}
                sx={{ ml: 1 }}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              component={Link}
              to="/login"
              color="inherit"
              startIcon={<LoginIcon />}
            >
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
});

// Display name for debugging
Header.displayName = 'Header';

export default Header;
