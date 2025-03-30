
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-ghibli-cream/80 backdrop-blur-md border-b border-ghibli-beige">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="relative">
              <div className="w-10 h-10 bg-ghibli-gold rounded-full flex items-center justify-center animate-float">
                <span className="text-ghibli-brown text-xl font-bold">HR</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-ghibli-green rounded-full"></div>
            </div>
            <span className="ml-3 text-2xl font-bold text-ghibli-green">BuyHashRosin</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/brands" className="text-ghibli-brown hover:text-ghibli-green transition-colors">
              Brands
            </Link>
            <Link to="/products" className="text-ghibli-brown hover:text-ghibli-green transition-colors">
              Products
            </Link>
            <Link to="/community" className="text-ghibli-brown hover:text-ghibli-green transition-colors">
              Community
            </Link>
            <Link to="/about" className="text-ghibli-brown hover:text-ghibli-green transition-colors">
              About
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-ghibli-brown hover:text-ghibli-green transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-ghibli-brown hover:text-ghibli-green transition-colors">
              <ShoppingCart size={20} />
            </button>
            {isLoggedIn ? (
              <Link to="/profile" className="p-2 text-ghibli-brown hover:text-ghibli-green transition-colors">
                <User size={20} />
              </Link>
            ) : (
              <Link to="/signin" className="p-2 text-ghibli-brown hover:text-ghibli-green transition-colors">
                <User size={20} />
              </Link>
            )}
            <Link to={isLoggedIn ? "/profile" : "/brand-signup"} className="ghibli-button">
              {isLoggedIn ? "My Profile" : "Brand Sign Up"}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-ghibli-brown"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-4">
            <Link 
              to="/brands" 
              className="block py-2 px-4 text-ghibli-brown hover:bg-ghibli-beige/50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Brands
            </Link>
            <Link 
              to="/products" 
              className="block py-2 px-4 text-ghibli-brown hover:bg-ghibli-beige/50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/community" 
              className="block py-2 px-4 text-ghibli-brown hover:bg-ghibli-beige/50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
            <Link 
              to="/about" 
              className="block py-2 px-4 text-ghibli-brown hover:bg-ghibli-beige/50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex items-center space-x-4 pt-2 px-4">
              <button className="p-2 text-ghibli-brown">
                <Search size={20} />
              </button>
              <button className="p-2 text-ghibli-brown">
                <ShoppingCart size={20} />
              </button>
              <Link to={isLoggedIn ? "/profile" : "/signin"} className="p-2 text-ghibli-brown">
                <User size={20} />
              </Link>
            </div>
            <div className="px-4 pt-2">
              <Link 
                to={isLoggedIn ? "/profile" : "/register"} 
                className="ghibli-button block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {isLoggedIn ? "My Profile" : "Sign Up"}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
