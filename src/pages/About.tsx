
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-ghibli-cream leaf-pattern py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-ghibli-green mb-6">Our Story</h1>
              <p className="text-ghibli-brown text-lg md:text-xl">Connecting premium hash rosin brands with enthusiasts around the world.</p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="relative">
                    <div className="rounded-2xl overflow-hidden border-4 border-ghibli-beige shadow-xl">
                      <img 
                        src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Our team at work" 
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-ghibli-gold p-5 rounded-full shadow-lg">
                      <Leaf className="w-8 h-8 text-ghibli-brown" />
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-ghibli-green mb-6">Our Mission</h2>
                  <p className="text-ghibli-brown mb-6">
                    At BuyHashRosin, we believe that exceptional hash rosin deserves a platform that honors the craft and connects artisans with those who appreciate their work.
                  </p>
                  <p className="text-ghibli-brown mb-6">
                    We've created a magical marketplace where small-batch producers can showcase their products and grow their brands, while enthusiasts can discover new favorites from trusted sources.
                  </p>
                  <p className="text-ghibli-brown">
                    Our platform celebrates the artistry, science, and community that makes hash rosin special, fostering connections between makers and consumers who share a passion for quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-16 bg-ghibli-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-ghibli-green mb-12 text-center">Our Values</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="ghibli-card p-6">
                  <div className="w-16 h-16 bg-ghibli-green/10 rounded-full flex items-center justify-center mb-4">
                    <div className="w-10 h-10 bg-ghibli-green rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">1</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-ghibli-green mb-3">Quality First</h3>
                  <p className="text-ghibli-brown">
                    We carefully vet all brands to ensure they meet our strict quality standards, so consumers can shop with confidence.
                  </p>
                </div>
                
                <div className="ghibli-card p-6">
                  <div className="w-16 h-16 bg-ghibli-gold/10 rounded-full flex items-center justify-center mb-4">
                    <div className="w-10 h-10 bg-ghibli-gold rounded-full flex items-center justify-center">
                      <span className="text-ghibli-brown font-bold">2</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-ghibli-green mb-3">Community Focus</h3>
                  <p className="text-ghibli-brown">
                    We foster meaningful connections between brands and enthusiasts, creating a thriving ecosystem that benefits everyone.
                  </p>
                </div>
                
                <div className="ghibli-card p-6">
                  <div className="w-16 h-16 bg-ghibli-terracotta/10 rounded-full flex items-center justify-center mb-4">
                    <div className="w-10 h-10 bg-ghibli-terracotta rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">3</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-ghibli-green mb-3">Transparency</h3>
                  <p className="text-ghibli-brown">
                    We believe in clear, honest information about products, processes, and business practices throughout our platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-ghibli-green mb-12 text-center">Our Team</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-ghibli-beige mx-auto">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                        alt="Team member" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 bg-ghibli-green p-2 rounded-full border-2 border-white">
                      <Leaf className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-ghibli-green mb-1">Emma Chen</h3>
                  <p className="text-ghibli-brown text-sm mb-2">Founder & CEO</p>
                  <p className="text-ghibli-brown text-sm px-4">
                    Hash enthusiast with 8+ years of experience in the industry and a vision for a better marketplace.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-ghibli-beige mx-auto">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                        alt="Team member" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 bg-ghibli-green p-2 rounded-full border-2 border-white">
                      <Leaf className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-ghibli-green mb-1">Marcus Rivera</h3>
                  <p className="text-ghibli-brown text-sm mb-2">Head of Brand Relations</p>
                  <p className="text-ghibli-brown text-sm px-4">
                    Connecting brands with audiences through strategic partnerships and authentic storytelling.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-ghibli-beige mx-auto">
                      <img 
                        src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                        alt="Team member" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 bg-ghibli-green p-2 rounded-full border-2 border-white">
                      <Leaf className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-ghibli-green mb-1">Olivia Thompson</h3>
                  <p className="text-ghibli-brown text-sm mb-2">Community Manager</p>
                  <p className="text-ghibli-brown text-sm px-4">
                    Building and nurturing our growing community of brands and enthusiasts.
                  </p>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <div className="inline-block rounded-lg bg-ghibli-beige/30 px-6 py-4 max-w-2xl">
                  <p className="text-ghibli-brown italic">
                    "We're a small team with a big vision: to create the most trusted, community-driven marketplace for premium hash rosin in the world."
                  </p>
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

export default About;
