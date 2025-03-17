
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs, from mobile apps to enterprise systems.",
    image: "https://images.unsplash.com/photo-1581092921461-fd0e5300c235?q=80&w=2070&auto=format&fit=crop",
    link: "/services#software"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to optimize your digital operations.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    link: "/services#cloud"
  },
  {
    title: "IoT & Embedded Systems",
    description: "Connect devices and gather actionable insights with our IoT development expertise.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    link: "/services#iot"
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-brand-gray/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            End-to-end solutions that drive digital transformation and business growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-blue">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button 
                  asChild 
                  variant="ghost" 
                  className="text-brand-orange hover:text-brand-orange/90 hover:bg-brand-orange/10 p-0 font-medium group"
                >
                  <Link to={service.link} className="flex items-center">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-brand-blue hover:bg-brand-blue/90 text-white font-medium px-6">
            <Link to="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
