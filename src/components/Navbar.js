import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SpaIcon from '@mui/icons-material/Spa';
import EventIcon from '@mui/icons-material/Event';
import ContactsIcon from '@mui/icons-material/Contacts';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import '../styles/Navbar.css';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { title: 'Home', path: '/', icon: <HomeIcon /> },
    { title: 'Treatments', path: '/treatments', icon: <SpaIcon /> },
    { title: 'Health Tips', path: '/health-tips', icon: <HealthAndSafetyIcon /> },
    { title: 'First Aid', path: '/first-aid', icon: <MedicalServicesIcon /> },
    { title: 'Our Clinic', path: '/hospitals', icon: <LocalHospitalIcon /> },
    { title: 'Book Appointment', path: '/appointment', icon: <EventIcon /> },
    { title: 'Contact', path: '/contact', icon: <ContactsIcon /> },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        AyurCare
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} component={Link} to={item.path}>
            <ListItemIcon sx={{ minWidth: '40px' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.title}
              sx={{
                color: item.title === 'Admin' ? 'primary.main' : 'inherit'
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              color: 'primary.main',
              textDecoration: 'none',
              flexGrow: isMobile ? 1 : 0,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <SpaIcon /> AyurCare
          </Typography>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.title}
                  component={Link}
                  to={item.path}
                  color={item.title === 'Admin' ? 'primary' : 'inherit'}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)'
                    },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5
                  }}
                  startIcon={item.icon}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
