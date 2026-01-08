import Link from "next/link";
import { FiCheck, FiArrowRight } from "react-icons/fi";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  period?: string;
  delay?: number;
}

const PricingCard = ({ name, price, description, features, isPopular = false, period = "/month", delay = 0 }: PricingCardProps) => {
  return (
    <div
      className={`relative glass-card rounded-2xl p-6 md:p-8 hover-lift group animate-fade-in-up ${
        isPopular ? "border-2 border-[#4f46e5] scale-105 z-10" : ""
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-[#4f46e5] to-[#06b6d4] text-white text-sm font-medium px-4 py-1 rounded-full shadow-lg animate-pulse-slow">
            Most Popular
          </span>
        </div>
      )}
      
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
        <div className={`absolute -top-10 -right-10 w-20 h-20 ${isPopular ? 'bg-gradient-to-br from-[#4f46e5]/10 to-[#06b6d4]/10' : 'bg-gray-100/50'} rotate-45`}></div>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#4f46e5] transition-colors">{name}</h3>
        <p className="text-gray-500 text-sm mb-4">{description}</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className={`text-4xl md:text-5xl font-bold ${isPopular ? 'gradient-text' : 'text-[#4f46e5]'}`}>{price}</span>
          <span className="text-gray-500">{period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li 
            key={index} 
            className="flex items-start gap-3 group/item"
          >
            <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
              <FiCheck className="text-white" size={12} />
            </div>
            <span className="text-gray-600 group-hover/item:text-gray-800 transition-colors">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={`group/btn flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
          isPopular
            ? "bg-gradient-to-r from-[#4f46e5] to-[#06b6d4] text-white hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105"
            : "bg-gray-100 text-gray-800 hover:bg-gradient-to-r hover:from-[#4f46e5] hover:to-[#06b6d4] hover:text-white"
        }`}
      >
        Get Started
        <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default PricingCard;
