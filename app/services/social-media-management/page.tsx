import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import CTA from "../../components/CTA";
import WhatsAppButton from "../../components/WhatsAppButton";
import { FiShare2, FiCheckCircle, FiInstagram, FiTwitter, FiFacebook, FiLinkedin, FiVideo, FiImage, FiCalendar, FiTarget } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function SocialMediaManagement() {
  const benefits = [
    {
      icon: FiTarget,
      title: "Strategic Content Planning",
      description: "Data-driven content strategies that resonate with your audience and drive engagement."
    },
    {
      icon: FiCalendar,
      title: "Consistent Posting Schedule",
      description: "Never miss a beat with our professionally managed posting calendar."
    },
    {
      icon: FiImage,
      title: "Professional Content Creation",
      description: "Eye-catching graphics, videos, and copy that stop the scroll."
    },
    {
      icon: FiVideo,
      title: "Video & Reels Production",
      description: "Engaging short-form video content optimized for each platform."
    },
    {
      icon: FiShare2,
      title: "Community Management",
      description: "Active engagement with your audience to build loyal communities."
    },
    {
      icon: FiCheckCircle,
      title: "Analytics & Reporting",
      description: "Detailed insights into what's working and how to improve."
    },
  ];

  const stats = [
    { value: "4.9B", label: "active social media users worldwide" },
    { value: "151", label: "minutes daily average usage time" },
    { value: "74%", label: "of consumers rely on social for purchases" },
    { value: "3.7x", label: "ROI from social media marketing" },
  ];

  const platforms = [
    { name: "Instagram", icon: FiInstagram, desc: "Visual storytelling & shopping" },
    { name: "Facebook", icon: FiFacebook, desc: "Community building & advertising" },
    { name: "LinkedIn", icon: FiLinkedin, desc: "B2B networking & thought leadership" },
    { name: "Twitter/X", icon: FiTwitter, desc: "Real-time engagement & trends" },
  ];

  const services = [
    "Content strategy & planning",
    "Graphic design & video production",
    "Daily posting & scheduling",
    "Community management",
    "Influencer partnerships",
    "Paid social advertising",
    "Analytics & optimization",
    "Trend monitoring & adaptation",
    "Hashtag research & strategy",
    "Competitor analysis",
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageHeader 
          title="Social Media Management"
          subtitle="Build Engaged Communities & Drive Real Results"
        />
        
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-pink-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4">
                  Turn Followers Into Customers
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Social Media That Actually <span className="gradient-text">Grows Your Business</span>
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Social media isn't just about posting content—it's about building relationships, creating communities, 
                  and driving meaningful business results. Our data-driven approach combines creative excellence with 
                  strategic planning to deliver real ROI from your social media presence.
                </p>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  From content creation to community management, paid advertising to performance analytics, 
                  we handle every aspect of your social media so you can focus on what you do best.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Start Growing Today
                  </Link>
                  <Link href="/packages" className="btn-secondary">
                    View Packages
                  </Link>
                </div>
              </div>
              <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop"
                    alt="Social media content creation workspace"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent"></div>
                </div>
                {/* Floating Engagement Card */}
                <div className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4 shadow-xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                      <FiShare2 className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-800">+385%</p>
                      <p className="text-sm text-gray-600">Engagement Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-600">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-pink-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We Manage All Your <span className="gradient-text">Social Platforms</span>
              </h2>
              <p className="text-gray-600 text-lg">
                From Instagram to LinkedIn, we create platform-specific strategies that work
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-2xl p-6 text-center hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <platform.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{platform.name}</h3>
                  <p className="text-gray-600">{platform.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Complete Social Media <span className="gradient-text">Solution</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Everything you need to dominate social media and grow your brand
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-2xl p-6 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-4">
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
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Social Media <span className="gradient-text">Process</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Strategy", desc: "Develop comprehensive social media strategy aligned with business goals" },
                { step: "2", title: "Create", desc: "Produce engaging content optimized for each platform" },
                { step: "3", title: "Engage", desc: "Build communities through active engagement and responses" },
                { step: "4", title: "Optimize", desc: "Analyze performance and continuously improve results" },
              ].map((item, index) => (
                <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="glass-card rounded-2xl p-6 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-pink-300 text-3xl">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services List Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop"
                  alt="Content creation and social media analytics"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Full-Service Social Media <span className="gradient-text">Management</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  We handle every aspect of your social media presence:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FiCheckCircle className="text-pink-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="section-padding bg-gradient-to-r from-pink-500 to-rose-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card-dark rounded-2xl p-8 md:p-12">
                <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-6">
                  Client Success Story
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  From Zero to 50K Followers in 8 Months
                </h3>
                <p className="text-white/90 text-lg mb-6">
                  A fashion boutique wanted to build their social media presence from scratch. Our strategy:
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Created a unique brand voice and visual identity across platforms",
                    "Developed a content calendar mixing product showcases, behind-the-scenes, and user-generated content",
                    "Implemented strategic hashtag research and community engagement tactics",
                    "Launched targeted Instagram and Facebook ad campaigns",
                    "Partnered with micro-influencers in the fashion niche",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/90">
                      <FiCheckCircle className="flex-shrink-0 mt-1" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-3 gap-6 border-t border-white/20 pt-6">
                  <div>
                    <p className="text-3xl font-bold text-white">50K</p>
                    <p className="text-white/80 text-sm">Followers Gained</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">8.2%</p>
                    <p className="text-white/80 text-sm">Engagement Rate</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">+320%</p>
                    <p className="text-white/80 text-sm">Website Traffic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Examples */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Content That <span className="gradient-text">Converts</span>
              </h2>
              <p className="text-gray-600 text-lg">
                We create scroll-stopping content tailored to each platform and audience
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { type: "Stories & Reels", desc: "Short-form video content that captures attention and drives engagement" },
                { type: "Feed Posts", desc: "Polished, on-brand posts that tell your story and showcase your products" },
                { type: "Carousels", desc: "Educational and engaging multi-image posts that boost interaction" },
              ].map((item, index) => (
                <div key={index} className="glass-card rounded-2xl p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.type}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "How many posts do you create per month?", a: "This depends on your package, but typically ranges from 12-30 posts per month across all platforms. We focus on quality over quantity, ensuring each post aligns with your brand and goals." },
                { q: "Do you respond to comments and messages?", a: "Yes! Community management is a core part of our service. We respond to comments, messages, and mentions to keep your audience engaged and build relationships." },
                { q: "Can you help with paid social advertising?", a: "Absolutely! We create and manage paid campaigns on Facebook, Instagram, LinkedIn, and other platforms, optimizing for your specific business objectives." },
                { q: "How do you measure success?", a: "We track key metrics like engagement rate, follower growth, reach, website traffic, and conversions. You'll receive detailed monthly reports showing your social media ROI." },
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
