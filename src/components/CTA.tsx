
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16 bg-brand-blue text-white relative overflow-hidden">
      {/* Abstract decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 opacity-90">
            Partner with us to harness the power of innovation and engineering excellence. 
            Let's build something extraordinary together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white font-medium px-8 py-6">
              <Link to="/contact">
                Start a Project
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 font-medium px-8 py-6">
              <Link to="/about">
                Learn About Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
