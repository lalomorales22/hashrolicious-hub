
import { Link } from 'react-router-dom';
import { MessageSquare, User, Star, Clock } from 'lucide-react';

// Sample forum topics
const forumTopics = [
  {
    id: 'topic1',
    title: 'What are the best temps for pressing live rosin?',
    author: 'RosinGuru',
    authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    replies: 28,
    category: 'Techniques',
    timeAgo: '3 days ago'
  },
  {
    id: 'topic2',
    title: 'Emerald Extracts Strawberry Banana Review',
    author: 'HashEnthusiast',
    authorAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    replies: 12,
    category: 'Reviews',
    timeAgo: '1 week ago'
  },
  {
    id: 'topic3',
    title: 'Best storage methods for preserving terpenes',
    author: 'TerpHunter',
    authorAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    replies: 35,
    category: 'Storage',
    timeAgo: '2 days ago'
  }
];

const CommunitySection = () => {
  return (
    <section className="py-16 bg-ghibli-beige/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-ghibli-green mb-3">Join Our Community</h2>
            <p className="text-ghibli-brown/80 mb-6">
              Connect with fellow enthusiasts, share your experiences, and stay up-to-date with the latest trends in the hash rosin world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/community" className="ghibli-button">
                Browse Discussions
              </Link>
              <Link to="/community/new-topic" className="ghibli-button-secondary">
                Start a New Topic
              </Link>
            </div>
          </div>
          
          {/* Recent Forum Topics */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-ghibli-green">Recent Discussions</h3>
              <Link to="/community" className="text-ghibli-terracotta font-medium hover:text-ghibli-brown text-sm">
                View All
              </Link>
            </div>
            
            <div className="space-y-5">
              {forumTopics.map(topic => (
                <div key={topic.id} className="border-b border-ghibli-beige pb-4 last:border-none last:pb-0">
                  <Link 
                    to={`/community/topic/${topic.id}`}
                    className="block hover:bg-ghibli-beige/30 rounded-lg p-3 -mx-3 transition-colors"
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                        <img 
                          src={topic.authorAvatar} 
                          alt={topic.author} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-ghibli-brown">{topic.title}</h4>
                      </div>
                      <span className="text-xs bg-ghibli-beige/70 text-ghibli-brown px-2 py-1 rounded-full">
                        {topic.category}
                      </span>
                    </div>
                    
                    <div className="flex justify-between text-sm text-ghibli-brown/70">
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        <span className="mr-4">{topic.author}</span>
                        <MessageSquare size={14} className="mr-1" />
                        <span>{topic.replies} replies</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>{topic.timeAgo}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Link to="/community" className="text-ghibli-green font-medium hover:underline">
                Load More Discussions
              </Link>
            </div>
          </div>
          
          {/* Community Stats */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-ghibli-gold/20 rounded-full flex items-center justify-center mb-3">
                <User size={24} className="text-ghibli-gold" />
              </div>
              <h4 className="text-2xl font-bold text-ghibli-green mb-1">2,500+</h4>
              <p className="text-ghibli-brown/80">Community Members</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-ghibli-terracotta/20 rounded-full flex items-center justify-center mb-3">
                <MessageSquare size={24} className="text-ghibli-terracotta" />
              </div>
              <h4 className="text-2xl font-bold text-ghibli-green mb-1">450+</h4>
              <p className="text-ghibli-brown/80">Active Discussions</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-ghibli-green/20 rounded-full flex items-center justify-center mb-3">
                <Star size={24} className="text-ghibli-green" />
              </div>
              <h4 className="text-2xl font-bold text-ghibli-green mb-1">120+</h4>
              <p className="text-ghibli-brown/80">Brand Participants</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
