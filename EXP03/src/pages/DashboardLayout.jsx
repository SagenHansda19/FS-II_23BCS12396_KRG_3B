import { memo } from "react";
import Header from "../components/Header";
import DashboardSummary from "./DashboardSummary";
import DashboardAnalytics from "./DashboardAnalytics";
import { Container, Typography, Box } from "@mui/material";

const DashboardLayout = memo(() => {
  return (
    <Box>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={{ fontWeight: 700, mb: 1 }}
        >
          🌱 EcoTrack Dashboard
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary" 
          sx={{ mb: 4 }}
        >
          Track and analyze your carbon footprint
        </Typography>
        <DashboardSummary />
        <DashboardAnalytics />
      </Container>
    </Box>
  );
});

DashboardLayout.displayName = 'DashboardLayout';

export default DashboardLayout;
