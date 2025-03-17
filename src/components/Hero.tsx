
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-brand-blue text-white pt-16 pb-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#FF6817_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-brand-orange">Innovation</span> Meets Excellence
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              We harness innovation and engineering expertise to deliver transformative solutions across industries. Discover technology that powers progress.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white font-medium px-6 py-6">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 font-medium px-6 py-6">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative w-full h-[400px] animate-slide-in">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange rounded-full blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl flex items-center justify-center p-6">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {[
                      "Quality", "Innovation", "Expertise", "Commitment"
                    ].map((value, index) => (
                      <div 
                        key={index} 
                        className="bg-white/10 p-4 rounded-lg text-center hover:bg-brand-orange/20 transition-colors duration-300"
                      >
                        <div className="font-semibold text-lg">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
