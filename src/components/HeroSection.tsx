
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 leaf-pattern">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 md:w-40 md:h-40 bg-ghibli-gold/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 md:w-64 md:h-64 bg-ghibli-green/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-ghibli-green mb-4">
              Discover Artisanal Hash Rosin
            </h1>
            <p className="text-xl text-ghibli-brown/80 mb-8 max-w-xl">
              Connect with premium hash brands, explore their unique products, and join a community passionate about quality and craft.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/products" className="ghibli-button">
                Explore Products
              </Link>
              <Link to="/brand-signup" className="ghibli-button-secondary">
                Register Your Brand
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="md:w-1/2 relative">
            <div className="cloud-border p-4 bg-white/40 backdrop-blur-sm shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1503262028195-93c528f03218?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                alt="Artisanal Hash Rosin Collection" 
                className="rounded-2xl w-full h-auto object-cover"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-ghibli-beige rounded-full flex items-center justify-center animate-float shadow-lg">
                <span className="text-ghibli-brown font-bold">100% Organic</span>
              </div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-ghibli-sage rounded-full flex items-center justify-center animate-float shadow-lg" style={{animationDelay: "1s"}}>
                <span className="text-white font-bold text-center">Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
