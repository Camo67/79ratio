import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';

export default function AppFallback() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="grow">
        <Hero />
        
        <section id="fallback-content" className="py-20 px-4 max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Technology Solutions & IT Services</h2>
            <p className="text-xl mb-8 text-gray-300">
              We deliver comprehensive IT solutions including cybersecurity, cloud services, 
              digital transformation, and managed technology services for businesses.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3 text-yellow-400">Cybersecurity</h3>
                <p className="text-gray-300">
                  Protecting your business from digital threats with advanced security solutions.
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3 text-yellow-400">Cloud Solutions</h3>
                <p className="text-gray-300">
                  Access your information anytime, anywhere with our reliable cloud services.
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3 text-yellow-400">Digital Transformation</h3>
                <p className="text-gray-300">
                  Transform your business with cutting-edge technology and innovative solutions.
                </p>
              </div>
            </div>
            
            <div className="mt-16">
              <Link 
                to="/solutions" 
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg transition duration-300"
              >
                Explore Our Solutions
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}