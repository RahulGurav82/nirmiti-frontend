import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Tabs,
  Tab,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from '@mui/material';
import axios from 'axios';
import '../styles/Admin.css';

const Admin = () => {
  const [tab, setTab] = useState(0);
  const [appointments, setAppointments] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  useEffect(() => {
    fetchAppointments();
    fetchTreatments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const fetchTreatments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/treatments');
      setTreatments(response.data);
    } catch (error) {
      console.error('Error fetching treatments:', error);
    }
  };

  const handleStatusChange = async (appointmentId, status) => {
    try {
      await axios.patch(`http://localhost:5000/api/appointments/${appointmentId}`, {
        status
      });
      fetchAppointments();
    } catch (error) {
      console.error('Error updating appointment status:', error);
    }
  };

  const handleTreatmentSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedTreatment._id) {
        await axios.put(
          `http://localhost:5000/api/treatments/${selectedTreatment._id}`,
          selectedTreatment
        );
      } else {
        await axios.post('http://localhost:5000/api/treatments', selectedTreatment);
      }
      setDialogOpen(false);
      fetchTreatments();
    } catch (error) {
      console.error('Error saving treatment:', error);
    }
  };

  const TabPanel = ({ children, value, index }) => (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );

  return (
    <Container className="admin-container" maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3}>
        <Typography variant="h4" component="h1" sx={{ p: 3 }}>
          Admin Dashboard
        </Typography>
        <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)}>
          <Tab label="Appointments" />
          <Tab label="Treatments" />
        </Tabs>

        <TabPanel value={tab} index={0}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Treatment</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appointments.map((appointment) => (
                  <TableRow key={appointment._id}>
                    <TableCell>{appointment.name}</TableCell>
                    <TableCell>
                      {new Date(appointment.date).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      {new Date(appointment.time).toLocaleTimeString()}
                    </TableCell>
                    <TableCell>{appointment.treatment}</TableCell>
                    <TableCell>{appointment.status}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() =>
                          handleStatusChange(appointment._id, 'confirmed')
                        }
                        color="primary"
                      >
                        Confirm
                      </Button>
                      <Button
                        onClick={() =>
                          handleStatusChange(appointment._id, 'cancelled')
                        }
                        color="error"
                      >
                        Cancel
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        <TabPanel value={tab} index={1}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setSelectedTreatment({
                name: '',
                description: '',
                duration: '',
                price: '',
                image: ''
              });
              setDialogOpen(true);
            }}
            sx={{ mb: 3 }}
          >
            Add New Treatment
          </Button>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Duration</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {treatments.map((treatment) => (
                  <TableRow key={treatment._id}>
                    <TableCell>{treatment.name}</TableCell>
                    <TableCell>{treatment.duration}</TableCell>
                    <TableCell>₹{treatment.price}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => {
                          setSelectedTreatment(treatment);
                          setDialogOpen(true);
                        }}
                        color="primary"
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
      </Paper>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>
          {selectedTreatment?._id ? 'Edit Treatment' : 'Add New Treatment'}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleTreatmentSubmit}>
            <TextField
              fullWidth
              label="Name"
              value={selectedTreatment?.name}
              onChange={(e) =>
                setSelectedTreatment({
                  ...selectedTreatment,
                  name: e.target.value
                })
              }
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Description"
              value={selectedTreatment?.description}
              onChange={(e) =>
                setSelectedTreatment({
                  ...selectedTreatment,
                  description: e.target.value
                })
              }
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              label="Duration"
              value={selectedTreatment?.duration}
              onChange={(e) =>
                setSelectedTreatment({
                  ...selectedTreatment,
                  duration: e.target.value
                })
              }
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              label="Price"
              type="number"
              value={selectedTreatment?.price}
              onChange={(e) =>
                setSelectedTreatment({
                  ...selectedTreatment,
                  price: e.target.value
                })
              }
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              label="Image URL"
              value={selectedTreatment?.image}
              onChange={(e) =>
                setSelectedTreatment({
                  ...selectedTreatment,
                  image: e.target.value
                })
              }
              sx={{ mt: 2 }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleTreatmentSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Admin;
