
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, MapPin, Phone, Edit, Save, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface UserProfile {
  name: string;
  email: string;
  bio: string;
  location: string;
  phone: string;
  profileImage: string;
}

const Profile = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    email: '',
    bio: '',
    location: '',
    phone: '',
    profileImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Check if user is logged in
  useEffect(() => {
    const checkAuth = () => {
      const user = localStorage.getItem('user');
      
      if (!user) {
        toast({
          variant: "destructive",
          title: "Authentication required",
          description: "Please sign in to view your profile.",
        });
        navigate('/signin');
        return;
      }
      
      // Load user data from localStorage (in a real app, you would fetch from an API)
      try {
        const userData = JSON.parse(user);
        setProfile(prev => ({
          ...prev,
          name: userData.name || 'Hash Enthusiast',
          email: userData.email || 'user@example.com',
        }));
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
      
      setIsLoading(false);
    };
    
    checkAuth();
  }, [navigate, toast]);
  
  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('user');
    
    toast({
      title: "Logged out successfully",
      description: "You have been signed out of your account.",
    });
    
    navigate('/');
  };
  
  const handleSaveProfile = () => {
    // In a real app, you would send this data to your backend
    // For now, we'll just update localStorage
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const userData = JSON.parse(user);
        const updatedUserData = { ...userData, ...profile };
        localStorage.setItem('user', JSON.stringify(updatedUserData));
        
        toast({
          title: "Profile updated",
          description: "Your profile changes have been saved.",
        });
        
        setIsEditing(false);
      } catch (error) {
        console.error('Error updating profile:', error);
        toast({
          variant: "destructive",
          title: "Update failed",
          description: "There was a problem updating your profile.",
        });
      }
    }
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse text-ghibli-green">Loading profile...</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 px-4 leaf-pattern">
        <div className="container mx-auto max-w-5xl">
          <div className="ghibli-card overflow-hidden">
            {/* Profile Header */}
            <div className="relative h-48 bg-gradient-to-r from-ghibli-sage to-ghibli-green">
              <div className="absolute -bottom-16 left-8 flex items-end">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white">
                    <img 
                      src={profile.profileImage} 
                      alt={profile.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {isEditing && (
                    <button className="absolute bottom-0 right-0 p-1.5 bg-ghibli-gold rounded-full text-white">
                      <ImageIcon size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>
            
            {/* Profile Body */}
            <div className="pt-20 px-8 pb-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  {isEditing ? (
                    <Input
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="text-2xl font-bold text-ghibli-green mb-1 max-w-xs"
                    />
                  ) : (
                    <h1 className="text-2xl font-bold text-ghibli-green">{profile.name}</h1>
                  )}
                  <div className="flex items-center text-ghibli-brown">
                    <Mail size={16} className="mr-2" />
                    {isEditing ? (
                      <Input
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        className="text-sm max-w-xs"
                      />
                    ) : (
                      <span>{profile.email}</span>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  {isEditing ? (
                    <Button
                      onClick={handleSaveProfile}
                      className="flex items-center space-x-1 bg-ghibli-green text-white hover:bg-ghibli-forest"
                    >
                      <Save size={16} />
                      <span>Save</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center space-x-1 bg-ghibli-gold text-ghibli-brown hover:bg-ghibli-gold/80"
                    >
                      <Edit size={16} />
                      <span>Edit Profile</span>
                    </Button>
                  )}
                  
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="border-ghibli-terracotta text-ghibli-terracotta hover:bg-ghibli-terracotta/10"
                  >
                    Logout
                  </Button>
                </div>
              </div>
              
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="bg-ghibli-beige/30">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="orders">Orders</TabsTrigger>
                  <TabsTrigger value="favorites">Favorites</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-lg font-semibold text-ghibli-green mb-4">About Me</h2>
                      {isEditing ? (
                        <Textarea
                          value={profile.bio}
                          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                          placeholder="Tell us about yourself..."
                          className="min-h-[120px]"
                        />
                      ) : (
                        <p className="text-ghibli-brown">
                          {profile.bio || "No bio information added yet."}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <h2 className="text-lg font-semibold text-ghibli-green mb-4">Contact Information</h2>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <MapPin size={18} className="text-ghibli-brown/50 mr-3" />
                          {isEditing ? (
                            <Input
                              value={profile.location}
                              onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                              placeholder="Your location"
                            />
                          ) : (
                            <span className="text-ghibli-brown">
                              {profile.location || "No location added yet."}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center">
                          <Phone size={18} className="text-ghibli-brown/50 mr-3" />
                          {isEditing ? (
                            <Input
                              value={profile.phone}
                              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                              placeholder="Your phone number"
                            />
                          ) : (
                            <span className="text-ghibli-brown">
                              {profile.phone || "No phone number added yet."}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="orders" className="pt-6">
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-ghibli-beige/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User size={24} className="text-ghibli-brown/50" />
                    </div>
                    <h3 className="text-xl font-semibold text-ghibli-green mb-2">No Orders Yet</h3>
                    <p className="text-ghibli-brown max-w-md mx-auto">
                      You haven't placed any orders yet. Explore our collection of premium hash rosin products!
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="favorites" className="pt-6">
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-ghibli-beige/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User size={24} className="text-ghibli-brown/50" />
                    </div>
                    <h3 className="text-xl font-semibold text-ghibli-green mb-2">No Favorites Yet</h3>
                    <p className="text-ghibli-brown max-w-md mx-auto">
                      You haven't added any products to your favorites yet. Browse our catalog and save your favorite items!
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews" className="pt-6">
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-ghibli-beige/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User size={24} className="text-ghibli-brown/50" />
                    </div>
                    <h3 className="text-xl font-semibold text-ghibli-green mb-2">No Reviews Yet</h3>
                    <p className="text-ghibli-brown max-w-md mx-auto">
                      You haven't written any reviews yet. Share your thoughts on products you've tried!
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
