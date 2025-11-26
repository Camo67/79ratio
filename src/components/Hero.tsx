import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);
  
  const base = import.meta.env.BASE_URL || '/';
  const heroBg = `${base}technology-consulting-partners.png`;

  useEffect(() => {
    // Preload the hero image
    const img = new Image();
    img.src = heroBg;
    
    img.onload = () => {
      setIsImageLoaded(true);
      setIsImageLoading(false);
    };
    
    img.onerror = () => {
      setIsImageLoading(false);
    };
  }, [heroBg]);

  return (
    <section 
      className="relative text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background with loading state */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          isImageLoaded ? 'opacity-100' : 'opacity-30'
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${heroBg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Fallback background while image is loading */}
      {!isImageLoaded && (
        <div className="absolute inset-0 to-black" />
      )}
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 rounded-full px-4 py-1.5 text-sm font-medium">
              RATIO 79
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Transform Your Business with</span>
            <span className="block text-yellow-400 mt-2">Cutting-Edge Technology</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions for modern businesses. From cybersecurity to cloud infrastructure, 
            we help you stay ahead in the digital landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link 
              to="/solutions" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10 transition duration-300 shadow-lg"
            >
              Explore Solutions
            </Link>
            
            <Link 
              to="/#contact" 
              className="inline-flex items-center justify-center px-8 py-4 border border-yellow-400 text-base font-medium rounded-md text-yellow-400 bg-transparent hover:bg-yellow-400/10 md:py-4 md:text-lg md:px-10 transition duration-300"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#services" 
          className="flex flex-col items-center text-white hover:text-yellow-400 transition-colors duration-300"
          aria-label="Scroll to services section"
        >
          <span className="text-sm mb-2">Explore</span>
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;