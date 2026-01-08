import Image from "next/image";
import { FiCheck, FiAward, FiUsers, FiClock, FiTarget } from "react-icons/fi";
import { CheckCircle, SparklesIcon, AbstractShape } from "./SVGDecorations";

const features = [
  {
    icon: FiAward,
    title: "Industry Expertise",
    description: "10+ years of experience in digital marketing and brand management",
  },
  {
    icon: FiUsers,
    title: "Dedicated Team",
    description: "Expert professionals committed to your business success",
  },
  {
    icon: FiClock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your marketing needs",
  },
  {
    icon: FiTarget,
    title: "Result-Driven",
    description: "Data-backed strategies that deliver measurable outcomes",
  },
];

const benefits = [
  "Customized strategies for your business",
  "Transparent reporting and analytics",
  "Proven track record of success",
  "Competitive pricing packages",
  "Latest tools and technologies",
  "Continuous optimization and improvement",
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl animate-blob delay-400"></div>
        <AbstractShape className="absolute top-1/4 right-10 w-40 h-40 opacity-20 hidden lg:block" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative animate-fade-in-left">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl hover-lift transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4f46e5]/20 to-transparent"></div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 glass-card text-gray-800 p-6 rounded-2xl hidden md:block animate-float hover-glow">
              <SparklesIcon className="absolute -top-3 -right-3 w-8 h-8" />
              <p className="text-4xl font-bold gradient-text">10+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            {/* Decorative ring */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-dashed border-[#4f46e5]/30 rounded-full animate-spin-slow hidden md:block"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 animate-fade-in-right">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-[#4f46e5] font-medium text-sm mb-4">
                <CheckCircle className="w-5 h-5" />
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                We Help Businesses <span className="gradient-text-animated">Grow & Succeed</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At Mediaflip, we combine creativity with data-driven strategies to deliver exceptional results. Our team of experts is dedicated to helping your business reach its full potential.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass-card p-4 rounded-xl hover-lift group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#4f46e5] to-[#06b6d4] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 group-hover:text-[#4f46e5] transition-colors">{feature.title}</h4>
                      <p className="text-sm text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 group animate-fade-in-up"
                  style={{ animationDelay: `${(index + 4) * 80}ms` }}
                >
                  <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FiCheck className="text-white" size={12} />
                  </div>
                  <span className="text-gray-600 group-hover:text-gray-800 transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
