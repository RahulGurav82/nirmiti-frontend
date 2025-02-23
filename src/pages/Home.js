import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const features = [
    {
      title: 'Traditional Treatments',
      description: 'Experience authentic Ayurvedic treatments passed down through generations',
      image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&auto=format&fit=crop'
    },
    {
      title: 'Expert Consultation',
      description: 'Get personalized advice from our experienced Ayurvedic practitioners',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop'
    },
    {
      title: 'Natural Remedies',
      description: 'Pure and natural herbs and medicines for holistic healing',
      image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="home">
      <Box className="hero-section">
        <Container maxWidth="lg">
          <Typography 
            variant={isMobile ? "h3" : "h2"} 
            component="h1"
            sx={{ 
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Welcome to AyurCare
          </Typography>
          <Typography 
            variant={isMobile ? "h6" : "h5"} 
            sx={{ 
              my: 3,
              maxWidth: '800px',
              margin: '20px auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            Your Journey to Natural Healing Starts Here
          </Typography>
          <Button
            component={Link}
            to="/appointment"
            variant="contained"
            color="primary"
            size="large"
            sx={{
              mt: 2,
              py: 1.5,
              px: 4,
              fontSize: '1.1rem',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Book Appointment
          </Button>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Typography 
          variant={isMobile ? "h4" : "h3"} 
          component="h2" 
          align="center" 
          sx={{ 
            mb: { xs: 4, md: 6 },
            fontWeight: 'bold'
          }}
        >
          Our Services
        </Typography>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card 
                className="feature-card"
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
                <CardMedia
                  component="img"
                  height={isMobile ? "200" : "240"}
                  image={feature.image}
                  alt={feature.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h3"
                    sx={{ fontWeight: '500' }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
