
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BrandCard from '../components/BrandCard';

// Sample brand data (in a real app, this would come from an API)
const brandsData = [
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
  },
  {
    id: 'brand4',
    name: 'Mountain Melts',
    logo: 'https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    location: 'Washington, USA',
    rating: 4.6,
    productCount: 15
  },
  {
    id: 'brand5',
    name: 'Solventless Solutions',
    logo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    location: 'Michigan, USA',
    rating: 4.9,
    productCount: 9,
    featured: true
  },
  {
    id: 'brand6',
    name: 'Green Valley Extraction',
    logo: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    location: 'Nevada, USA',
    rating: 4.3,
    productCount: 7
  }
];

const regionOptions = ['All Regions', 'West Coast', 'East Coast', 'Midwest', 'Northwest', 'Southwest', 'International'];
const sortOptions = ['Featured', 'Name A-Z', 'Name Z-A', 'Highest Rated', 'Product Count'];

const Brands = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [sortBy, setSortBy] = useState('Featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter brands based on search query and selected region
  const filteredBrands = brandsData.filter(brand => {
    const matchesSearch = brand.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === 'All Regions' || brand.location.includes(selectedRegion.split(' ')[0]);
    return matchesSearch && matchesRegion;
  });

  // Sort brands based on selected sort option
  const sortedBrands = [...filteredBrands].sort((a, b) => {
    switch (sortBy) {
      case 'Name A-Z':
        return a.name.localeCompare(b.name);
      case 'Name Z-A':
        return b.name.localeCompare(a.name);
      case 'Highest Rated':
        return b.rating - a.rating;
      case 'Product Count':
        return b.productCount - a.productCount;
      case 'Featured':
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-ghibli-green/90 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Explore Hash Rosin Brands</h1>
            <p className="text-ghibli-cream text-lg max-w-3xl mx-auto">
              Discover premium solventless hash rosin producers from around the world, 
              carefully curated for quality and consistency.
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-ghibli-beige/30 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              {/* Search Bar */}
              <div className="relative w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Search brands..."
                  className="ghibli-input w-full pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ghibli-brown/60" size={18} />
              </div>
              
              {/* Filter Button (Mobile) */}
              <button 
                className="md:hidden ghibli-button-secondary w-full flex items-center justify-center gap-2"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter size={18} />
                <span>Filter & Sort</span>
                <ChevronDown size={18} className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Filter Options (Desktop) */}
              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-ghibli-brown" />
                  <select 
                    className="ghibli-input py-2"
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                  >
                    {regionOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-ghibli-brown">Sort by:</span>
                  <select 
                    className="ghibli-input py-2"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    {sortOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {/* Filter Options (Mobile) */}
            {isFilterOpen && (
              <div className="md:hidden mt-4 space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-ghibli-brown" />
                  <select 
                    className="ghibli-input py-2 w-full"
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                  >
                    {regionOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-ghibli-brown">Sort by:</span>
                  <select 
                    className="ghibli-input py-2 w-full"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    {sortOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Brands Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ghibli-green">
              {sortedBrands.length} Brands Found
            </h2>
            {filteredBrands.length === 0 && searchQuery && (
              <p className="mt-4 text-ghibli-brown">
                No brands found matching "{searchQuery}". Try adjusting your search.
              </p>
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedBrands.map(brand => (
              <BrandCard key={brand.id} {...brand} />
            ))}
          </div>
          
          {/* Pagination (Simplified for demo) */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex gap-2">
              <button className="px-4 py-2 border border-ghibli-beige rounded-lg text-ghibli-brown hover:bg-ghibli-beige/50 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 bg-ghibli-green text-white rounded-lg hover:bg-ghibli-forest transition-colors">
                1
              </button>
              <button className="px-4 py-2 border border-ghibli-beige rounded-lg text-ghibli-brown hover:bg-ghibli-beige/50 transition-colors">
                2
              </button>
              <button className="px-4 py-2 border border-ghibli-beige rounded-lg text-ghibli-brown hover:bg-ghibli-beige/50 transition-colors">
                3
              </button>
              <button className="px-4 py-2 border border-ghibli-beige rounded-lg text-ghibli-brown hover:bg-ghibli-beige/50 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-ghibli-beige/50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-ghibli-brown mb-6">Are You a Hash Rosin Brand?</h2>
            <p className="text-ghibli-brown/80 max-w-3xl mx-auto mb-8">
              Join our curated marketplace and connect with enthusiasts who appreciate quality solventless extracts. 
              Get your own branded page and showcase your products to a dedicated community.
            </p>
            <Link to="/brand-signup" className="ghibli-button inline-block">
              Register Your Brand
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Brands;
