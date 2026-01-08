import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import { CirclePattern, FloatingShapes, RocketIcon, ChartIcon, StarIcon } from "./SVGDecorations";
import CountUp from "./CountUp";

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
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full animate-fade-in-up">
              <RocketIcon className="w-5 h-5" />
              <span className="text-[#4f46e5] font-medium text-sm">#1 Digital Marketing Agency</span>
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
              <Link href="/packages" className="btn-modern flex items-center justify-center gap-2 group">
                View Our Packages
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="btn-secondary flex items-center justify-center gap-2 hover-lift">
                <FiPlay />
                Learn More
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200 animate-fade-in-up delay-400">
              <div className="hover-scale cursor-default">
                <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                  <CountUp end={500} suffix="+" />
                </h3>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div>
              <div className="hover-scale cursor-default">
                <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                  <CountUp end={1000} suffix="+" />
                </h3>
                <p className="text-gray-500 text-sm">Projects Done</p>
              </div>
              <div className="hover-scale cursor-default">
                <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                  <CountUp end={98} suffix="%" />
                </h3>
                <p className="text-gray-500 text-sm">Success Rate</p>
              </div>
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
              
              {/* Floating Cards */}
              <div className="absolute -left-4 top-1/4 glass-card p-4 rounded-xl hidden md:block animate-float hover-glow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <ChartIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Growth Rate</p>
                    <p className="font-bold text-gray-800">+127%</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-4 bottom-1/4 glass-card p-4 rounded-xl hidden md:block animate-float-reverse hover-glow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                    <StarIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Rating</p>
                    <p className="font-bold text-gray-800">4.9/5.0</p>
                  </div>
                </div>
              </div>
              
              {/* New floating element */}
              <div className="absolute left-1/2 -bottom-6 transform -translate-x-1/2 glass-card px-6 py-3 rounded-full hidden md:flex items-center gap-3 animate-fade-in-up delay-500">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#06b6d4] flex items-center justify-center text-white text-xs font-bold">J</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-xs font-bold">M</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-xs font-bold">S</div>
                </div>
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-800">2,847</span> businesses trust us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
