import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import axios from 'axios';
import '../styles/Treatments.css';

const Treatments = () => {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    // Fetch treatments from backend
    const fetchTreatments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/treatments');
        setTreatments(response.data);
      } catch (error) {
        console.error('Error fetching treatments:', error);
      }
    };

    fetchTreatments();
  }, []);

  return (
    <Container className="treatments-container" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" align="center" sx={{ mb: 4 }}>
        Our Ayurvedic Treatments
      </Typography>
      <Grid container spacing={4}>
        {treatments.map((treatment) => (
          <Grid item key={treatment._id} xs={12} sm={6} md={4}>
            <Card className="treatment-card">
              <CardMedia
                component="img"
                height="240"
                image={treatment.image}
                alt={treatment.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {treatment.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {treatment.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  Duration: {treatment.duration}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                  Price: ₹{treatment.price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  href="/appointment"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Treatments;
