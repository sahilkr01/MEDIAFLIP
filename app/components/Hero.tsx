import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import { CirclePattern, FloatingShapes, RocketIcon, ChartIcon, StarIcon } from "./SVGDecorations";

const Hero = () => {
  return (
    <section className="pt-20 md:pt-24 min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient blobs for glass effect visibility */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300/40 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl animate-blob delay-200"></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-indigo-300/30 rounded-full blur-3xl animate-blob delay-400"></div>
      </div>
      
      {/* Decorative SVGs */}
      <CirclePattern className="absolute top-20 right-10 w-40 h-40 opacity-30 svg-float hidden lg:block" />
      <FloatingShapes className="absolute bottom-20 left-10 w-60 h-60 opacity-20 hidden lg:block" />
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Small Title Badge */}
            <div className="inline-flex items-center gap-2 animate-fade-in-up">
              <div className="relative">
                <span className="relative z-10 bg-gradient-to-r from-[#4f46e5] to-[#06b6d4] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                  ✨ Accepting New Retail Partners for Q4
                </span>
                {/* Curved background decoration */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#4f46e5]/20 to-[#06b6d4]/20 rounded-full blur-md"></div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up delay-100">
              Transform Your{" "}
              <span className="gradient-text-animated">Digital Presence</span>{" "}
              with Mediaflip
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl animate-fade-in-up delay-200">
              We specialize in GMB management, reputation building, social media strategy, 
              and comprehensive digital marketing solutions that drive real results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <Link href="/contact" className="flex items-center justify-center gap-2 group bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
                Get Free Audit
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="btn-secondary flex items-center justify-center gap-2 hover-lift">
                <FiPlay />
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              {/* Decorative ring behind image */}
              <div className="absolute inset-0 -m-4 border-2 border-dashed border-[#4f46e5]/20 rounded-3xl animate-spin-slow"></div>
              
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                alt="Digital Marketing Dashboard"
                fill
                className="object-cover rounded-2xl shadow-2xl hover-lift transition-all duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
