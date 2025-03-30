
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Check, 
  Factory, 
  Mail, 
  MapPin, 
  Upload, 
  Instagram, 
  Globe, 
  Lock,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from '@/components/ui/form';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  brandName: z.string().min(2, "Brand name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  location: z.string().min(2, "Location is required"),
  description: z.string().min(10, "Please provide a brief description of your brand"),
  website: z.string().optional(),
  instagram: z.string().optional(),
  termsAgreed: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const BrandSignup = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      brandName: "",
      email: "",
      password: "",
      location: "",
      description: "",
      website: "",
      instagram: "",
      termsAgreed: false,
    },
  });
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (values: FormValues) => {
    // This would be replaced with actual API call in production
    console.log("Form submitted:", values);
    console.log("Logo uploaded:", uploadedImage);
    
    // Show success toast
    toast({
      title: "Brand Registration Started",
      description: "Your brand registration has been submitted for review. We'll contact you soon!",
    });
    
    // In a real app, you'd wait for API response before redirecting
    setTimeout(() => {
      navigate('/profile');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 px-4 leaf-pattern">
        <div className="container mx-auto max-w-4xl">
          <div className="ghibli-card p-8">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-ghibli-green">Register Your Brand</h1>
              <p className="text-ghibli-brown mt-3 max-w-2xl mx-auto">Join our curated marketplace for premium hash rosin producers and connect with a community of enthusiasts.</p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left column - Brand details */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-xl font-semibold text-ghibli-green flex items-center">
                        <Factory className="mr-2 h-5 w-5" />
                        Brand Information
                      </h2>
                      <p className="text-sm text-ghibli-brown/80">Tell us about your brand and products</p>
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="brandName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Brand Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Brand Name" className="ghibli-input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <MapPin className="mr-1 h-4 w-4" />
                            Location
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="City, State/Province, Country" className="ghibli-input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Brand Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your brand, production methods, and what makes your products special..." 
                              className="ghibli-input min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* Brand Logo Upload */}
                    <div>
                      <FormLabel>Brand Logo</FormLabel>
                      <div className="mt-1 flex items-center">
                        <div className={`w-24 h-24 rounded-full ${uploadedImage ? '' : 'bg-ghibli-beige/30'} mr-4 flex items-center justify-center overflow-hidden border-2 border-ghibli-beige`}>
                          {uploadedImage ? (
                            <img src={uploadedImage} alt="Brand logo preview" className="w-full h-full object-cover" />
                          ) : (
                            <Upload className="h-8 w-8 text-ghibli-brown/50" />
                          )}
                        </div>
                        <div>
                          <Button 
                            type="button" 
                            variant="outline" 
                            className="relative"
                            onClick={() => document.getElementById('logo-upload')?.click()}
                          >
                            Choose Logo
                            <input
                              id="logo-upload"
                              type="file"
                              accept="image/*"
                              className="sr-only"
                              onChange={handleImageUpload}
                            />
                          </Button>
                          <p className="text-xs text-ghibli-brown/70 mt-2">
                            Square format recommended. PNG or JPG.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right column - Contact & Login info */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-xl font-semibold text-ghibli-green flex items-center">
                        <User className="mr-2 h-5 w-5" />
                        Account Information
                      </h2>
                      <p className="text-sm text-ghibli-brown/80">Create your account credentials</p>
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <Mail className="mr-1 h-4 w-4" />
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@yourbrand.com" className="ghibli-input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <Lock className="mr-1 h-4 w-4" />
                            Password
                          </FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Create a secure password" className="ghibli-input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="space-y-2 pt-4">
                      <h2 className="text-xl font-semibold text-ghibli-green flex items-center">
                        <Globe className="mr-2 h-5 w-5" />
                        Online Presence
                      </h2>
                      <p className="text-sm text-ghibli-brown/80">Help customers find you online</p>
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <Globe className="mr-1 h-4 w-4" />
                            Website (Optional)
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="https://yourbrand.com" className="ghibli-input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="instagram"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <Instagram className="mr-1 h-4 w-4" />
                            Instagram (Optional)
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="@yourbrand" className="ghibli-input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                {/* Terms and conditions & submit */}
                <div className="pt-6 border-t border-ghibli-beige">
                  <FormField
                    control={form.control}
                    name="termsAgreed"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 mb-8">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-ghibli-brown">
                            I agree to the{" "}
                            <a href="/terms" className="text-ghibli-green hover:text-ghibli-forest underline">
                              Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="/privacy" className="text-ghibli-green hover:text-ghibli-forest underline">
                              Privacy Policy
                            </a>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 items-center">
                    <ul className="text-sm text-ghibli-brown/80 list-none space-y-1">
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-ghibli-green mr-2" />
                        Dedicated brand profile page
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-ghibli-green mr-2" />
                        Product showcase with details
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-ghibli-green mr-2" />
                        Connect with hash enthusiasts
                      </li>
                    </ul>
                    
                    <Button type="submit" className="ghibli-button md:ml-auto">
                      Submit Application
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BrandSignup;
