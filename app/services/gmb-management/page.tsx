import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import CTA from "../../components/CTA";
import WhatsAppButton from "../../components/WhatsAppButton";
import { FiMapPin, FiCheckCircle, FiSearch, FiStar, FiTrendingUp, FiUsers, FiBarChart2, FiCamera } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function GMBManagement() {
  const benefits = [
    {
      icon: FiSearch,
      title: "Enhanced Local Visibility",
      description: "Appear prominently in local search results and Google Maps when customers search for your services."
    },
    {
      icon: FiStar,
      title: "Review Management",
      description: "Generate more positive reviews and professionally respond to all customer feedback."
    },
    {
      icon: FiCamera,
      title: "Visual Content Optimization",
      description: "Professional photos and videos that showcase your business and attract more customers."
    },
    {
      icon: FiBarChart2,
      title: "Performance Analytics",
      description: "Detailed insights into how customers find and interact with your business listing."
    },
    {
      icon: FiUsers,
      title: "Customer Engagement",
      description: "Regular posts, updates, and Q&A management to keep your audience engaged."
    },
    {
      icon: FiTrendingUp,
      title: "Competitive Edge",
      description: "Stay ahead of competitors with optimized listings and strategic local SEO."
    },
  ];

  const stats = [
    { value: "46%", label: "of all Google searches are local" },
    { value: "88%", label: "of consumers trust online reviews" },
    { value: "76%", label: "visit a business within 24 hours" },
    { value: "28%", label: "of searches result in a purchase" },
  ];

  const features = [
    "Complete profile optimization with keywords",
    "Category and attribute optimization",
    "Regular Google Posts and updates",
    "Photo and video management",
    "Review monitoring and response",
    "Q&A section management",
    "Insights and analytics reporting",
    "Competitor analysis",
    "Local citation building",
    "NAP consistency management",
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageHeader 
          title="GMB Management"
          subtitle="Dominate Local Search & Attract More Customers"
        />
        
        {/* Hero Section with Image */}
        <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                  #1 Local Search Optimization
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Turn Local Searches Into <span className="gradient-text">Loyal Customers</span>
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Your Google Business Profile is your digital storefront. When potential customers search for businesses like yours, 
                  you need to stand out. Our comprehensive GMB management ensures you appear at the top of local searches, 
                  with a profile that converts browsers into buyers.
                </p>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  We handle everything from profile optimization to review management, ensuring every aspect of your 
                  Google presence works to drive more calls, visits, and sales.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Get Started Today
                  </Link>
                  <Link href="/packages" className="btn-secondary">
                    View Pricing
                  </Link>
                </div>
              </div>
              <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
                    alt="Business team analyzing local search results"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>
                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 shadow-xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <FiTrendingUp className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-800">+312%</p>
                      <p className="text-sm text-gray-600">Profile Views</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-blue-100">{stat.label}</p>
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
                Why GMB Management <span className="gradient-text">Matters</span>
              </h2>
              <p className="text-gray-600 text-lg">
                A well-optimized Google Business Profile is essential for local businesses. Here's what we deliver:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-2xl p-6 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
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
                Our Proven <span className="gradient-text">Process</span>
              </h2>
              <p className="text-gray-600 text-lg">
                We follow a systematic approach to maximize your local search visibility
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Audit", desc: "Complete analysis of your current GMB profile and local SEO standing" },
                { step: "2", title: "Optimize", desc: "Full profile optimization with keywords, categories, and attributes" },
                { step: "3", title: "Engage", desc: "Regular posts, review responses, and customer engagement" },
                { step: "4", title: "Grow", desc: "Continuous improvement based on analytics and performance data" },
              ].map((item, index) => (
                <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="glass-card rounded-2xl p-6 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-300 text-3xl">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                    alt="Local business analytics dashboard"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Everything You Need for <span className="gradient-text">Local Dominance</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Our comprehensive GMB management service includes everything you need to dominate local search results:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FiCheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="section-padding bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-5xl text-blue-200 mb-6">"</div>
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                Since MediaFlip took over our GMB management, we've seen a 250% increase in calls and a 180% increase in direction requests. 
                Our business is now the top result for our main keywords in the local area.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white text-xl font-bold">
                  RK
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">Rajesh Kumar</p>
                  <p className="text-blue-200">Owner, Kumar Electronics</p>
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
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "How long does it take to see results?", a: "Most clients see noticeable improvements in their local search visibility within 4-6 weeks. However, significant results typically develop over 3-6 months of consistent optimization." },
                { q: "Do you manage reviews?", a: "Yes! We monitor all reviews, respond professionally to both positive and negative feedback, and implement strategies to encourage more positive reviews from satisfied customers." },
                { q: "What if I don't have a GMB profile?", a: "No problem! We'll set up your Google Business Profile from scratch, verify it, and optimize it completely as part of our service." },
                { q: "How do you report on progress?", a: "You'll receive detailed monthly reports showing profile views, searches, customer actions, and overall performance trends." },
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
