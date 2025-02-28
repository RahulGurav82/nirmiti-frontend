import React, { useState } from 'react';
import { Leaf, Mail, Lock, User, X } from 'lucide-react';

const LoginRegisterModal = ({ onClose, onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const url = isLogin ? `${BASE_URL}/login` : `${BASE_URL}/register`;

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        if (isLogin) {
          // Save the token to localStorage
          localStorage.setItem('token', result.token);
          // Save user info if needed
          localStorage.setItem('user', JSON.stringify(result.user));
        }
        onAuthSuccess(); // Close the modal on successful login/register
      } else {
        setError(result.message || 'Error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Network error occurred. Please try again.');
    }
  };

  return (
<div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center backdrop-blur-sm">
      <div className="bg-green-50 p-6 rounded-lg shadow-lg w-96 border-2 border-green-200">
        {/* Header with decorative elements */}
        <div className="relative mb-6">
          <div className="absolute -top-8 -left-8 text-green-600 opacity-10">
            <Leaf size={64} />
          </div>
          <div className="absolute -top-8 -right-8 text-green-600 opacity-10">
            <Leaf size={64} />
          </div>
          
          <h2 className="text-2xl font-bold text-center text-green-800">
            {isLogin ? 'Welcome Back' : 'Join Our Community'}
          </h2>
          <div className="mt-2 text-center text-green-600 text-sm">
            {isLogin ? 'Reconnect with balance and wellness' : 'Begin your journey to holistic health'}
          </div>
          
          <button 
            onClick={onClose}
            className="absolute right-0 top-0 text-green-700 hover:text-red-600 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
        
        {error && (
          <div className="mb-4 p-2 bg-red-50 border border-red-200 text-red-700 rounded text-sm">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4 relative">
              <label className="block text-green-800 text-sm font-medium mb-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-green-600">
                  <User size={16} />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full pl-10 p-2 border border-green-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
          )}
          
          <div className="mb-4">
            <label className="block text-green-800 text-sm font-medium mb-1">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-green-600">
                <Mail size={16} />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full pl-10 p-2 border border-green-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-green-800 text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-green-600">
                <Lock size={16} />
              </div>
              <input
                type="password"
                name="password"
                placeholder="Your password"
                className="w-full pl-10 p-2 border border-green-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-green-700 text-white p-2 rounded hover:bg-green-800 transition-colors flex items-center justify-center gap-2"
          >
            <Leaf size={16} />
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-green-700 hover:text-green-900 text-sm font-medium underline"
          >
            {isLogin ? 'New to Ayurveda? Create account' : 'Already have an account? Sign in'}
          </button>
        </div>
        
        {/* Decorative footer */}
        <div className="mt-6 pt-4 border-t border-green-200 text-xs text-center text-green-600">
          Balance your doshas, nourish your spirit
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterModal;