import React, { useState } from 'react';
import { format } from 'date-fns';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Snackbar,
  Alert
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import axios from 'axios';
import '../styles/Appointment.css';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: null,
    time: null,
    treatment: '',
    message: ''
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const treatments = [
    'Abhyanga',
    'Shirodhara',
    'Panchakarma',
    'Ayurvedic Massage',
    'Consultation',
    'Ayursoukhyam'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDateChange = (e) => {
    setFormData({
      ...formData,  
      date: e.target.value
    });
  };

  const handleTimeChange = (e) => {
    setFormData({
      ...formData,
      time: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://nirmiti-server.onrender.com/api/appointments', formData);
      setSnackbar({
        open: true,
        message: 'Appointment booked successfully!',
        severity: 'success'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: null,
        time: null,
        treatment: '',
        message: ''
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Error booking appointment. Please try again.',
        severity: 'error'
      });
    }
  };

  const closeSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div className="bg-gradient-to-r from-amber-50 to-green-50 rounded-xl shadow-md overflow-hidden border border-amber-200">
      <div className="bg-gradient-to-r from-green-700 to-amber-600 py-6">
        <h1 className="text-center text-2xl font-serif font-bold text-amber-50">Book Your Ayurvedic Healing Journey</h1>
      </div>
      
      <div className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-green-800 font-serif">
                Full Name <span className="text-amber-700">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-amber-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-green-900"
                placeholder="Enter your full name"
              />
            </div>
            
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-green-800 font-serif">
                Email Address <span className="text-amber-700">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-amber-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-green-900"
                placeholder="your.email@example.com"
              />
            </div>
            
            {/* Phone Field */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-green-800 font-serif">
                Phone Number <span className="text-amber-700">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-amber-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-green-900"
                placeholder="Your contact number"
              />
            </div>
            
            {/* Treatment Field */}
            <div className="space-y-2">
              <label htmlFor="treatment" className="block text-sm font-medium text-green-800 font-serif">
                Treatment <span className="text-amber-700">*</span>
              </label>
              <select
                id="treatment"
                name="treatment"
                required
                value={formData.treatment}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-amber-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-green-900"
              >
                <option value="" disabled>Select a treatment</option>
                {treatments.map((treatment) => (
                  <option key={treatment} value={treatment}>
                    {treatment}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Date Field */}
            <div className="space-y-2">
              <label htmlFor="date" className="block text-sm font-medium text-green-800 font-serif">
                Preferred Date <span className="text-amber-700">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date || ''}
                onChange={handleDateChange}
                className="w-full px-4 py-2 border border-amber-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-green-900"
              />
            </div>
            
            {/* Time Field */}
            <div className="space-y-2">
              <label htmlFor="time" className="block text-sm font-medium text-green-800 font-serif">
                Preferred Time <span className="text-amber-700">*</span>
              </label>
              <input
                type="time"
                id="time"
                name="time"
                required
                value={formData.time || ''}
                onChange={handleTimeChange}
                className="w-full px-4 py-2 border border-amber-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-green-900"
              />
            </div>
          </div>
          
          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-green-800 font-serif">
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-amber-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-green-900"
              placeholder="Please share any health concerns or specific requirements..."
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium py-3 px-4 rounded-md shadow-md hover:shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Book Your Appointment
            </button>
          </div>
        </form>
        
        <div className="mt-6 text-center text-green-800 text-sm">
          <p>Our healers will confirm your appointment within 24 hours</p>
        </div>
      </div>
    </div>
    
    {/* Snackbar notification */}
    {snackbar.open && (
      <div className={`fixed bottom-4 right-4 px-6 py-3 rounded-md shadow-lg ${
        snackbar.severity === 'success' ? 'bg-green-100 text-green-800 border border-green-300' : 
        'bg-red-100 text-red-800 border border-red-300'
      }`}>
        <div className="flex items-center">
          {snackbar.severity === 'success' ? (
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          )}
          <span>{snackbar.message}</span>
          <button 
            onClick={closeSnackbar}
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    )}
  </div>
  );
};

export default Appointment;
