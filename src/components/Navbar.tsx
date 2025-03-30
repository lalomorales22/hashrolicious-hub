
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, User, Terminal, Database } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-cyber-darker/80 backdrop-blur-md border-b border-cyber-neon/30 scanline">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="relative">
              <div className="w-10 h-10 bg-cyber-terminal border border-cyber-neon/50 rounded-none flex items-center justify-center animate-pulse shadow-[0_0_10px_rgba(255,0,255,0.3)]">
                <span className="text-cyber-neon text-xl font-bold font-mono">HR</span>
                <span className="absolute top-0 right-0 h-full w-[2px] bg-cyber-neon animate-blink"></span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-cyber-cyan/70 rounded-none"></div>
            </div>
            <span className="ml-3 text-2xl font-bold text-white" data-text="BuyHashRosin">
              <span className="glitch-text">BuyHashRosin</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/brands" className="text-white hover:text-cyber-neon transition-colors relative group">
              <span>Brands</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyber-neon group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/products" className="text-white hover:text-cyber-neon transition-colors relative group">
              <span>Products</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyber-neon group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/community" className="text-white hover:text-cyber-neon transition-colors relative group">
              <span>Community</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyber-neon group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="text-white hover:text-cyber-neon transition-colors relative group">
              <span>About</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyber-neon group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-white hover:text-cyber-neon transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-white hover:text-cyber-neon transition-colors">
              <ShoppingCart size={20} />
            </button>
            {isLoggedIn ? (
              <Link to="/profile" className="p-2 text-white hover:text-cyber-neon transition-colors">
                <User size={20} />
              </Link>
            ) : (
              <Link to="/signin" className="p-2 text-white hover:text-cyber-neon transition-colors">
                <Terminal size={20} />
              </Link>
            )}
            <Link to={isLoggedIn ? "/profile" : "/brand-signup"} className="cyber-button text-sm">
              {isLoggedIn ? (
                <>
                  <Database className="mr-2 h-4 w-4" /> 
                  <span>ACCESS</span>
                </>
              ) : (
                <>
                  <Terminal className="mr-2 h-4 w-4" /> 
                  <span>REGISTER [ BRAND ]</span>
                </>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-cyber-neon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-4 terminal-lines relative">
            <Link 
              to="/brands" 
              className="block py-2 px-4 text-white hover:bg-cyber-neon/10 hover:text-cyber-neon border-l-2 border-cyber-neon/50"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-cyber-neon/70">{'>'}</span> Brands
            </Link>
            <Link 
              to="/products" 
              className="block py-2 px-4 text-white hover:bg-cyber-neon/10 hover:text-cyber-neon border-l-2 border-cyber-neon/50"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-cyber-neon/70">{'>'}</span> Products
            </Link>
            <Link 
              to="/community" 
              className="block py-2 px-4 text-white hover:bg-cyber-neon/10 hover:text-cyber-neon border-l-2 border-cyber-neon/50"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-cyber-neon/70">{'>'}</span> Community
            </Link>
            <Link 
              to="/about" 
              className="block py-2 px-4 text-white hover:bg-cyber-neon/10 hover:text-cyber-neon border-l-2 border-cyber-neon/50"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-cyber-neon/70">{'>'}</span> About
            </Link>
            <div className="flex items-center space-x-4 pt-2 px-4">
              <button className="p-2 text-cyber-neon">
                <Search size={20} />
              </button>
              <button className="p-2 text-cyber-neon">
                <ShoppingCart size={20} />
              </button>
              <Link to={isLoggedIn ? "/profile" : "/signin"} className="p-2 text-cyber-neon">
                <Terminal size={20} />
              </Link>
            </div>
            <div className="px-4 pt-2">
              <Link 
                to={isLoggedIn ? "/profile" : "/brand-signup"} 
                className="cyber-button w-full justify-center text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {isLoggedIn ? (
                  <>
                    <Database className="mr-2 h-4 w-4" /> 
                    <span>ACCESS</span>
                  </>
                ) : (
                  <>
                    <Terminal className="mr-2 h-4 w-4" /> 
                    <span>REGISTER [ BRAND ]</span>
                  </>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
