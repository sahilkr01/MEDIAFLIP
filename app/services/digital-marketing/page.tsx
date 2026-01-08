import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import CTA from "../../components/CTA";
import WhatsAppButton from "../../components/WhatsAppButton";
import { FiTrendingUp, FiCheckCircle, FiSearch, FiTarget, FiMail, FiFileText, FiBarChart, FiZap } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function DigitalMarketing() {
  const benefits = [
    {
      icon: FiSearch,
      title: "Search Engine Optimization (SEO)",
      description: "Rank higher on Google and drive organic traffic that converts into customers."
    },
    {
      icon: FiTarget,
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Targeted ads on Google, Facebook, and other platforms with maximum ROI."
    },
    {
      icon: FiFileText,
      title: "Content Marketing",
      description: "Valuable content that attracts, engages, and converts your ideal customers."
    },
    {
      icon: FiMail,
      title: "Email Marketing",
      description: "Automated campaigns that nurture leads and drive repeat business."
    },
    {
      icon: FiBarChart,
      title: "Conversion Rate Optimization",
      description: "Turn more website visitors into paying customers with data-driven optimization."
    },
    {
      icon: FiZap,
      title: "Marketing Automation",
      description: "Streamline and scale your marketing with intelligent automation."
    },
  ];

  const stats = [
    { value: "5.3B", label: "daily Google searches" },
    { value: "4.2x", label: "higher ROI from email marketing" },
    { value: "14.6%", label: "conversion rate from SEO leads" },
    { value: "200%", label: "average ROI from PPC campaigns" },
  ];

  const services = [
    {
      category: "SEO Services",
      items: [
        "Keyword research & strategy",
        "On-page optimization",
        "Technical SEO",
        "Link building",
        "Local SEO",
        "SEO audits",
      ]
    },
    {
      category: "Paid Advertising",
      items: [
        "Google Ads management",
        "Facebook & Instagram ads",
        "LinkedIn advertising",
        "Display advertising",
        "Remarketing campaigns",
        "Shopping ads",
      ]
    },
    {
      category: "Content & Email",
      items: [
        "Blog writing",
        "Landing page optimization",
        "Email campaign design",
        "Marketing automation",
        "Lead nurturing",
        "Newsletter management",
      ]
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageHeader 
          title="Digital Marketing"
          subtitle="Data-Driven Strategies That Deliver Measurable Growth"
        />
        
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                  ROI-Focused Marketing
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Digital Marketing That <span className="gradient-text">Drives Real Results</span>
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  In the digital age, effective marketing requires more than just tactics—it requires a comprehensive, 
                  data-driven strategy that reaches your audience at every touchpoint of their journey. We develop and 
                  execute multi-channel marketing campaigns that drive traffic, generate qualified leads, and grow revenue.
                </p>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  From SEO and PPC to content marketing and email automation, our integrated approach ensures 
                  every marketing dollar works harder to achieve your business goals.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Grow Your Business
                  </Link>
                  <Link href="/packages" className="btn-secondary">
                    View Packages
                  </Link>
                </div>
              </div>
              <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                    alt="Digital marketing analytics and strategy"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                </div>
                {/* Floating ROI Card */}
                <div className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4 shadow-xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <FiTrendingUp className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-800">427%</p>
                      <p className="text-sm text-gray-600">Average ROI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-purple-100">{stat.label}</p>
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
                Comprehensive Digital <span className="gradient-text">Marketing Services</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Everything you need to dominate your market and outperform competitors
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-2xl p-6 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
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
                Our Proven Marketing <span className="gradient-text">Framework</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Research", desc: "Deep dive into your market, competitors, and audience behavior" },
                { step: "2", title: "Strategy", desc: "Develop comprehensive marketing strategy aligned with your goals" },
                { step: "3", title: "Execute", desc: "Launch and manage campaigns across all digital channels" },
                { step: "4", title: "Optimize", desc: "Continuous testing and optimization for maximum ROI" },
              ].map((item, index) => (
                <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="glass-card rounded-2xl p-6 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-purple-300 text-3xl">
                      →
                    </div>
                  )}
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
                Complete Digital Marketing <span className="gradient-text">Arsenal</span>
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
                        <FiCheckCircle className="text-purple-500 flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Focus Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=800&h=600&fit=crop"
                  alt="SEO strategy and keyword research"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  SEO That Delivers <span className="gradient-text">Long-Term Results</span>
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Search Engine Optimization is the foundation of sustainable digital growth. Our SEO strategies 
                  are built on technical excellence, quality content, and strategic link building.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Keyword Domination", desc: "Target high-intent keywords that drive qualified traffic" },
                    { title: "Technical Excellence", desc: "Fast, mobile-friendly sites that Google loves" },
                    { title: "Quality Content", desc: "Content that ranks and converts visitors into customers" },
                    { title: "Authority Building", desc: "Strategic backlink acquisition from relevant sources" },
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

        {/* PPC Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  PPC Advertising That <span className="gradient-text">Maximizes ROI</span>
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Get instant visibility and traffic with expertly managed paid advertising campaigns. 
                  We optimize every dollar spent to deliver maximum return on your investment.
                </p>
                <div className="space-y-4">
                  {[
                    { stat: "2.8x", desc: "Average ROAS (Return on Ad Spend)" },
                    { stat: "$3.2M+", desc: "Ad spend managed successfully" },
                    { stat: "43%", desc: "Lower cost per acquisition vs industry average" },
                    { stat: "92%", desc: "Client retention rate" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 glass-card rounded-xl p-4">
                      <div className="text-3xl font-bold text-purple-600">{item.stat}</div>
                      <div className="text-gray-600">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                  alt="PPC campaign performance dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="section-padding bg-gradient-to-r from-purple-600 to-indigo-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card-dark rounded-2xl p-8 md:p-12">
                <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-6">
                  Success Story
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  From $50K to $500K Monthly Revenue in 12 Months
                </h3>
                <p className="text-white/90 text-lg mb-6">
                  An e-commerce brand was struggling with inconsistent traffic and low conversion rates. Our integrated digital marketing strategy:
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Rebuilt their SEO foundation with technical optimization and keyword strategy",
                    "Created high-converting landing pages for each product category",
                    "Launched Google Shopping and Search campaigns with precise targeting",
                    "Implemented email automation for cart abandonment and repeat purchases",
                    "Developed content marketing strategy driving organic traffic growth",
                    "Optimized conversion rates through systematic A/B testing",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/90">
                      <FiCheckCircle className="flex-shrink-0 mt-1" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-3 gap-6 border-t border-white/20 pt-6">
                  <div>
                    <p className="text-3xl font-bold text-white">900%</p>
                    <p className="text-white/80 text-sm">Revenue Growth</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">425%</p>
                    <p className="text-white/80 text-sm">Organic Traffic</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">3.8x</p>
                    <p className="text-white/80 text-sm">ROAS</p>
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
                Digital Marketing <span className="gradient-text">FAQs</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "How long before we see results?", a: "PPC campaigns can deliver immediate traffic, while SEO typically shows significant results in 3-6 months. We provide monthly reports showing progress across all channels." },
                { q: "What's included in your digital marketing packages?", a: "Packages vary but typically include SEO, PPC management, content marketing, email campaigns, and detailed analytics. We customize based on your specific goals and budget." },
                { q: "Do you require long-term contracts?", a: "While we recommend a minimum 6-month commitment for optimal results, we offer flexible contracts. Digital marketing is most effective with consistent, long-term effort." },
                { q: "How do you measure ROI?", a: "We track all key metrics including traffic, leads, conversions, and revenue attribution. You'll have full visibility into how marketing efforts directly impact your bottom line." },
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
