import { memo, useMemo } from "react";
import { logs } from "../data/logs";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { TrendingUp, ShowChart, LocalFireDepartment } from "@mui/icons-material";

/**
 * SummaryCard Component
 * Reusable card for displaying metrics
 * Optimized with React.memo for list rendering
 */
const SummaryCard = memo(({ icon: Icon, title, value, subtitle, gradient, color }) => (
  <Card 
    elevation={3}
    sx={{ 
      height: '100%',
      background: gradient,
      color: color,
      transition: 'transform 0.2s, box-shadow 0.2s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: 6
      }
    }}
  >
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Icon sx={{ fontSize: 40, mr: 1 }} />
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
        {value}
      </Typography>
      <Typography variant="body2">{subtitle}</Typography>
    </CardContent>
  </Card>
));

SummaryCard.displayName = 'SummaryCard';

/**
 * DashboardSummary Component
 * Displays key carbon footprint metrics
 * Optimized with useMemo for expensive calculations
 * Uses memoized SummaryCard components to prevent re-renders
 */
const DashboardSummary = memo(() => {
  /**
   * Memoize calculations on static data
   * Prevents recalculation on every render
   * Dependencies: empty array since logs data is static
   */
  const metrics = useMemo(() => {
    const total = logs.reduce((acc, log) => {
      if (log.carbon > 0) acc += log.carbon;
      return acc;
    }, 0);

    const average = (total / logs.length).toFixed(2);
    const highest = logs.reduce((max, log) =>
      log.carbon > max.carbon ? log : max,
    );

    return {
      totalCarbon: total,
      averageCarbon: average,
      highestActivity: highest
    };
  }, []);

  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid item xs={12} md={4}>
        <SummaryCard
          icon={TrendingUp}
          title="Total Carbon"
          value={metrics.totalCarbon}
          subtitle="kg CO₂"
          gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          color="white"
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <SummaryCard
          icon={ShowChart}
          title="Average Carbon"
          value={metrics.averageCarbon}
          subtitle="kg CO₂ per activity"
          gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
          color="white"
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <Card 
          elevation={3}
          sx={{ 
            height: '100%',
            background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            color: 'white',
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 6
            }
          }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocalFireDepartment sx={{ fontSize: 40, mr: 1 }} />
              <Typography variant="h6">Highest Activity</Typography>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              {metrics.highestActivity.activity}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              {metrics.highestActivity.carbon}kg CO₂
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
});

DashboardSummary.displayName = 'DashboardSummary';

export default DashboardSummary;
