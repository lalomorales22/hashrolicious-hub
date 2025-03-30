
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is a placeholder for actual registration logic
    // In a real app, you would validate the inputs and handle registration
    console.log('Registering with:', { name, email, password, agreeTerms });
    
    // Validate passwords match
    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
      });
      return;
    }
    
    // Validate terms acceptance
    if (!agreeTerms) {
      toast({
        variant: "destructive",
        title: "Terms and Conditions",
        description: "Please agree to the Terms and Conditions to continue.",
      });
      return;
    }
    
    // Mock successful registration for demo purposes
    if (name && email && password) {
      // Store user info in localStorage (this is just for demo purposes)
      // In a real app, you would use a proper auth system
      localStorage.setItem('user', JSON.stringify({ name, email }));
      
      toast({
        title: "Registration successful!",
        description: "Your account has been created.",
      });
      
      navigate('/profile');
    } else {
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: "Please fill all required fields.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 px-4 leaf-pattern">
        <div className="w-full max-w-md">
          <div className="ghibli-card p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-ghibli-green">Create Account</h1>
              <p className="text-ghibli-brown mt-2">Join our community of hash enthusiasts</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-ghibli-brown/50" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 ghibli-input"
                    required
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-ghibli-brown/50" />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 ghibli-input"
                    required
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-ghibli-brown/50" />
                  </div>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 ghibli-input"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-ghibli-brown/50" />
                    ) : (
                      <Eye className="h-5 w-5 text-ghibli-brown/50" />
                    )}
                  </button>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-ghibli-brown/50" />
                  </div>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pl-10 ghibli-input"
                    required
                  />
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                  className="mt-1"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-ghibli-brown"
                >
                  I agree to the{" "}
                  <Link to="/terms" className="font-medium text-ghibli-green hover:text-ghibli-forest">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="font-medium text-ghibli-green hover:text-ghibli-forest">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              
              <Button
                type="submit"
                className="w-full ghibli-button"
              >
                Create Account
              </Button>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-ghibli-brown">
                  Already have an account?{" "}
                  <Link to="/signin" className="font-medium text-ghibli-green hover:text-ghibli-forest">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
