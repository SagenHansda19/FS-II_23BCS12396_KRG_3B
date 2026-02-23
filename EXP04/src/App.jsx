import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import "./App.css";

// Lazy load components for code splitting - improves initial load performance
const Login = lazy(() => import("./pages/login.jsx"));
const DashboardLayout = lazy(() => import("./pages/DashboardLayout.jsx"));
const Logs = lazy(() => import("./pages/Logs.jsx"));

// Loading fallback component shown while lazy components load
const LoadingFallback = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      flexDirection: 'column',
      gap: 2
    }}
  >
    <CircularProgress size={60} />
    <Box sx={{ fontSize: '1.2rem', color: 'text.secondary' }}>
      Loading...
    </Box>
  </Box>
);

function App() {
  return (
    <BrowserRouter>
      {/* Suspense provides fallback UI while lazy components load */}
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/logs"
            element={
              <ProtectedRoute>
                <Logs />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
