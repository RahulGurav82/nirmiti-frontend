import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Link,
  IconButton
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Facebook,
  Instagram,
  Twitter
} from '@mui/icons-material';

const Contact = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Get in Touch
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone color="primary" sx={{ mr: 2 }} />
                <Typography>
                  <Link href="tel:+919892306092" color="inherit">
                    +919892306092
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Email color="primary" sx={{ mr: 2 }} />
                <Typography>
                  <Link href="mailto:dr.nitinjadhav77mumbai@gmail.com" color="inherit">
                    dr.nitinjadhav77mumbai@gmail.com
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn color="primary" sx={{ mr: 2 }} />
                <Typography>
                Shree Samartha Krupa Sanjeevan chikitsalay,
                <br />             
                14 - Laxmi Niwas, Agarkar Road, 
                <br />
                Dombivli East, 421201
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <Box>
                <IconButton color="primary" href="https://facebook.com" target="_blank">
                  <Facebook />
                </IconButton>
                <IconButton color="primary" href="https://instagram.com" target="_blank">
                  <Instagram />
                </IconButton>
                <IconButton color="primary" href="https://twitter.com" target="_blank">
                  <Twitter />
                </IconButton>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Business Hours
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Monday - Friday</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">9:00 AM - 8:00 PM</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Saturday</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">9:00 AM - 6:00 PM</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Sunday</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">10:00 AM - 4:00 PM</Typography>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
