
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  brand: string;
  brandId: string;
  price: number;
  rating: number;
  reviewCount: number;
  category: string;
  isNew?: boolean;
}

const ProductCard = ({
  id,
  name,
  image,
  brand,
  brandId,
  price,
  rating,
  reviewCount,
  category,
  isNew = false
}: ProductCardProps) => {
  return (
    <div className="ghibli-card h-full flex flex-col group">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        {isNew && (
          <div className="absolute top-3 left-3 bg-ghibli-green text-white rounded-full px-3 py-1 text-xs font-bold z-10">
            New
          </div>
        )}
        
        <Link to={`/products/${id}`}>
          <div className="aspect-square overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </Link>
        
        <button className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <ShoppingCart size={20} className="text-ghibli-green" />
        </button>
      </div>
      
      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/brands/${brandId}`}>
          <span className="text-sm text-ghibli-terracotta font-medium hover:underline">{brand}</span>
        </Link>
        
        <Link to={`/products/${id}`} className="mt-1 mb-2">
          <h3 className="text-lg font-bold text-ghibli-brown hover:text-ghibli-green transition-colors">{name}</h3>
        </Link>
        
        <div className="flex items-center mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                size={14} 
                className={i < rating ? "fill-ghibli-gold text-ghibli-gold" : "text-gray-300"} 
              />
            ))}
          </div>
          <span className="ml-2 text-xs text-ghibli-brown/70">({reviewCount})</span>
        </div>
        
        <div className="text-xs text-ghibli-brown/80 mb-2">
          Category: <span className="font-medium">{category}</span>
        </div>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-ghibli-green">${price.toFixed(2)}</span>
          <Link 
            to={`/products/${id}`} 
            className="text-sm font-medium text-ghibli-terracotta hover:text-ghibli-brown"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
