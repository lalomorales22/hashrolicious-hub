
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface BrandCardProps {
  id: string;
  name: string;
  logo: string;
  location: string;
  rating: number;
  productCount: number;
  featured?: boolean;
}

const BrandCard = ({ 
  id, 
  name, 
  logo, 
  location, 
  rating, 
  productCount,
  featured = false 
}: BrandCardProps) => {
  return (
    <Link to={`/brands/${id}`}>
      <div className={`ghibli-card h-full ${featured ? 'border-ghibli-gold border-2' : ''}`}>
        <div className="p-4">
          {featured && (
            <div className="absolute top-3 right-3 bg-ghibli-gold text-ghibli-brown rounded-full px-3 py-1 text-xs font-bold">
              Featured
            </div>
          )}
          
          <div className="flex items-center justify-center mb-4">
            <div className="relative w-24 h-24 overflow-hidden rounded-full border-4 border-white/50">
              <img 
                src={logo} 
                alt={`${name} logo`} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-ghibli-green text-center mb-2">{name}</h3>
          
          <div className="flex justify-center items-center mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  size={16} 
                  className={i < rating ? "fill-ghibli-gold text-ghibli-gold" : "text-gray-300"} 
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-ghibli-brown/70">{rating.toFixed(1)}</span>
          </div>
          
          <div className="text-center text-ghibli-brown/80 text-sm mb-3">
            {location}
          </div>
          
          <div className="text-center text-ghibli-brown/90 font-medium">
            {productCount} {productCount === 1 ? 'Product' : 'Products'}
          </div>
        </div>
        
        <div className="bg-ghibli-beige/50 p-3 text-center">
          <span className="text-ghibli-green font-medium">View Profile</span>
        </div>
      </div>
    </Link>
  );
};

export default BrandCard;
