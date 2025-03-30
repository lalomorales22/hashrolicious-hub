
import { Link } from 'react-router-dom';
import BrandCard from './BrandCard';
import ProductCard from './ProductCard';

// Sample data - in a real app, this would come from an API
const featuredBrands = [
  {
    id: 'brand1',
    name: 'Emerald Extracts',
    logo: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    location: 'California, USA',
    rating: 4.8,
    productCount: 12,
    featured: true
  },
  {
    id: 'brand2',
    name: 'Alpine Solventless',
    logo: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    location: 'Colorado, USA',
    rating: 4.5,
    productCount: 8,
    featured: true
  },
  {
    id: 'brand3',
    name: 'Cosmic Concentrates',
    logo: 'https://images.unsplash.com/photo-1605363658902-77d45c0d9c52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    location: 'Oregon, USA',
    rating: 4.7,
    productCount: 10
  }
];

const featuredProducts = [
  {
    id: 'product1',
    name: 'Strawberry Banana Live Rosin',
    image: 'https://images.unsplash.com/photo-1520315756242-a4ad1fb06fbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    brand: 'Emerald Extracts',
    brandId: 'brand1',
    price: 65.00,
    rating: 4.9,
    reviewCount: 38,
    category: 'Live Rosin',
    isNew: true
  },
  {
    id: 'product2',
    name: 'Blueberry Kush Hash',
    image: 'https://images.unsplash.com/photo-1543622748-5ee7237e8565?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    brand: 'Alpine Solventless',
    brandId: 'brand2',
    price: 55.00,
    rating: 4.7,
    reviewCount: 24,
    category: 'Bubble Hash'
  },
  {
    id: 'product3',
    name: 'Tropical Sunset Full Melt',
    image: 'https://images.unsplash.com/photo-1503262028195-93c528f03218?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    brand: 'Cosmic Concentrates',
    brandId: 'brand3',
    price: 70.00,
    rating: 4.8,
    reviewCount: 32,
    category: 'Full Melt Hash',
    isNew: true
  },
  {
    id: 'product4',
    name: 'OG Kush Cold Cure',
    image: 'https://images.unsplash.com/photo-1527238283252-5533ad095c8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    brand: 'Emerald Extracts',
    brandId: 'brand1',
    price: 60.00,
    rating: 4.6,
    reviewCount: 27,
    category: 'Cold Cure Rosin'
  }
];

const FeaturedSection = () => {
  return (
    <section className="py-16 bg-ghibli-cream">
      <div className="container mx-auto px-4">
        {/* Featured Brands */}
        <div className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-ghibli-green mb-2">Featured Brands</h2>
              <p className="text-ghibli-brown/80">Discover top-quality hash rosin producers.</p>
            </div>
            <Link to="/brands" className="text-ghibli-terracotta font-medium hover:text-ghibli-brown">
              View All Brands
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBrands.map(brand => (
              <BrandCard key={brand.id} {...brand} />
            ))}
          </div>
        </div>
        
        {/* Featured Products */}
        <div>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-ghibli-green mb-2">Featured Products</h2>
              <p className="text-ghibli-brown/80">Premium selections from our top brands.</p>
            </div>
            <Link to="/products" className="text-ghibli-terracotta font-medium hover:text-ghibli-brown">
              View All Products
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
