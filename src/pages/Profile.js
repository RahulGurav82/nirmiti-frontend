// src/pages/Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://nirmiti-server.onrender.com';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const navigate = useNavigate();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size too large. Please choose an image under 5MB.');
      return;
    }

    // Check file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file.');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      setUploadingImage(true);
      setError(null);
      
      const response = await axios.post(`${API_URL}/api/upload-profile-photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      setUser({ ...user, profilePhoto: response.data.imageUrl });
      setError(null);
    } catch (error) {
      console.error('Error uploading image:', error);
      setError(error.response?.data?.message || 'Failed to upload image. Please try again.');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
      return;
    }

    const fetchProfile = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`${API_URL}/api/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setError('Failed to load profile. Please try logging in again.');
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          navigate('/');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-amber-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-amber-50">
        <div className="text-red-700 text-center p-8 bg-white rounded-lg shadow-md border border-amber-200">
          <p className="font-serif">{error}</p>
          <button
            onClick={() => setError(null)}
            className="mt-4 px-4 py-2 bg-green-700 text-amber-50 rounded-md hover:bg-green-800 transition duration-300 font-medium"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl border border-amber-100">
        <div className="relative h-32 bg-gradient-to-r from-green-600 to-amber-500">
          <div className="absolute -bottom-16 inset-x-0 flex justify-center">
            <div className="relative">
              <img
                className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg"
                src={user.profilePhoto || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFZ5G0prHmBsDr8jkuvQ5cwMBX4IXf3g9Fg&s/150'}
                alt="Profile"
              />
              <label 
                htmlFor="profile-photo" 
                className={`absolute bottom-0 right-0 bg-amber-500 rounded-full p-2 cursor-pointer hover:bg-amber-600 transition duration-300 ${
                  uploadingImage ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {uploadingImage ? (
                  <div className="w-6 h-6 border-2 border-white rounded-full animate-spin"></div>
                ) : (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                )}
                <input
                  type="file"
                  id="profile-photo"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploadingImage}
                />
              </label>
            </div>
          </div>
        </div>
        
        <div className="p-8 pt-20">
          <div className="flex flex-col items-center">
            <h2 className="mt-2 text-2xl font-bold text-green-800 font-serif">{user.name}</h2>
            <p className="mt-1 text-amber-700">{user.email}</p>
            
            <div className="mt-8 w-full px-6">
              <div className="border-t border-amber-200 pt-6">
                <h3 className="text-lg font-medium text-green-700 mb-4 font-serif">Account Details</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-amber-50 rounded-md">
                    <span className="text-green-800">Member Since</span>
                    <span className="text-amber-700">February 2025</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-amber-50 rounded-md">
                    <span className="text-green-800">Dosha Type</span>
                    <span className="text-amber-700">Vata-Pitta</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleLogout}
                className="mt-8 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-amber-50 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;