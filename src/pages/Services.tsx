
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { CheckCircle, Code, Cloud, Cpu, LineChart } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl opacity-90">
              Comprehensive technology solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section className="py-16 bg-white" id="software">
        <div className="container mx-auto px-6">
          <ServiceSection 
            title="Software Development"
            description="Custom software solutions that drive business growth and digital transformation."
            icon={<Code className="h-12 w-12 text-brand-orange" />}
            features={[
              "Custom Web Applications",
              "Mobile App Development",
              "Enterprise Software",
              "API Development & Integration"
            ]}
            image="https://images.unsplash.com/photo-1581092921461-fd0e5300c235?q=80&w=2070&auto=format&fit=crop"
            isReversed={false}
          />
        </div>
      </section>
      
      <section className="py-16 bg-brand-gray/30" id="cloud">
        <div className="container mx-auto px-6">
          <ServiceSection 
            title="Cloud Solutions"
            description="Scalable, secure, and optimized cloud infrastructure to power your digital operations."
            icon={<Cloud className="h-12 w-12 text-brand-orange" />}
            features={[
              "Cloud Migration",
              "Infrastructure as Code",
              "DevOps Automation",
              "Managed Cloud Services"
            ]}
            image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            isReversed={true}
          />
        </div>
      </section>
      
      <section className="py-16 bg-white" id="iot">
        <div className="container mx-auto px-6">
          <ServiceSection 
            title="IoT & Embedded Systems"
            description="Connect devices and gather actionable insights with our IoT development expertise."
            icon={<Cpu className="h-12 w-12 text-brand-orange" />}
            features={[
              "IoT Solution Architecture",
              "Embedded Software Development",
              "Smart Device Integration",
              "Real-time Data Processing"
            ]}
            image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
            isReversed={false}
          />
        </div>
      </section>
      
      <section className="py-16 bg-brand-gray/30" id="consulting">
        <div className="container mx-auto px-6">
          <ServiceSection 
            title="Tech Consulting"
            description="Strategic technology advisory to help you make informed decisions and maximize ROI."
            icon={<LineChart className="h-12 w-12 text-brand-orange" />}
            features={[
              "Technology Assessment",
              "Digital Transformation Strategy",
              "System Architecture Design",
              "Technical Due Diligence"
            ]}
            image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
            isReversed={true}
          />
        </div>
      </section>
      
      <CTA />
      <Footer />
    </div>
  );
};

const ServiceSection = ({ 
  title, 
  description, 
  icon, 
  features, 
  image, 
  isReversed 
}: { 
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
  isReversed: boolean;
}) => (
  <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
    <div className="lg:w-1/2">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-3xl font-bold ml-4 text-brand-blue">{title}</h2>
      </div>
      <p className="text-lg text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-brand-orange mr-2 mt-1 shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="lg:w-1/2">
      <div className="rounded-lg overflow-hidden shadow-xl">
        <img src={image} alt={title} className="w-full h-auto" />
      </div>
    </div>
  </div>
);

export default Services;
