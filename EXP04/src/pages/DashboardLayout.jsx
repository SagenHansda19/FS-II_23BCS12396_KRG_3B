import { memo, useMemo } from "react";
import Header from "../components/Header";
import DashboardSummary from "./DashboardSummary";
import DashboardAnalytics from "./DashboardAnalytics";
import { Container, Typography, Box } from "@mui/material";

/**
 * DashboardLayout Component
 * Main dashboard page that displays summary and analytics
 * Optimized with React.memo to prevent unnecessary re-renders
 * Uses lazy-loaded child components for better performance
 */
const DashboardLayout = memo(() => {
  // Memoize header content to prevent unnecessary recalculation
  const headerConfig = useMemo(() => ({
    mainTitle: "🌱 EcoTrack Dashboard",
    subtitle: "Track and analyze your carbon footprint"
  }), []);

  return (
    <Box>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={{ fontWeight: 700, mb: 1 }}
        >
          {headerConfig.mainTitle}
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary" 
          sx={{ mb: 4 }}
        >
          {headerConfig.subtitle}
        </Typography>
        <DashboardSummary />
        <DashboardAnalytics />
      </Container>
    </Box>
  );
});

DashboardLayout.displayName = 'DashboardLayout';

export default DashboardLayout;
