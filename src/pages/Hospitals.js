import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Box,
  Rating,
  Chip,
  useTheme,
  useMediaQuery,
  IconButton
} from '@mui/material';
import {
  LocalHospital,
  Phone,
  DirectionsCar,
  AccessTime,
  Star,
  LocationOn,
  Search
} from '@mui/icons-material';

const Hospitals = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const hospitals = [
    {
      name: 'Shree Samartha Krupa Sanjeevan chikitsalay',
      address: '14 - Laxmi Niwas, Agarkar Road',
      phone: '+91 9892306092',
      rating: 4.5,
      distance: '2.5 km',
      specialties: ['Panchakarma', 'Ayurvedic Surgery', 'Consultation'],
      timing: '24/7',
      emergency: true
    },
    {
      name: 'Natural Care Ayurvedic Center',
      address: '456 Wellness Road, Mumbai',
      phone: '+91 98765 43211',
      rating: 4.2,
      distance: '3.8 km',
      specialties: ['Herbs', 'Massage', 'Yoga'],
      timing: '9 AM - 9 PM',
      emergency: false
    },
    {
      name: 'Holistic Health Hospital',
      address: '789 Healing Lane, Mumbai',
      phone: '+91 98765 43212',
      rating: 4.8,
      distance: '1.2 km',
      specialties: ['Traditional Treatment', 'Modern Facilities', 'Research'],
      timing: '24/7',
      emergency: true
    },
    {
      name: 'Ancient Wisdom Medical Center',
      address: '321 Traditional Path, Mumbai',
      phone: '+91 98765 43213',
      rating: 4.3,
      distance: '4.1 km',
      specialties: ['Consultation', 'Therapy', 'Medicine'],
      timing: '8 AM - 10 PM',
      emergency: false
    },
    {
      name: 'Vedic Care Hospital',
      address: '654 Ayurveda Street, Mumbai',
      phone: '+91 98765 43214',
      rating: 4.6,
      distance: '3.0 km',
      specialties: ['Treatment', 'Research', 'Education'],
      timing: '24/7',
      emergency: true
    }
  ];

  const filteredHospitals = hospitals.filter(hospital =>
    hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hospital.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hospital.specialties.some(specialty => 
      specialty.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography
        variant={isMobile ? 'h4' : 'h3'}
        component="h1"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', mb: 4 }}
      >
        Our Branches
      </Typography>

      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <TextField
          fullWidth
          maxWidth="600px"
          variant="outlined"
          placeholder="Search hospitals by name, location, or specialty..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: <Search color="action" sx={{ mr: 1 }} />,
            sx: { borderRadius: 2 }
          }}
          sx={{ maxWidth: '600px' }}
        />
      </Box>

      <Grid container spacing={3}>
        {filteredHospitals.map((hospital, index) => (
          <Grid item xs={12} md={6} key={index}>
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
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocalHospital color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h5" component="h2">
                    {hospital.name}
                  </Typography>
                </Box>

                {hospital.emergency && (
                  <Chip
                    label="24/7 Emergency"
                    color="error"
                    size="small"
                    sx={{ mb: 2 }}
                  />
                )}

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOn color="action" sx={{ mr: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    {hospital.address}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Phone color="action" sx={{ mr: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    {hospital.phone}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <DirectionsCar color="action" sx={{ mr: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    Distance: {hospital.distance}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <AccessTime color="action" sx={{ mr: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    Timing: {hospital.timing}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Rating
                    value={hospital.rating}
                    readOnly
                    precision={0.5}
                    icon={<Star fontSize="inherit" />}
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    ({hospital.rating})
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {hospital.specialties.map((specialty, idx) => (
                    <Chip
                      key={idx}
                      label={specialty}
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </CardContent>

              <CardActions sx={{ mt: 'auto', p: 2, pt: 0 }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<DirectionsCar />}
                  onClick={() => {
                    window.open(`https://www.google.com/maps/search/${encodeURIComponent(hospital.name + ' ' + hospital.address)}`, '_blank');
                  }}
                >
                  Get Directions
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Hospitals;
