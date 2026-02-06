import { memo, useCallback } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { 
  Box, 
  Button, 
  Card, 
  CardContent, 
  Typography, 
  Container 
} from "@mui/material";
import { Login as LoginIcon, Eco } from "@mui/icons-material";

const Login = memo(() => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Memoize handleLogin callback to prevent recreation on every render
  const handleLogin = useCallback(() => {
    setIsAuthenticated(true);
    navigate("/");
  }, [setIsAuthenticated, navigate]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        p: 2
      }}
    >
      <Container maxWidth="sm">
        <Card 
          elevation={10}
          sx={{ 
            borderRadius: 3,
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              py: 4,
              textAlign: 'center'
            }}
          >
            <Eco sx={{ fontSize: 80, mb: 2 }} />
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              EcoTrack
            </Typography>
            <Typography variant="h6" sx={{ mt: 1, opacity: 0.9 }}>
              Monitor Your Carbon Footprint
            </Typography>
          </Box>
          
          <CardContent sx={{ p: 4 }}>
            <Typography 
              variant="h5" 
              align="center" 
              gutterBottom
              sx={{ mb: 3, fontWeight: 600 }}
            >
              Welcome Back
            </Typography>
            
            <Typography 
              variant="body1" 
              align="center" 
              color="text.secondary"
              sx={{ mb: 4 }}
            >
              Track your environmental impact and make sustainable choices
            </Typography>
            
            <Button
              onClick={handleLogin}
              variant="contained"
              size="large"
              fullWidth
              startIcon={<LoginIcon />}
              sx={{
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                }
              }}
            >
              Login to EcoTrack
            </Button>
            
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography variant="caption" color="text.secondary">
                Join thousands making a difference 🌍
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
});

Login.displayName = 'Login';

export default Login;
