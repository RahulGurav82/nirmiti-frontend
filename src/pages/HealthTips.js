import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  FavoriteOutlined,
  RestaurantOutlined,
  SelfImprovement,
  LocalDrink,
  Brightness5,
  NightsStay
} from '@mui/icons-material';

const HealthTips = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const healthTips = [
    {
      title: 'Balanced Diet',
      icon: <RestaurantOutlined sx={{ fontSize: 40 }} />,
      description: 'Follow a balanced diet rich in fruits, vegetables, and whole grains. Include traditional Ayurvedic herbs and spices.',
      color: '#4caf50'
    },
    {
      title: 'Exercise Daily',
      icon: <FavoriteOutlined sx={{ fontSize: 40 }} />,
      description: 'Practice yoga and exercise for at least 30 minutes daily to maintain physical and mental well-being.',
      color: '#f44336'
    },
    {
      title: 'Meditation',
      icon: <SelfImprovement sx={{ fontSize: 40 }} />,
      description: 'Regular meditation helps reduce stress and improve mental clarity. Practice mindfulness daily.',
      color: '#9c27b0'
    },
    {
      title: 'Stay Hydrated',
      icon: <LocalDrink sx={{ fontSize: 40 }} />,
      description: 'Drink plenty of water throughout the day. Consider warm water with herbs for better digestion.',
      color: '#2196f3'
    },
    {
      title: 'Morning Routine',
      icon: <Brightness5 sx={{ fontSize: 40 }} />,
      description: 'Wake up early and follow dinacharya (daily routine) as per Ayurvedic principles.',
      color: '#ff9800'
    },
    {
      title: 'Quality Sleep',
      icon: <NightsStay sx={{ fontSize: 40 }} />,
      description: 'Get 7-8 hours of quality sleep. Follow a consistent sleep schedule for better health.',
      color: '#3f51b5'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography
        variant={isMobile ? 'h4' : 'h3'}
        component="h1"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', mb: 4 }}
      >
        Ayurvedic Health Tips
      </Typography>

      <Grid container spacing={3}>
        {healthTips.map((tip, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                }
              }}
            >
              <Box
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: `${tip.color}15`
                }}
              >
                <IconButton
                  sx={{
                    color: tip.color,
                    transform: 'scale(1.5)',
                    '&:hover': { backgroundColor: 'transparent' }
                  }}
                  disableRipple
                >
                  {tip.icon}
                </IconButton>
              </Box>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ color: tip.color, fontWeight: 500 }}
                >
                  {tip.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {tip.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HealthTips;
