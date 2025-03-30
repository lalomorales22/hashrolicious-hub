
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ghibli-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-ghibli-green text-xl font-bold">HR</span>
              </div>
              <span className="ml-3 text-2xl font-bold">BuyHashRosin</span>
            </Link>
            <p className="text-ghibli-beige/80 mb-4">
              Connecting hash brands with enthusiasts, fostering community, and promoting quality artisanal products.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-ghibli-beige">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/brands" className="hover:text-ghibli-beige transition-colors inline-block">
                  Brands Directory
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-ghibli-beige transition-colors inline-block">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-ghibli-beige transition-colors inline-block">
                  Community Forum
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-ghibli-beige transition-colors inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-ghibli-beige transition-colors inline-block">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Brand Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-ghibli-beige">Brand Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/brand-signup" className="hover:text-ghibli-beige transition-colors inline-block">
                  Register Your Brand
                </Link>
              </li>
              <li>
                <Link to="/brand-guidelines" className="hover:text-ghibli-beige transition-colors inline-block">
                  Brand Guidelines
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="hover:text-ghibli-beige transition-colors inline-block">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/brand-marketing" className="hover:text-ghibli-beige transition-colors inline-block">
                  Marketing Tips
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-ghibli-beige">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Rosin Rd, San Francisco, CA 94107, USA</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>hello@buyhashrosin.com</span>
              </li>
            </ul>
            
            <div className="mt-4">
              <h4 className="text-sm font-bold mb-2 text-ghibli-beige">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/10 text-white placeholder:text-white/50 border border-white/20 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-ghibli-beige"
                />
                <button className="bg-ghibli-gold text-ghibli-brown px-4 rounded-r-lg font-medium hover:bg-ghibli-beige transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ghibli-beige/70 text-sm">
            © 2023 BuyHashRosin. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-ghibli-beige/70 hover:text-ghibli-beige text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-ghibli-beige/70 hover:text-ghibli-beige text-sm">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-ghibli-beige/70 hover:text-ghibli-beige text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
