
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MessageSquare, User, Clock, Star, ThumbsUp, Eye, ChevronRight, BookOpen, Users, Calendar, Hash } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Sample forum topics
const forumTopics = [
  {
    id: 'topic1',
    title: 'What are the best temps for pressing live rosin?',
    content: 'I\'ve been experimenting with different temperatures when pressing and wanted to get the community\'s input on what works best...',
    author: 'RosinGuru',
    authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    authorBadge: 'Veteran',
    replies: 28,
    views: 342,
    likes: 19,
    category: 'Techniques',
    tags: ['pressing', 'temperature', 'yield', 'live rosin'],
    timeAgo: '3 days ago',
    isPinned: true,
    isHot: true
  },
  {
    id: 'topic2',
    title: 'Emerald Extracts Strawberry Banana Review',
    content: 'Just picked up some Strawberry Banana live rosin from Emerald Extracts and wanted to share my thoughts...',
    author: 'HashEnthusiast',
    authorAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    authorBadge: 'Reviewer',
    replies: 12,
    views: 187,
    likes: 24,
    category: 'Reviews',
    tags: ['emerald extracts', 'strawberry banana', 'review'],
    timeAgo: '1 week ago',
    isPinned: false,
    isHot: true
  },
  {
    id: 'topic3',
    title: 'Best storage methods for preserving terpenes',
    content: 'Looking for advice on how to best store my hash rosin to preserve the terpene profile...',
    author: 'TerpHunter',
    authorAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    authorBadge: 'Experienced',
    replies: 35,
    views: 412,
    likes: 41,
    category: 'Storage',
    tags: ['terpenes', 'storage', 'preservation', 'cold storage'],
    timeAgo: '2 days ago',
    isPinned: false,
    isHot: false
  },
  {
    id: 'topic4',
    title: 'Any recommendations for bubble hash washing machines?',
    content: 'I\'m looking to upgrade my setup and wanted to get some recommendations for quality bubble hash washing machines...',
    author: 'BubbleWasher',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    authorBadge: 'Novice',
    replies: 17,
    views: 203,
    likes: 9,
    category: 'Equipment',
    tags: ['bubble hash', 'washing machine', 'equipment', 'recommendation'],
    timeAgo: '5 days ago',
    isPinned: false,
    isHot: false
  },
  {
    id: 'topic5',
    title: 'Solventless extraction from trim - worth it?',
    content: 'Has anyone tried making hash rosin from trim? Is the quality and yield worth the effort?',
    author: 'EfficiencyKing',
    authorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    authorBadge: 'Experienced',
    replies: 23,
    views: 278,
    likes: 14,
    category: 'Extraction',
    tags: ['trim', 'yield', 'quality', 'efficiency'],
    timeAgo: '1 day ago',
    isPinned: false,
    isHot: true
  },
  {
    id: 'topic6',
    title: 'Introducing myself - new to hash rosin',
    content: 'Hey everyone! I\'m new to the hash rosin scene and wanted to introduce myself...',
    author: 'NewbieExtractor',
    authorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    authorBadge: 'Newbie',
    replies: 42,
    views: 185,
    likes: 38,
    category: 'Introductions',
    tags: ['newbie', 'introduction', 'beginner'],
    timeAgo: '4 days ago',
    isPinned: false,
    isHot: false
  }
];

// Popular categories
const popularCategories = [
  { name: 'Techniques', count: 127, icon: <BookOpen size={18} /> },
  { name: 'Reviews', count: 94, icon: <Star size={18} /> },
  { name: 'Storage', count: 83, icon: <Calendar size={18} /> },
  { name: 'Equipment', count: 76, icon: <Hash size={18} /> },
  { name: 'Extraction', count: 68, icon: <Users size={18} /> }
];

// Popular tags
const popularTags = [
  'live rosin', 'bubble hash', 'full melt', 'pressing techniques', 'cold cure', 
  'fresh press', 'terps', 'solventless', 'hash washing', 'micron', 'starting material'
];

// Active users
const activeUsers = [
  {
    username: 'RosinGuru',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    postCount: 152,
    joined: 'Jan 2020'
  },
  {
    username: 'TerpHunter',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    postCount: 118,
    joined: 'Mar 2021'
  },
  {
    username: 'HashEnthusiast',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    postCount: 97,
    joined: 'Nov 2020'
  }
];

const Community = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [currentView, setCurrentView] = useState('discussions');

  // Filter topics based on search and category
  const filteredTopics = forumTopics.filter(topic => {
    const matchesSearch = 
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      topic.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All Categories' || topic.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-ghibli-sage to-ghibli-green py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Join Our Community</h1>
            <p className="text-ghibli-cream text-lg max-w-3xl mx-auto mb-8">
              Connect with fellow hash rosin enthusiasts, share your experiences, learn new techniques,
              and stay up-to-date with the latest trends in solventless extraction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/community/new-topic" className="ghibli-button">
                Start a New Discussion
              </Link>
              <Link to="/signup" className="ghibli-button-secondary">
                Create an Account
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Column */}
            <div className="lg:w-2/3">
              {/* Search and View Selector */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      placeholder="Search discussions..."
                      className="ghibli-input w-full pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ghibli-brown/60" size={18} />
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      className={`px-4 py-2 rounded-lg ${currentView === 'discussions' 
                        ? 'bg-ghibli-green text-white' 
                        : 'bg-ghibli-beige/50 text-ghibli-brown hover:bg-ghibli-beige/70'}`}
                      onClick={() => setCurrentView('discussions')}
                    >
                      Discussions
                    </button>
                    <button 
                      className={`px-4 py-2 rounded-lg ${currentView === 'guides' 
                        ? 'bg-ghibli-green text-white' 
                        : 'bg-ghibli-beige/50 text-ghibli-brown hover:bg-ghibli-beige/70'}`}
                      onClick={() => setCurrentView('guides')}
                    >
                      Guides
                    </button>
                    <button 
                      className={`px-4 py-2 rounded-lg ${currentView === 'reviews' 
                        ? 'bg-ghibli-green text-white' 
                        : 'bg-ghibli-beige/50 text-ghibli-brown hover:bg-ghibli-beige/70'}`}
                      onClick={() => setCurrentView('reviews')}
                    >
                      Reviews
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Category Tabs */}
              <div className="mb-6 overflow-x-auto">
                <div className="flex space-x-2 min-w-max">
                  <button 
                    className={`px-4 py-2 rounded-full whitespace-nowrap ${
                      selectedCategory === 'All Categories' 
                        ? 'bg-ghibli-green text-white' 
                        : 'bg-white/70 text-ghibli-brown hover:bg-ghibli-beige/50'
                    }`}
                    onClick={() => setSelectedCategory('All Categories')}
                  >
                    All Categories
                  </button>
                  {popularCategories.map(category => (
                    <button 
                      key={category.name}
                      className={`px-4 py-2 rounded-full whitespace-nowrap flex items-center gap-1 ${
                        selectedCategory === category.name 
                          ? 'bg-ghibli-green text-white' 
                          : 'bg-white/70 text-ghibli-brown hover:bg-ghibli-beige/50'
                      }`}
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      {category.icon}
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Topics */}
              <div className="space-y-4">
                {filteredTopics.length === 0 ? (
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center shadow-md">
                    <h3 className="text-xl font-medium text-ghibli-brown mb-2">No discussions found</h3>
                    <p className="text-ghibli-brown/70 mb-4">
                      Try adjusting your search criteria or
                    </p>
                    <Link to="/community/new-topic" className="ghibli-button inline-block">
                      Start a New Discussion
                    </Link>
                  </div>
                ) : (
                  <>
                    {/* Pinned Topics */}
                    {filteredTopics.some(topic => topic.isPinned) && (
                      <div className="mb-6">
                        <h3 className="text-sm font-medium text-ghibli-brown/70 uppercase mb-3">Pinned Discussions</h3>
                        {filteredTopics
                          .filter(topic => topic.isPinned)
                          .map(topic => (
                            <div 
                              key={topic.id} 
                              className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-md border-l-4 border-ghibli-gold mb-3"
                            >
                              <Link to={`/community/topic/${topic.id}`} className="block">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                    <img 
                                      src={topic.authorAvatar} 
                                      alt={topic.author} 
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-ghibli-green text-lg">{topic.title}</h4>
                                    <div className="flex items-center text-sm text-ghibli-brown/70">
                                      <span className="font-medium text-ghibli-brown">{topic.author}</span>
                                      <span className="mx-2">•</span>
                                      <span>{topic.timeAgo}</span>
                                      {topic.isHot && (
                                        <>
                                          <span className="mx-2">•</span>
                                          <span className="bg-ghibli-terracotta/80 text-white px-2 py-0.5 rounded text-xs font-bold">
                                            Hot
                                          </span>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <p className="text-ghibli-brown/80 mb-3 line-clamp-2">{topic.content}</p>
                                <div className="flex flex-wrap gap-1 mb-3">
                                  {topic.tags.map(tag => (
                                    <span key={tag} className="bg-ghibli-beige/50 text-ghibli-brown/80 px-2 py-0.5 rounded-full text-xs">
                                      #{tag}
                                    </span>
                                  ))}
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1 text-ghibli-brown/70">
                                      <MessageSquare size={14} />
                                      <span>{topic.replies} replies</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-ghibli-brown/70">
                                      <Eye size={14} />
                                      <span>{topic.views} views</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-ghibli-brown/70">
                                      <ThumbsUp size={14} />
                                      <span>{topic.likes} likes</span>
                                    </div>
                                  </div>
                                  <div className="text-ghibli-green flex items-center">
                                    <span className="font-medium">Read more</span>
                                    <ChevronRight size={16} />
                                  </div>
                                </div>
                              </Link>
                            </div>
                          ))}
                      </div>
                    )}
                    
                    {/* Regular Topics */}
                    <h3 className="text-sm font-medium text-ghibli-brown/70 uppercase mb-3">Recent Discussions</h3>
                    {filteredTopics
                      .filter(topic => !topic.isPinned)
                      .map(topic => (
                        <div 
                          key={topic.id} 
                          className={`bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md ${topic.isHot ? 'border-l-4 border-ghibli-terracotta/70' : ''}`}
                        >
                          <Link to={`/community/topic/${topic.id}`} className="block">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                <img 
                                  src={topic.authorAvatar} 
                                  alt={topic.author} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-bold text-ghibli-green text-lg">{topic.title}</h4>
                                <div className="flex items-center text-sm text-ghibli-brown/70">
                                  <span className="font-medium text-ghibli-brown">{topic.author}</span>
                                  <span className="mx-2">•</span>
                                  <span>{topic.timeAgo}</span>
                                  {topic.isHot && (
                                    <>
                                      <span className="mx-2">•</span>
                                      <span className="bg-ghibli-terracotta/80 text-white px-2 py-0.5 rounded text-xs font-bold">
                                        Hot
                                      </span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                            <p className="text-ghibli-brown/80 mb-3 line-clamp-2">{topic.content}</p>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {topic.tags.map(tag => (
                                <span key={tag} className="bg-ghibli-beige/50 text-ghibli-brown/80 px-2 py-0.5 rounded-full text-xs">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1 text-ghibli-brown/70">
                                  <MessageSquare size={14} />
                                  <span>{topic.replies} replies</span>
                                </div>
                                <div className="flex items-center gap-1 text-ghibli-brown/70">
                                  <Eye size={14} />
                                  <span>{topic.views} views</span>
                                </div>
                                <div className="flex items-center gap-1 text-ghibli-brown/70">
                                  <ThumbsUp size={14} />
                                  <span>{topic.likes} likes</span>
                                </div>
                              </div>
                              <div className="text-ghibli-green flex items-center">
                                <span className="font-medium">Read more</span>
                                <ChevronRight size={16} />
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                  </>
                )}
              </div>
              
              {/* Pagination */}
              <div className="mt-8 flex justify-center">
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
            
            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-6">
              {/* About Community */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-ghibli-green mb-4">About Our Community</h3>
                <p className="text-ghibli-brown/80 mb-4">
                  Welcome to the BuyHashRosin community! This is a place for enthusiasts, producers, and consumers 
                  to connect, share knowledge, and discuss all aspects of hash rosin and solventless extracts.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ghibli-terracotta">2,500+</div>
                    <div className="text-sm text-ghibli-brown/70">Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ghibli-terracotta">450+</div>
                    <div className="text-sm text-ghibli-brown/70">Topics</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link to="/community/guidelines" className="text-sm text-ghibli-green hover:underline">
                    Community Guidelines
                  </Link>
                  <span className="text-ghibli-brown/60">•</span>
                  <Link to="/community/faq" className="text-sm text-ghibli-green hover:underline">
                    FAQ
                  </Link>
                </div>
              </div>
              
              {/* Popular Tags */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-ghibli-green mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map(tag => (
                    <Link 
                      key={tag} 
                      to={`/community/tag/${tag}`}
                      className="bg-ghibli-beige/60 hover:bg-ghibli-beige text-ghibli-brown px-3 py-1.5 rounded-full text-sm transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Active Users */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-ghibli-green mb-4">Active Members</h3>
                <div className="space-y-4">
                  {activeUsers.map(user => (
                    <Link key={user.username} to={`/community/user/${user.username}`} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img 
                          src={user.avatar} 
                          alt={user.username} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-ghibli-brown">{user.username}</div>
                        <div className="text-xs text-ghibli-brown/70">
                          {user.postCount} posts • Joined {user.joined}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link 
                  to="/community/members" 
                  className="mt-4 text-ghibli-green hover:underline text-sm font-medium flex items-center justify-center gap-1"
                >
                  View All Members
                  <ChevronRight size={16} />
                </Link>
              </div>
              
              {/* Community Events */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-ghibli-green mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  <div className="border-b border-ghibli-beige pb-3">
                    <h4 className="font-bold text-ghibli-brown">Live Q&A with Emerald Extracts</h4>
                    <p className="text-sm text-ghibli-brown/80 mb-2">
                      Join us for a live discussion with the head extractor from Emerald Extracts.
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-ghibli-terracotta">June 15, 2023 • 4:00 PM PST</span>
                      <Link to="/community/events/emerald-qa" className="text-ghibli-green hover:underline">
                        RSVP
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-ghibli-brown">Hash Washing Techniques Workshop</h4>
                    <p className="text-sm text-ghibli-brown/80 mb-2">
                      Learn advanced techniques for maximizing quality and yield in your bubble hash process.
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-ghibli-terracotta">June 22, 2023 • 5:30 PM PST</span>
                      <Link to="/community/events/washing-workshop" className="text-ghibli-green hover:underline">
                        RSVP
                      </Link>
                    </div>
                  </div>
                </div>
                <Link 
                  to="/community/events" 
                  className="mt-4 text-ghibli-green hover:underline text-sm font-medium flex items-center justify-center gap-1"
                >
                  View All Events
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;
