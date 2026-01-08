import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import CTA from "../../components/CTA";
import WhatsAppButton from "../../components/WhatsAppButton";
import { FiStar, FiCheckCircle, FiShield, FiMessageCircle, FiAlertCircle, FiThumbsUp, FiEye, FiBell } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function ReputationManagement() {
  const benefits = [
    {
      icon: FiEye,
      title: "24/7 Review Monitoring",
      description: "Real-time tracking of reviews across Google, Facebook, Yelp, and all major platforms."
    },
    {
      icon: FiMessageCircle,
      title: "Professional Response Management",
      description: "Timely, thoughtful responses to all reviews that reflect your brand voice."
    },
    {
      icon: FiAlertCircle,
      title: "Crisis Management",
      description: "Rapid response to negative situations to protect and restore your reputation."
    },
    {
      icon: FiThumbsUp,
      title: "Review Generation",
      description: "Strategic campaigns to encourage satisfied customers to leave positive reviews."
    },
    {
      icon: FiBell,
      title: "Sentiment Analysis",
      description: "Track brand sentiment trends and identify areas for improvement."
    },
    {
      icon: FiShield,
      title: "Brand Protection",
      description: "Proactive monitoring and management of your online reputation."
    },
  ];

  const stats = [
    { value: "93%", label: "of consumers read online reviews" },
    { value: "91%", label: "trust reviews as much as personal recommendations" },
    { value: "94%", label: "avoid a business due to negative review" },
    { value: "4.3★", label: "average rating drives conversions" },
  ];

  const platforms = [
    "Google Business Profile",
    "Facebook",
    "Yelp",
    "TripAdvisor",
    "Trustpilot",
    "Industry-specific platforms",
    "Social media mentions",
    "Review aggregator sites",
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageHeader 
          title="Reputation Management"
          subtitle="Build, Protect & Enhance Your Online Reputation"
        />
        
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-yellow-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
                  Protect Your Brand
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Your Reputation is Your <span className="gradient-text">Greatest Asset</span>
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  In today's digital world, your online reputation can make or break your business. A single negative review can cost you countless customers, while a strong reputation attracts customers like a magnet.
                </p>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  We monitor, manage, and protect your online reputation 24/7, turning negative situations into positive outcomes and encouraging satisfied customers to share their experiences.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Protect Your Reputation
                  </Link>
                  <Link href="/packages" className="btn-secondary">
                    See Plans
                  </Link>
                </div>
              </div>
              <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
                    alt="Customer satisfaction and 5-star reviews"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 to-transparent"></div>
                </div>
                {/* Floating Rating Card */}
                <div className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4 shadow-xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                      ))}
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-800">4.9</p>
                      <p className="text-sm text-gray-600">Average Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-500 to-orange-600">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-yellow-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive Reputation <span className="gradient-text">Management</span>
              </h2>
              <p className="text-gray-600 text-lg">
                We protect and enhance your online reputation across all platforms
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-2xl p-6 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Reputation <span className="gradient-text">Management Process</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Monitor", desc: "24/7 tracking of reviews and mentions across all platforms" },
                { step: "2", title: "Respond", desc: "Professional responses to all reviews within 24 hours" },
                { step: "3", title: "Generate", desc: "Strategic campaigns to increase positive reviews" },
                { step: "4", title: "Protect", desc: "Crisis management and damage control when needed" },
              ].map((item, index) => (
                <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="glass-card rounded-2xl p-6 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-yellow-300 text-3xl">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
                  alt="Online review platforms monitoring"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Multi-Platform <span className="gradient-text">Monitoring</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  We monitor and manage your reputation across all major review platforms and social media channels:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {platforms.map((platform, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FiCheckCircle className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{platform}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="section-padding bg-gradient-to-r from-yellow-500 to-orange-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card-dark rounded-2xl p-8 md:p-12">
                <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-6">
                  Success Story
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  From 3.2 to 4.8 Stars in 6 Months
                </h3>
                <p className="text-white/90 text-lg mb-6">
                  A local restaurant was struggling with a 3.2-star rating and declining foot traffic. Through our reputation management service:
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Responded to all past negative reviews professionally",
                    "Implemented a review generation campaign for satisfied diners",
                    "Created a system for addressing complaints before they became reviews",
                    "Increased positive reviews from 2-3 per month to 15-20 per month",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/90">
                      <FiCheckCircle className="flex-shrink-0 mt-1" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-3 gap-6 border-t border-white/20 pt-6">
                  <div>
                    <p className="text-3xl font-bold text-white">4.8★</p>
                    <p className="text-white/80 text-sm">New Rating</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">+180</p>
                    <p className="text-white/80 text-sm">New Reviews</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">+45%</p>
                    <p className="text-white/80 text-sm">Revenue Increase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Common <span className="gradient-text">Questions</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "Can you remove negative reviews?", a: "While we can't remove legitimate reviews, we can respond professionally, work to resolve issues, and help push negative reviews down with positive ones. We can also flag reviews that violate platform guidelines for removal." },
                { q: "How quickly do you respond to reviews?", a: "We respond to all reviews within 24 hours, with critical negative reviews addressed within 2-4 hours during business days." },
                { q: "How do you generate positive reviews?", a: "We create automated follow-up systems, timing strategies, and incentive programs (following platform guidelines) to encourage satisfied customers to leave reviews." },
                { q: "What happens during a reputation crisis?", a: "We have a rapid response protocol that includes immediate response drafting, stakeholder communication, and a plan to address the issue publicly and privately." },
              ].map((faq, index) => (
                <div key={index} className="glass-card rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
