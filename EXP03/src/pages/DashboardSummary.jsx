import { memo, useMemo } from "react";
import { logs } from "../data/logs";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { TrendingUp, ShowChart, LocalFireDepartment } from "@mui/icons-material";

const DashboardSummary = memo(() => {
  // Memoize expensive calculations to avoid recalculating on every render
  const { totalCarbon, averageCarbon, highestActivity } = useMemo(() => {
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
  }, []); // Empty dependency array since logs is static

  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid item xs={12} md={4}>
        <Card 
          elevation={3}
          sx={{ 
            height: '100%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white'
          }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <TrendingUp sx={{ fontSize: 40, mr: 1 }} />
              <Typography variant="h6">Total Carbon</Typography>
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
              {totalCarbon}
            </Typography>
            <Typography variant="body2">kg CO₂</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card 
          elevation={3}
          sx={{ 
            height: '100%',
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            color: 'white'
          }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <ShowChart sx={{ fontSize: 40, mr: 1 }} />
              <Typography variant="h6">Average Carbon</Typography>
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
              {averageCarbon}
            </Typography>
            <Typography variant="body2">kg CO₂ per activity</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card 
          elevation={3}
          sx={{ 
            height: '100%',
            background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            color: 'white'
          }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocalFireDepartment sx={{ fontSize: 40, mr: 1 }} />
              <Typography variant="h6">Highest Activity</Typography>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              {highestActivity.activity}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              {highestActivity.carbon}kg CO₂
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
});

DashboardSummary.displayName = 'DashboardSummary';

export default DashboardSummary;
