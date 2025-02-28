import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Calendar } from 'lucide-react';
import DoctorProfiles from '../components/DoctorProfiles';
import hero from './hero.jpeg';

const Home = () => {
  const features = [
    {
      title: 'Sujok Therapy',
      description: 'Sujok Therapy is an alternative healing system that combines acupressure, acupuncture, and other natural techniques to promote physical and mental well-being. Developed by South Korean scientist Prof. Park Jae Woo, "Sujok" comes from two ',
      image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&auto=format&fit=crop'
    },
    {
      title: 'Expert Consultation',
      description: 'Dr. Nitin Keshav Jadhav || M.D. ACCU, M.D. SUJOK (Korea), N.D. Asthag Hridayam, Reiki, D.S.A.C |||Several years in Ayurveda and alternative medicine, offering holistic treatments.Treating the root cause of ailments with personalized care.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop'
    },
    {
      title: 'Natural Remedies',
      description: 'Some natural remedies may be more affordable and accessible than conventional medicines, and many people prefer using them because they align with their personal health ideologies',
      image: 'https://res.cloudinary.com/dgu0acngm/image/upload/v1740561070/WhatsApp_Image_2025-02-24_at_7.59.40_PM_frkzag.jpg?w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="relative bg-green-800 bg-opacity-90 bg-blend-multiply" style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <div className="absolute inset-0 bg-pattern opacity-10" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
          }}></div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
            <span className="inline-block relative">
              Welcome to SanjivaniAyurved
              <span className="absolute -top-6 -right-6 text-green-300 opacity-50">
                <Leaf className="w-8 h-8" />
              </span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
            Your Journey to Natural Healing Starts Here
          </p>
          
          <Link 
            to="/appointment" 
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Appointment
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12 relative">
          <span className="inline-block">
            Our Services
            <div className="absolute h-1 w-24 bg-green-600 bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-green-100">
              <div className="h-56 overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  src={feature.image} 
                  alt={feature.title}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2 font-serif">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <div className="mt-4 flex justify-end">
                  <Link 
                    to={`/treatments#${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-green-700 hover:text-green-900 font-medium flex items-center"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-green-50 rounded-xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-green-600 mb-2">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Authentic Ayurveda</h3>
              <p className="text-gray-600">Traditional healing practices backed by generations of wisdom</p>
            </div>
            <div className="p-4">
              <div className="text-green-600 mb-2">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Expert Practitioners</h3>
              <p className="text-gray-600">Highly qualified doctors with decades of combined experience</p>
            </div>
            <div className="p-4">
              <div className="text-green-600 mb-2">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Holistic Care</h3>
              <p className="text-gray-600">Treating the whole person, not just the symptoms</p>
            </div>
          </div>
        </div>

        {/* Doctor Profiles Component */}
        <DoctorProfiles />
      </div>
    </div>
  );
};

export default Home;