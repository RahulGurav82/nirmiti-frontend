import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import DoctorProfiles from '../components/DoctorProfiles';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const features = [
    {
      title: 'Sujok Therapy',
      description: 'Sujok Therapy is an alternative healing system that combines acupressure, acupuncture, and other natural techniques to promote physical and mental well-being. Developed by South Korean scientist Prof. Park Jae Woo, "Sujok" comes from two ',
      image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&auto=format&fit=crop'
    },
    {
      title: 'Expert Consultation',
      description: 'Dr. Nitin Keshav Jadhav || M.D. ACCU, M.D. SUJOK (Korea), N.D. Asthag Hridayam, Reiki, D.S.A.C |||Several years in Ayurveda and alternative medicine, offering holistic treatments.Treating the root cause of ailments with personalized care.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop'
    },
    {
      title: 'Natural Remedies',
      description: 'Some natural remedies may be more affordable and accessible than conventional medicines, and many people prefer using them because they align with their personal health ideologies',
      image: 'https://res.cloudinary.com/dgu0acngm/image/upload/v1740561070/WhatsApp_Image_2025-02-24_at_7.59.40_PM_frkzag.jpg?w=800&auto=format&fit=crop'
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
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={feature.image}
                  alt={feature.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {feature.title}
                  </Typography>
                  <Typography>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <DoctorProfiles />
      </Container>
    </div>
  );
};

export default Home;
