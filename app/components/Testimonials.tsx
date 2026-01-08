"use client";

import Image from "next/image";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content: "Mediaflip transformed our online presence completely. Our Google rankings improved dramatically, and we've seen a 200% increase in leads.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content: "The team at Mediaflip is exceptional. Their social media strategies helped us build a loyal community and increase engagement by 300%.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, LocalBite",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    content: "Their GMB management service is outstanding. We went from 20 to 200+ reviews in just 6 months, and our local visibility skyrocketed.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl animate-blob delay-300"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-[#4f46e5] font-medium text-sm mb-4">
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="text-yellow-400 fill-current w-4 h-4" />
              ))}
            </span>
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="gradient-text-animated">Clients Say</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 md:p-8 hover-lift group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote mark */}
              <div className="absolute -top-2 -left-2 w-10 h-10 bg-gradient-to-br from-[#4f46e5] to-[#06b6d4] rounded-full flex items-center justify-center text-white text-2xl font-serif opacity-80">
                "
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className="text-yellow-400 fill-current group-hover:scale-110 transition-transform" 
                    size={20} 
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#4f46e5]/20 group-hover:ring-[#4f46e5]/50 transition-all">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-[#4f46e5] transition-colors">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
