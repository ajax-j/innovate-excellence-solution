
import { 
  Award, 
  Users, 
  Lightbulb, 
  CheckCircle 
} from "lucide-react";

const coreValues = [
  {
    title: "Quality",
    description: "We craft solutions with precision, ensuring excellence in every line of code and design.",
    icon: Award,
    color: "bg-blue-100 text-blue-700"
  },
  {
    title: "Personnel",
    description: "Our team of visionary experts transforms challenges into opportunities with unmatched expertise.",
    icon: Users,
    color: "bg-amber-100 text-amber-700"
  },
  {
    title: "Innovation",
    description: "We pioneer future-ready solutions, blending creativity with cutting-edge technology.",
    icon: Lightbulb,
    color: "bg-purple-100 text-purple-700"
  },
  {
    title: "Commitment",
    description: "Driven by dedication, we deliver beyond expectations, ensuring lasting impact and trust.",
    icon: CheckCircle,
    color: "bg-green-100 text-green-700"
  }
];

const CoreValues = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue">Our Core Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Founded on principles that drive excellence and innovation in everything we do.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${value.color} w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-blue text-center">{value.title}</h3>
              <p className="text-gray-600 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
