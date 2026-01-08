"use client";

import { useState } from "react";
import { FiSend, FiUser, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log(formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const inputClasses = "w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20 outline-none transition-all bg-white/50 backdrop-blur-sm hover:border-gray-300";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Full Name *
          </label>
          <div className="relative">
            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#4f46e5] transition-colors" size={18} />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="John Doe"
            />
          </div>
        </div>
        <div className="group">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email Address *
          </label>
          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#4f46e5] transition-colors" size={18} />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="john@example.com"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <div className="relative">
            <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#4f46e5] transition-colors" size={18} />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClasses}
              placeholder="+1 (234) 567-890"
            />
          </div>
        </div>
        <div>
          <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20 outline-none transition-all bg-white/50 backdrop-blur-sm hover:border-gray-300 cursor-pointer"
          >
            <option value="">Select a service</option>
            <option value="gmb">GMB Management</option>
            <option value="reputation">Reputation Management</option>
            <option value="social">Social Media Management</option>
            <option value="event">Event Management</option>
            <option value="digital">Digital Marketing</option>
            <option value="local">Local Advertisement</option>
            <option value="pr">PR Management</option>
          </select>
        </div>
      </div>

      <div className="group">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Message *
        </label>
        <div className="relative">
          <FiMessageSquare className="absolute left-4 top-4 text-gray-400 group-focus-within:text-[#4f46e5] transition-colors" size={18} />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20 outline-none transition-all resize-none bg-white/50 backdrop-blur-sm hover:border-gray-300"
            placeholder="Tell us about your project..."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-modern flex items-center justify-center gap-2 w-full md:w-auto group disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
