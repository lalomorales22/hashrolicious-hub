
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronDown, Leaf, ArrowDownUp, SlidersHorizontal } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

// Sample product data (in a real app, this would come from an API)
const productsData = [
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
  },
  {
    id: 'product5',
    name: 'Gelato Fresh Press',
    image: 'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
    brand: 'Mountain Melts',
    brandId: 'brand4',
    price: 75.00,
    rating: 4.5,
    reviewCount: 19,
    category: 'Fresh Press Rosin',
    isNew: true
  },
  {
    id: 'product6',
    name: 'Wedding Cake Hash Rosin',
    image: 'https://images.unsplash.com/photo-1612441804231-77a36b284856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    brand: 'Solventless Solutions',
    brandId: 'brand5',
    price: 68.00,
    rating: 4.9,
    reviewCount: 42,
    category: 'Hash Rosin'
  },
  {
    id: 'product7',
    name: 'Zkittlez Live Rosin',
    image: 'https://images.unsplash.com/photo-1587334207809-362b4927cb21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    brand: 'Cosmic Concentrates',
    brandId: 'brand3',
    price: 72.00,
    rating: 4.7,
    reviewCount: 31,
    category: 'Live Rosin'
  },
  {
    id: 'product8',
    name: 'Sour Diesel Hash Rosin',
    image: 'https://images.unsplash.com/photo-1509904162472-5450c6c85184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    brand: 'Green Valley Extraction',
    brandId: 'brand6',
    price: 58.00,
    rating: 4.4,
    reviewCount: 15,
    category: 'Hash Rosin'
  }
];

const categoryOptions = ['All Categories', 'Live Rosin', 'Bubble Hash', 'Full Melt Hash', 'Cold Cure Rosin', 'Fresh Press Rosin', 'Hash Rosin'];
const brandOptions = ['All Brands', 'Emerald Extracts', 'Alpine Solventless', 'Cosmic Concentrates', 'Mountain Melts', 'Solventless Solutions', 'Green Valley Extraction'];
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Highest Rated', 'Newest First'];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState('Featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter products based on search, category, brand and price range
  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || product.category === selectedCategory;
    const matchesBrand = selectedBrand === 'All Brands' || product.brand === selectedBrand;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
  });

  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'Price: Low to High':
        return a.price - b.price;
      case 'Price: High to Low':
        return b.price - a.price;
      case 'Highest Rated':
        return b.rating - a.rating;
      case 'Newest First':
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      case 'Featured':
      default:
        return 0; // No specific sort for featured
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-ghibli-forest to-ghibli-green py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Explore Premium Hash Rosin</h1>
            <p className="text-ghibli-cream text-lg max-w-3xl mx-auto">
              From fresh press to cold cure, bubble hash to full melt – discover the finest solventless extracts
              from leading artisanal producers.
            </p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="sticky top-16 z-10 bg-ghibli-beige/30 backdrop-blur-sm py-4 border-b border-ghibli-beige">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              {/* Search Bar */}
              <div className="relative w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="ghibli-input w-full pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ghibli-brown/60" size={18} />
              </div>
              
              {/* Mobile Filter Button */}
              <button 
                className="md:hidden ghibli-button-secondary w-full flex items-center justify-center gap-2"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <SlidersHorizontal size={18} />
                <span>Filter & Sort</span>
                <ChevronDown size={18} className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Desktop Filter Options */}
              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Leaf size={18} className="text-ghibli-green" />
                  <select 
                    className="ghibli-input py-2"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categoryOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center gap-2">
                  <ArrowDownUp size={18} className="text-ghibli-terracotta" />
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
            
            {/* Mobile Filter Options */}
            {isFilterOpen && (
              <div className="md:hidden mt-4 space-y-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl">
                <div>
                  <label className="block text-sm font-medium text-ghibli-brown mb-1">Category</label>
                  <select 
                    className="ghibli-input py-2 w-full"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categoryOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-ghibli-brown mb-1">Brand</label>
                  <select 
                    className="ghibli-input py-2 w-full"
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                  >
                    {brandOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-ghibli-brown mb-1">Sort by</label>
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
                
                <div>
                  <label className="block text-sm font-medium text-ghibli-brown mb-1">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <div className="flex gap-4 items-center">
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={priceRange[0]} 
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full"
                    />
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={priceRange[1]} 
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters (Desktop) */}
            <div className="hidden md:block w-64 shrink-0">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md sticky top-36">
                <h3 className="text-xl font-bold text-ghibli-green mb-6">Refine Results</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-ghibli-brown font-medium mb-3">Categories</h4>
                    <div className="space-y-2">
                      {categoryOptions.slice(1).map(category => (
                        <label key={category} className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            name="category" 
                            checked={selectedCategory === category}
                            onChange={() => setSelectedCategory(category)}
                            className="accent-ghibli-green"
                          />
                          <span className="text-ghibli-brown/80">{category}</span>
                        </label>
                      ))}
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="category" 
                          checked={selectedCategory === 'All Categories'}
                          onChange={() => setSelectedCategory('All Categories')}
                          className="accent-ghibli-green"
                        />
                        <span className="text-ghibli-brown/80">All Categories</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-ghibli-brown font-medium mb-3">Brands</h4>
                    <div className="space-y-2">
                      {brandOptions.slice(1).map(brand => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            name="brand" 
                            checked={selectedBrand === brand}
                            onChange={() => setSelectedBrand(brand)}
                            className="accent-ghibli-green"
                          />
                          <span className="text-ghibli-brown/80">{brand}</span>
                        </label>
                      ))}
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="brand" 
                          checked={selectedBrand === 'All Brands'}
                          onChange={() => setSelectedBrand('All Brands')}
                          className="accent-ghibli-green"
                        />
                        <span className="text-ghibli-brown/80">All Brands</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-ghibli-brown font-medium mb-3">
                      Price Range: ${priceRange[0]} - ${priceRange[1]}
                    </h4>
                    <div className="space-y-3">
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={priceRange[0]} 
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="w-full"
                      />
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={priceRange[1]} 
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <button 
                    className="ghibli-button w-full"
                    onClick={() => {
                      setSelectedCategory('All Categories');
                      setSelectedBrand('All Brands');
                      setPriceRange([0, 100]);
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product Grid */}
            <div className="flex-grow">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-ghibli-green">
                  {sortedProducts.length} Products Found
                </h2>
                
                <div className="text-ghibli-brown/70 text-sm">
                  Showing {Math.min(8, sortedProducts.length)} of {sortedProducts.length} products
                </div>
              </div>
              
              {sortedProducts.length === 0 ? (
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center shadow-md">
                  <h3 className="text-xl font-medium text-ghibli-brown mb-2">No products found</h3>
                  <p className="text-ghibli-brown/70 mb-4">
                    Try adjusting your search or filter criteria to find what you're looking for.
                  </p>
                  <button 
                    className="ghibli-button-secondary"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All Categories');
                      setSelectedBrand('All Brands');
                      setPriceRange([0, 100]);
                    }}
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sortedProducts.map(product => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              )}
              
              {/* Pagination */}
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
          </div>
        </div>
        
        {/* Featured Collections Banner */}
        <div className="bg-ghibli-gold/20 py-16">
          <div className="container mx-auto px-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1612441804231-77a36b284856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Featured Collection" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-ghibli-green mb-4">Summer Collection 2023</h3>
                  <p className="text-ghibli-brown/80 mb-6">
                    Experience our limited-edition summer collection featuring the season's freshest harvests 
                    transformed into exceptional solventless extracts. From tropical fruit notes to complex floral 
                    profiles, this collection showcases the best of the summer growing season.
                  </p>
                  <Link to="/collection/summer-2023" className="ghibli-button self-start">
                    Explore Collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
