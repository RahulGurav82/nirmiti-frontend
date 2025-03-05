import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box, Rating } from '@mui/material';

const DoctorProfiles = () => {
  const [ratings, setRatings] = useState({});

  const doctors = [
    {
      name: 'Dr. Nitin Jadhav',
      specialization: 'Naturopathy Specialist',
      experience: '30+ years experience',
      image: 'https://res.cloudinary.com/dgu0acngm/image/upload/v1740560221/WhatsApp_Image_2025-02-24_at_7.54.01_PM_schpq8.jpg?w=900&auto=format&fit=crop&'
    }

  ];

  const handleRatingChange = (doctorName, newValue) => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [doctorName]: newValue
    }));
  };

  return (
    <Box sx={{ py: 6, backgroundColor: '#f5f5f5' }}>
      <Typography
        variant="h3"
        component="h2"
        align="center"
        sx={{ mb: 4, fontWeight: 'bold', color: '#2c3e50' }}
      >
        Our Expert Doctors
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {doctors.map((doctor, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              transition: '0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
              }
            }}>
              <CardMedia
                component="img"
                height="450"
                image={doctor.image}
                alt={doctor.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                  {doctor.name}
                </Typography>
                <Typography variant="subtitle1" color="primary" sx={{ mb: 1 }}>
                  {doctor.specialization}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {doctor.experience}
                </Typography>
                <Rating
                  name={`rating-${doctor.name}`}
                  value={ratings[doctor.name] || 0}
                  onChange={(event, newValue) => handleRatingChange(doctor.name, newValue)}
                  precision={0.5}
                  size="large"
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DoctorProfiles;