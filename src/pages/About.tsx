
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Users, TrendingUp, Clock, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl opacity-90">
              Driving innovation through engineering excellence and unwavering commitment.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-brand-blue">Our Story</h2>
              <div className="h-1 w-20 bg-brand-orange mx-auto mb-6"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Founded in 2015, InnoExcel Solutions began with a simple vision: to create technology solutions that transform businesses and drive meaningful progress. What started as a small team of passionate engineers has grown into a dynamic company trusted by organizations across various industries.
              </p>
              <p>
                Our journey has been defined by our unwavering commitment to excellence, continuous innovation, and client success. We believe that technology should not only solve problems but also create new possibilities and opportunities.
              </p>
              <p>
                Today, we continue to push boundaries, combining our technical expertise with creative thinking to deliver solutions that give our clients a competitive edge in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-brand-gray/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard 
              icon={<Users className="h-10 w-10 text-brand-orange" />}
              number="50+"
              label="Team Members"
            />
            <StatCard 
              icon={<TrendingUp className="h-10 w-10 text-brand-orange" />}
              number="200+"
              label="Projects Completed"
            />
            <StatCard 
              icon={<Clock className="h-10 w-10 text-brand-orange" />}
              number="8+"
              label="Years Experience"
            />
            <StatCard 
              icon={<Award className="h-10 w-10 text-brand-orange" />}
              number="15+"
              label="Industry Awards"
            />
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-blue">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries leading our innovation journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember 
              name="Alex Johnson"
              role="Chief Executive Officer"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
            />
            <TeamMember 
              name="Sarah Chen"
              role="Chief Technology Officer"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
            />
            <TeamMember 
              name="Michael Rodriguez"
              role="VP of Engineering"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>
      
      <CTA />
      <Footer />
    </div>
  );
};

const StatCard = ({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) => (
  <div className="bg-white rounded-lg p-6 shadow-md text-center">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-4xl font-bold text-brand-blue mb-2">{number}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

const TeamMember = ({ name, role, image }: { name: string; role: string; image: string }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 group">
    <div className="h-80 overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold text-brand-blue">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  </div>
);

export default About;
