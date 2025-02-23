import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Healing,
  LocalHospital,
  Warning,
  ArrowForward,
  CheckCircle
} from '@mui/icons-material';

const FirstAid = () => {
  const [selectedEmergency, setSelectedEmergency] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const emergencies = [
    {
      title: 'Burns',
      icon: <Healing sx={{ fontSize: 40, color: '#f44336' }} />,
      shortDesc: 'Immediate steps for burn treatment',
      steps: [
        'Cool the burn under cold running water for at least 10 minutes',
        'Remove any jewelry or tight items',
        'Cover with sterile gauze or clean cloth',
        'Do not apply ice directly',
        'Seek medical attention for severe burns'
      ]
    },
    {
      title: 'Cuts and Bleeding',
      icon: <LocalHospital sx={{ fontSize: 40, color: '#e91e63' }} />,
      shortDesc: 'Managing cuts and controlling bleeding',
      steps: [
        'Clean hands and wear gloves if available',
        'Clean the wound with water',
        'Apply direct pressure with clean cloth',
        'Elevate the injured area',
        'Apply bandage when bleeding stops'
      ]
    },
    {
      title: 'Sprains',
      icon: <Healing sx={{ fontSize: 40, color: '#9c27b0' }} />,
      shortDesc: 'RICE method for sprains',
      steps: [
        'Rest the injured area',
        'Ice the area for 15-20 minutes',
        'Compress with elastic bandage',
        'Elevate above heart level',
        'Seek medical attention if severe'
      ]
    },
    {
      title: 'Choking',
      icon: <Warning sx={{ fontSize: 40, color: '#ff5722' }} />,
      shortDesc: 'Emergency response for choking',
      steps: [
        'Encourage coughing',
        'Perform back blows if coughing ineffective',
        'Alternate with abdominal thrusts',
        'Call emergency services if person cannot breathe',
        'Continue until object is expelled or help arrives'
      ]
    },
    {
      title: 'Heat Exhaustion',
      icon: <Warning sx={{ fontSize: 40, color: '#ff9800' }} />,
      shortDesc: 'Treating heat-related illness',
      steps: [
        'Move to a cool place',
        'Lie down and elevate feet',
        'Remove excess clothing',
        'Sip water or sports drinks',
        'Apply cool, wet cloths to body'
      ]
    },
    {
      title: 'Insect Bites',
      icon: <LocalHospital sx={{ fontSize: 40, color: '#4caf50' }} />,
      shortDesc: 'Managing insect bites and stings',
      steps: [
        'Remove stinger if present',
        'Clean the area with soap and water',
        'Apply cold compress',
        'Use calamine lotion if available',
        'Watch for allergic reactions'
      ]
    }
  ];

  const handleOpen = (emergency) => {
    setSelectedEmergency(emergency);
  };

  const handleClose = () => {
    setSelectedEmergency(null);
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography
        variant={isMobile ? 'h4' : 'h3'}
        component="h1"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', mb: 4 }}
      >
        First Aid Guide
      </Typography>

      <Grid container spacing={3}>
        {emergencies.map((emergency, index) => (
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
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.03)'
                }}
              >
                {emergency.icon}
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {emergency.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {emergency.shortDesc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleOpen(emergency)}
                  endIcon={<ArrowForward />}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={Boolean(selectedEmergency)}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        {selectedEmergency && (
          <>
            <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {selectedEmergency.icon}
              {selectedEmergency.title}
            </DialogTitle>
            <DialogContent>
              <List>
                {selectedEmergency.steps.map((step, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={step} />
                  </ListItem>
                ))}
              </List>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default FirstAid;
