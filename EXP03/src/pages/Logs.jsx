import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogs } from "../store/logsSlice";
import Header from "../components/Header";
import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  List, 
  ListItem, 
  ListItemText,
  Box,
  CircularProgress,
  Alert,
  Chip
} from "@mui/material";
import { Eco, Warning, CheckCircle } from "@mui/icons-material";

const Logs = () => {
  const dispatch = useDispatch();
  const { logs: data, status, error } = useSelector((state) => state.logs);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchLogs());
    }
  }, [status, dispatch]);

  // Memoize expensive calculations to prevent recalculation on every render
  const { logEntries, filterLogs, highCarbonLogs, lowCarbonLogs } = useMemo(() => {
    const total = data.reduce((acc, log) => {
      if (log.carbon > 0) acc += log.carbon;
      return acc;
    }, 0);
    
    const filtered = data.filter((log) => log.carbon > 0);
    const high = filtered.filter((log) => log.carbon >= 4);
    const low = filtered.filter((log) => log.carbon < 4);

    return {
      logEntries: total,
      filterLogs: filtered,
      highCarbonLogs: high,
      lowCarbonLogs: low
    };
  }, [data]); // Recalculate only when data changes

  if (status === 'failed') {
    return (
      <Box>
        <Header />
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Alert severity="error">Error: {error}</Alert>
        </Container>
      </Box>
    );
  }
  
  if (status === 'loading') {
    return (
      <Box>
        <Header />
        <Container maxWidth="lg" sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <CircularProgress size={60} />
        </Container>
      </Box>
    );
  }

  return (
    <Box>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography 
          variant="h3" 
          align="center" 
          gutterBottom 
          sx={{ fontWeight: 700, mb: 4, mt: 3 }}
        >
          📋 Activity Logs
        </Typography>

        <Card 
          elevation={4}
          sx={{ 
            mb: 4,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white'
          }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Eco sx={{ fontSize: 48, mr: 2 }} />
              <Box>
                <Typography variant="h6" gutterBottom>
                  Total Carbon Footprint
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                  {logEntries} kg CO₂
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Card elevation={3} sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              🌍 All Activities
            </Typography>
            {filterLogs.length > 0 ? (
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
            ) : (
              <Typography variant="body1" align="center" sx={{ py: 2, color: 'text.secondary' }}>
                No activities logged
              </Typography>
            )}
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
      </Container>
    </Box>
  );
};

export default Logs;
