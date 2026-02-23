import { memo, useMemo } from "react";
import { logs } from "../data/logs";
import { 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  List, 
  ListItem, 
  ListItemText,
  Box,
  Chip
} from "@mui/material";
import { CheckCircle, Warning } from "@mui/icons-material";

/**
 * ActivityListItem Component
 * Reusable memoized list item for displaying activities
 * Prevents unnecessary re-renders when activity data hasn't changed
 */
const ActivityListItem = memo(({ log, variant = "default" }) => {
  const isHighCarbon = log.carbon >= 4;
  const bgColor = variant === "default" 
    ? (isHighCarbon ? 'error.light' : 'success.light')
    : variant === "high"
    ? 'error.light'
    : 'success.light';
  
  const textColor = variant === "default"
    ? (isHighCarbon ? 'error.dark' : 'success.dark')
    : variant === "high"
    ? 'error.dark'
    : 'success.dark';

  return (
    <ListItem
      sx={{
        bgcolor: bgColor,
        mb: 1,
        borderRadius: 1,
        color: textColor
      }}
    >
      <ListItemText 
        primary={log.activity}
        primaryTypographyProps={{ fontWeight: 500 }}
      />
      {variant === "default" && (
        <Chip
          label={`${log.carbon}kg`}
          color={isHighCarbon ? "error" : "success"}
          sx={{ fontWeight: 'bold' }}
        />
      )}
      {(variant === "high" || variant === "low") && (
        <Typography 
          variant="body1" 
          sx={{ color: textColor, fontWeight: 'bold' }}
        >
          {log.carbon}kg
        </Typography>
      )}
    </ListItem>
  );
});

ActivityListItem.displayName = 'ActivityListItem';

/**
 * DashboardAnalytics Component
 * Displays detailed carbon activity analytics
 * Optimized with useMemo for data filtering
 * Uses memoized child components for list items
 */
const DashboardAnalytics = memo(() => {
  /**
   * Memoize filtered logs to avoid recalculating on every render
   * Dependencies: empty array since logs is static
   */
  const { filterLogs, highCarbonLogs, lowCarbonLogs } = useMemo(() => {
    const filtered = logs.filter((log) => log.carbon > 0);
    const high = filtered.filter((log) => log.carbon >= 4);
    const low = filtered.filter((log) => log.carbon < 4);
    
    return {
      filterLogs: filtered,
      highCarbonLogs: high,
      lowCarbonLogs: low
    };
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            📊 All Carbon Activities
          </Typography>
          <List>
            {filterLogs.map((log) => (
              <ActivityListItem key={log.id} log={log} variant="default" />
            ))}
          </List>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card 
            elevation={3}
            sx={{ 
              height: '100%',
              border: '2px solid',
              borderColor: 'error.main'
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Warning sx={{ color: 'error.main', fontSize: 32, mr: 1 }} />
                <Typography variant="h6" sx={{ color: 'error.main', fontWeight: 600 }}>
                  High Carbon Activities
                </Typography>
              </Box>
              {highCarbonLogs.length > 0 ? (
                <List>
                  {highCarbonLogs.map((log) => (
                    <ActivityListItem key={log.id} log={log} variant="high" />
                  ))}
                </List>
              ) : (
                <Typography variant="body1" align="center" sx={{ py: 2, color: 'text.secondary' }}>
                  ✅ No high carbon activities
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card 
            elevation={3}
            sx={{ 
              height: '100%',
              border: '2px solid',
              borderColor: 'success.main'
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <CheckCircle sx={{ color: 'success.main', fontSize: 32, mr: 1 }} />
                <Typography variant="h6" sx={{ color: 'success.main', fontWeight: 600 }}>
                  Low Carbon Activities
                </Typography>
              </Box>
              {lowCarbonLogs.length > 0 ? (
                <List>
                  {lowCarbonLogs.map((log) => (
                    <ActivityListItem key={log.id} log={log} variant="low" />
                  ))}
                </List>
              ) : (
                <Typography variant="body1" align="center" sx={{ py: 2, color: 'text.secondary' }}>
                  No low carbon activities
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
});

DashboardAnalytics.displayName = 'DashboardAnalytics';

export default DashboardAnalytics;
