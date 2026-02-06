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

const DashboardAnalytics = memo(() => {
  // Memoize filtered logs to avoid recalculating on every render
  const { filterLogs, highCarbonLogs, lowCarbonLogs } = useMemo(() => {
    const filtered = logs.filter((log) => log.carbon > 0);
    const high = filtered.filter((log) => log.carbon >= 4);
    const low = filtered.filter((log) => log.carbon < 4);
    
    return {
      filterLogs: filtered,
      highCarbonLogs: high,
      lowCarbonLogs: low
    };
  }, []); // Empty dependency array since logs is static

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            📊 All Carbon Activities
          </Typography>
          <List>
            {filterLogs.map((log) => (
              <ListItem
                key={log.id}
                sx={{
                  bgcolor: log.carbon >= 4 ? 'error.light' : 'success.light',
                  mb: 1,
                  borderRadius: 1,
                  color: log.carbon >= 4 ? 'error.dark' : 'success.dark'
                }}
              >
                <ListItemText 
                  primary={log.activity}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
                <Chip
                  label={`${log.carbon}kg`}
                  color={log.carbon >= 4 ? "error" : "success"}
                  sx={{ fontWeight: 'bold' }}
                />
              </ListItem>
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
                    <ListItem
                      key={log.id}
                      sx={{
                        bgcolor: 'error.light',
                        mb: 1,
                        borderRadius: 1
                      }}
                    >
                      <ListItemText 
                        primary={log.activity}
                        primaryTypographyProps={{ 
                          color: 'error.dark',
                          fontWeight: 500 
                        }}
                      />
                      <Typography 
                        variant="body1" 
                        sx={{ color: 'error.dark', fontWeight: 'bold' }}
                      >
                        {log.carbon}kg
                      </Typography>
                    </ListItem>
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
                    <ListItem
                      key={log.id}
                      sx={{
                        bgcolor: 'success.light',
                        mb: 1,
                        borderRadius: 1
                      }}
                    >
                      <ListItemText 
                        primary={log.activity}
                        primaryTypographyProps={{ 
                          color: 'success.dark',
                          fontWeight: 500 
                        }}
                      />
                      <Typography 
                        variant="body1" 
                        sx={{ color: 'success.dark', fontWeight: 'bold' }}
                      >
                        {log.carbon}kg
                      </Typography>
                    </ListItem>
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
