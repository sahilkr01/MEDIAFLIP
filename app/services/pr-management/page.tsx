import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import CTA from "../../components/CTA";
import WhatsAppButton from "../../components/WhatsAppButton";
import { FiMic, FiCheckCircle, FiFileText, FiUsers, FiAlertTriangle, FiTrendingUp, FiEye, FiAward } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function PRManagement() {
  const benefits = [
    {
      icon: FiFileText,
      title: "Strategic PR Planning",
      description: "Comprehensive PR strategies aligned with your business goals and brand values."
    },
    {
      icon: FiUsers,
      title: "Media Relations",
      description: "Build relationships with journalists and secure quality media coverage."
    },
    {
      icon: FiMic,
      title: "Press Release Distribution",
      description: "Professional press releases distributed to relevant media outlets."
    },
    {
      icon: FiAlertTriangle,
      title: "Crisis Communication",
      description: "Rapid response protocols to protect your brand during challenging times."
    },
    {
      icon: FiAward,
      title: "Thought Leadership",
      description: "Position your executives as industry experts through strategic content."
    },
    {
      icon: FiEye,
      title: "Media Monitoring",
      description: "Track all media mentions and measure sentiment around your brand."
    },
  ];

  const stats = [
    { value: "3x", label: "more credibility than paid ads" },
    { value: "89%", label: "of consumers trust earned media" },
    { value: "14B", label: "potential media impressions annually" },
    { value: "5.7x", label: "ROI from quality PR campaigns" },
  ];

  const services = [
    {
      category: "Media Relations",
      items: [
        "Press release writing & distribution",
        "Media pitch development",
        "Journalist relationship building",
        "Interview preparation & coaching",
        "Media kit creation",
        "Press conference organization",
      ]
    },
    {
      category: "Crisis Management",
      items: [
        "Crisis communication planning",
        "Rapid response protocols",
        "Reputation damage control",
        "Stakeholder communication",
        "Social media crisis response",
        "Post-crisis analysis",
      ]
    },
    {
      category: "Brand Building",
      items: [
        "Thought leadership programs",
        "Speaking opportunity sourcing",
        "Awards & recognition campaigns",
        "Industry partnership development",
        "Executive profiling",
        "Brand storytelling",
      ]
    },
  ];

  const mediaTypes = [
    { title: "Print Media", desc: "Newspapers, magazines, trade publications", icon: "📰" },
    { title: "Online Media", desc: "Digital news sites, blogs, online magazines", icon: "💻" },
    { title: "Broadcast", desc: "TV and radio interviews and features", icon: "📺" },
    { title: "Podcasts", desc: "Industry podcast appearances", icon: "🎙️" },
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageHeader 
          title="PR Management"
          subtitle="Shape Your Brand Story & Control Your Narrative"
        />
        
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-red-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <span className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
                  Strategic Public Relations
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Control Your Narrative, <span className="gradient-text">Build Your Brand</span>
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  In today's media landscape, your brand's story matters more than ever. Public relations isn't just about 
                  getting press coverage—it's about strategically shaping how the world perceives your brand, building 
                  credibility, and creating lasting relationships with media and stakeholders.
                </p>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  From securing premium media placements to managing crisis situations, our PR experts ensure 
                  your brand message reaches the right audiences through the most credible channels.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Elevate Your PR
                  </Link>
                  <Link href="/packages" className="btn-secondary">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop"
                    alt="Press conference and media relations"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent"></div>
                </div>
                {/* Floating Media Coverage Card */}
                <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 shadow-xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                      <FiMic className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-800">150+</p>
                      <p className="text-sm text-gray-600">Media Placements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-red-500 to-pink-600">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-red-100">{stat.label}</p>
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
                Comprehensive PR <span className="gradient-text">Services</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Everything you need to build and protect your brand reputation
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-2xl p-6 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Types */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Secure Coverage <span className="gradient-text">Everywhere</span>
              </h2>
              <p className="text-gray-600 text-lg">
                We secure media placements across all major channels
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mediaTypes.map((type, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-2xl p-6 text-center hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{type.title}</h3>
                  <p className="text-gray-600">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Breakdown */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Full-Service PR <span className="gradient-text">Management</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-2xl p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.category}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FiCheckCircle className="text-red-500 flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
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
                Our PR <span className="gradient-text">Process</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Strategize", desc: "Develop comprehensive PR strategy and messaging framework" },
                { step: "2", title: "Build", desc: "Create media relationships and establish credibility" },
                { step: "3", title: "Execute", desc: "Implement campaigns and secure quality media coverage" },
                { step: "4", title: "Monitor", desc: "Track coverage, measure impact, and refine approach" },
              ].map((item, index) => (
                <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="glass-card rounded-2xl p-6 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-red-300 text-3xl">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Crisis Management Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt="Crisis management team meeting"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Crisis Management <span className="gradient-text">Expertise</span>
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  When crisis strikes, every minute counts. Our crisis communication experts are ready 24/7 
                  to protect your reputation and guide you through challenging situations.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Rapid Response", desc: "Crisis team activated within 2 hours of notification" },
                    { title: "Strategic Messaging", desc: "Carefully crafted responses that protect your brand" },
                    { title: "Media Management", desc: "Control the narrative through proactive media engagement" },
                    { title: "Stakeholder Communication", desc: "Keep employees, customers, and partners informed" },
                    { title: "Reputation Recovery", desc: "Long-term plan to rebuild trust and credibility" },
                  ].map((item, index) => (
                    <div key={index} className="glass-card rounded-xl p-4">
                      <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Thought Leadership Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Thought Leadership <span className="gradient-text">Programs</span>
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Position your executives as industry authorities through strategic thought leadership initiatives 
                  that build credibility and drive business opportunities.
                </p>
                <ul className="space-y-4">
                  {[
                    "Speaking opportunities at industry conferences",
                    "Contributed articles in major publications",
                    "Podcast and media interview placement",
                    "Awards and recognition campaigns",
                    "Executive social media management",
                    "Industry association leadership roles",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FiCheckCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop"
                  alt="Executive speaking at conference"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="section-padding bg-gradient-to-r from-red-500 to-pink-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card-dark rounded-2xl p-8 md:p-12">
                <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-6">
                  PR Success Story
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  From Unknown Startup to Industry Leader
                </h3>
                <p className="text-white/90 text-lg mb-6">
                  A B2B SaaS startup needed to build credibility in a crowded market. Our 12-month PR campaign:
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Secured features in TechCrunch, Forbes, and Entrepreneur",
                    "Positioned CEO as thought leader with 15+ bylined articles",
                    "Arranged speaking slots at 8 major industry conferences",
                    "Won \"Best Innovation\" award from industry association",
                    "Generated 2.3M+ impressions through earned media",
                    "Supported successful Series A funding round announcement",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/90">
                      <FiCheckCircle className="flex-shrink-0 mt-1" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-3 gap-6 border-t border-white/20 pt-6">
                  <div>
                    <p className="text-3xl font-bold text-white">150+</p>
                    <p className="text-white/80 text-sm">Media Mentions</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">2.3M</p>
                    <p className="text-white/80 text-sm">Media Impressions</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">$15M</p>
                    <p className="text-white/80 text-sm">Series A Raised</p>
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
                PR Management <span className="gradient-text">FAQs</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "How long does it take to see PR results?", a: "PR is a long-term strategy. While we can secure quick wins, building meaningful media relationships and sustained coverage typically takes 3-6 months. Thought leadership programs show results over 6-12 months." },
                { q: "Can you guarantee media coverage?", a: "Ethical PR agencies never guarantee specific placements. However, we have strong media relationships and a proven track record. We focus on earning quality coverage through newsworthy stories and strategic pitching." },
                { q: "What if we're facing a PR crisis?", a: "We have a 24/7 crisis response protocol. Contact us immediately and we'll activate our crisis team to assess the situation, develop response strategies, and manage all communications." },
                { q: "How do you measure PR success?", a: "We track media placements, reach/impressions, sentiment analysis, message pull-through, website traffic from coverage, and business impact (leads, sales). You'll receive detailed monthly reports." },
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
