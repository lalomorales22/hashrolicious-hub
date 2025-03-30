
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, Terminal, Database, Code, Server } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-darker text-white border-t border-cyber-neon/30 terminal-lines relative crt">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyber-neon to-transparent"></div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <div className="w-10 h-10 bg-cyber-terminal border border-cyber-neon/50 rounded-none flex items-center justify-center">
                <span className="text-cyber-neon text-xl font-bold font-mono">HR</span>
              </div>
              <span className="ml-3 text-2xl font-mono font-bold">BuyHashRosin</span>
            </Link>
            <div className="ascii-frame p-3 mb-4 text-sm tracking-wide">
              <p className="text-white/80 mb-4 font-mono text-xs">
                CONNECTING NODES IN THE NETWORK. DISTRIBUTING DATA PACKAGES. SECURE TRANSACTIONS ENFORCED.
              </p>
            </div>
            <div className="flex space-x-3">
              <a href="#" className="bg-cyber-terminal border border-cyber-neon/30 hover:border-cyber-neon/70 p-2 transition-colors">
                <Facebook size={18} className="text-cyber-neon" />
              </a>
              <a href="#" className="bg-cyber-terminal border border-cyber-neon/30 hover:border-cyber-neon/70 p-2 transition-colors">
                <Twitter size={18} className="text-cyber-neon" />
              </a>
              <a href="#" className="bg-cyber-terminal border border-cyber-neon/30 hover:border-cyber-neon/70 p-2 transition-colors">
                <Instagram size={18} className="text-cyber-neon" />
              </a>
              <a href="#" className="bg-cyber-terminal border border-cyber-neon/30 hover:border-cyber-neon/70 p-2 transition-colors">
                <Youtube size={18} className="text-cyber-neon" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyber-neon font-mono border-b border-cyber-neon/30 pb-2">[QUICK_LINKS]</h3>
            <ul className="space-y-2 font-mono">
              <li>
                <Link to="/brands" className="hover:text-cyber-neon transition-colors inline-block group">
                  <span className="text-cyber-neon/70">{'>'}</span> Brands_Directory
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-cyber-neon"></span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-cyber-neon transition-colors inline-block group">
                  <span className="text-cyber-neon/70">{'>'}</span> Product_Catalog
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-cyber-neon"></span>
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-cyber-neon transition-colors inline-block group">
                  <span className="text-cyber-neon/70">{'>'}</span> Community_Forum
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-cyber-neon"></span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyber-neon transition-colors inline-block group">
                  <span className="text-cyber-neon/70">{'>'}</span> About_System
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-cyber-neon"></span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-cyber-neon transition-colors inline-block group">
                  <span className="text-cyber-neon/70">{'>'}</span> FAQ.txt
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-cyber-neon"></span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Brand Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyber-cyan font-mono border-b border-cyber-cyan/30 pb-2">[BRAND_RESOURCES]</h3>
            <ul className="space-y-2 font-mono">
              <li>
                <Link to="/brand-signup" className="hover:text-cyber-cyan transition-colors inline-block group">
                  <span className="text-cyber-cyan/70">{'>'}</span> Register_Brand
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-cyber-cyan"></span>
                </Link>
              </li>
              <li>
                <Link to="/brand-guidelines" className="hover:text-cyber-cyan transition-colors inline-block group">
                  <span className="text-cyber-cyan/70">{'>'}</span> Guidelines.md
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-cyber-cyan"></span>
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="hover:text-cyber-cyan transition-colors inline-block group">
                  <span className="text-cyber-cyan/70">{'>'}</span> Success.log
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-cyber-cyan"></span>
                </Link>
              </li>
              <li>
                <Link to="/brand-marketing" className="hover:text-cyber-cyan transition-colors inline-block group">
                  <span className="text-cyber-cyan/70">{'>'}</span> Marketing.exe
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-cyber-cyan"></span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyber-purple font-mono border-b border-cyber-purple/30 pb-2">[CONTACT_INFO]</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-cyber-purple" />
                <span className="font-mono text-sm">123_ROSIN_RD/SAN_FRANCISCO/CA_94107/USA</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-cyber-purple" />
                <span className="font-mono text-sm">(123)456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-cyber-purple" />
                <span className="font-mono text-sm">hello@buyhashrosin.com</span>
              </li>
            </ul>
            
            <div className="mt-4 border border-cyber-purple/30 p-3 bg-cyber-dark/50">
              <h4 className="text-sm font-bold mb-2 text-cyber-purple font-mono">[ SUBSCRIBE ]</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="your@email" 
                  className="bg-cyber-terminal text-white placeholder:text-white/50 border border-cyber-purple/30 px-3 py-2 focus:outline-none focus:border-cyber-purple w-full font-mono text-sm"
                />
                <button className="bg-cyber-purple text-white px-4 font-medium hover:bg-cyber-purple/70 transition-colors font-mono">
                  {'>>'}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm font-mono">
            <span className="text-cyber-neon">$ </span>
            COPYRIGHT_2023<span className="animate-blink text-cyber-neon">_</span>
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-white/50 hover:text-cyber-neon text-sm font-mono">
              PRIVACY.md
            </Link>
            <Link to="/terms-of-service" className="text-white/50 hover:text-cyber-neon text-sm font-mono">
              TERMS.txt
            </Link>
            <Link to="/sitemap" className="text-white/50 hover:text-cyber-neon text-sm font-mono">
              SITEMAP.xml
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
