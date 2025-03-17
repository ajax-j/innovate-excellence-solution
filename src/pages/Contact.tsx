
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! We'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">
              Get in touch with our team to discuss your project or ask questions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-blue">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below to start a conversation. We're excited to learn about your project and explore how we can help you achieve your goals.
              </p>
              
              <div className="space-y-6 mb-8">
                <ContactInfo 
                  icon={<Phone className="h-5 w-5 text-brand-orange" />}
                  title="Phone"
                  content="+1 (123) 456-7890"
                />
                <ContactInfo 
                  icon={<Mail className="h-5 w-5 text-brand-orange" />}
                  title="Email"
                  content="info@innoexcel.com"
                />
                <ContactInfo 
                  icon={<MapPin className="h-5 w-5 text-brand-orange" />}
                  title="Office"
                  content="123 Innovation Drive, Tech City, TC 12345"
                />
                <ContactInfo 
                  icon={<Clock className="h-5 w-5 text-brand-orange" />}
                  title="Business Hours"
                  content="Monday-Friday: 9AM-6PM EST"
                />
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      label="Your Name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <FormField
                      label="Company"
                      name="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <FormField
                    label="Subject"
                    name="subject"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or question..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-medium py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-brand-gray/30 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-blue">Find Us</h2>
          </div>
          
          <div className="h-96 bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Placeholder for map (in a real app, you would embed Google Maps here) */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <p className="text-lg text-gray-600">Map Placeholder - Google Maps would go here</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const ContactInfo = ({ 
  icon, 
  title, 
  content 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string; 
}) => (
  <div className="flex items-start">
    <div className="bg-brand-gray/50 p-3 rounded-full mr-4">
      {icon}
    </div>
    <div>
      <h3 className="font-medium text-brand-blue">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

const FormField = ({ 
  label, 
  name, 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  required = false 
}: { 
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) => (
  <div className="space-y-2">
    <label htmlFor={name} className="text-sm font-medium text-gray-700">
      {label}
    </label>
    <Input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full"
    />
  </div>
);

export default Contact;
