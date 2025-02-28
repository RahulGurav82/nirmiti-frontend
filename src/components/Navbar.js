import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Leaf, 
  Calendar, 
  Phone, 
  User, 
  Menu, 
  X, 
  Heart, 
  Stethoscope, 
  Building,
  Activity
} from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { title: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { title: 'Treatments', path: '/treatments', icon: <Leaf className="w-5 h-5" /> },
    { title: 'Health Tips', path: '/health-tips', icon: <Heart className="w-5 h-5" /> },
    { title: 'First Aid', path: '/first-aid', icon: <Activity className="w-5 h-5" /> },
    { title: 'Our Clinic', path: '/hospitals', icon: <Building className="w-5 h-5" /> },
    { title: 'Book Appointment', path: '/appointment', icon: <Calendar className="w-5 h-5" /> },
    { title: 'Contact', path: '/contact', icon: <Phone className="w-5 h-5" /> },
    { title: 'Profile', path: '/profile', icon: <User className="w-5 h-5" /> },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-green-50 border-b border-green-200 sticky top-0 z-50 shadow-sm">
      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Leaf className="h-8 w-8 text-green-700" />
            <span className="ml-2 text-xl font-semibold text-green-800 font-serif">
              SanjivaniAyurved
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="text-green-700 hover:bg-green-100 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200"
              >
                <span className="mr-1">{item.icon}</span>
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-700 hover:text-green-900 hover:bg-green-100 transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-green-50 border-t border-green-200 shadow-inner">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="text-green-700 hover:bg-green-100 hover:text-green-900 flex items-center px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMobileMenu}
              >
                <span className="mr-3 text-green-600">{item.icon}</span>
                {item.title}
              </Link>
            ))}
          </div>
          
          {/* Decorative element */}
          <div className="border-t border-green-200 mt-2 py-3 flex justify-center">
            <div className="flex items-center text-green-600 text-sm">
              <Leaf className="w-4 h-4 mr-1" />
              <span className="font-serif italic">Balance · Harmony · Wellness</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;