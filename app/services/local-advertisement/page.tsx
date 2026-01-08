import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import CTA from "../../components/CTA";
import WhatsAppButton from "../../components/WhatsAppButton";
import { FiRadio, FiCheckCircle, FiMapPin, FiTv, FiFileText, FiUsers, FiPhone, FiNavigation } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function LocalAdvertisement() {
  const benefits = [
    {
      icon: FiMapPin,
      title: "Geo-Targeted Digital Ads",
      description: "Precision targeting to reach customers in your specific service areas."
    },
    {
      icon: FiTv,
      title: "Local Media Placements",
      description: "Strategic placement in local newspapers, radio, and television."
    },
    {
      icon: FiFileText,
      title: "Print & Direct Mail",
      description: "High-impact print materials and direct mail campaigns that get results."
    },
    {
      icon: FiUsers,
      title: "Community Partnerships",
      description: "Build relationships with local organizations and community leaders."
    },
    {
      icon: FiPhone,
      title: "Local Directory Optimization",
      description: "Maximize visibility across all local business directories and listings."
    },
    {
      icon: FiNavigation,
      title: "Hyperlocal Campaigns",
      description: "Target specific neighborhoods and demographics within your market."
    },
  ];

  const stats = [
    { value: "78%", label: "of local searches result in offline purchase" },
    { value: "72%", label: "who search locally visit within 5 miles" },
    { value: "88%", label: "of consumers trust local business reviews" },
    { value: "46%", label: "of all Google searches seek local info" },
  ];

  const channels = [
    { name: "Geo-Targeted Display Ads", desc: "Banner ads shown only to users in your target area", icon: "🎯" },
    { name: "Local Search Ads", desc: "Appear at the top when locals search for your services", icon: "🔍" },
    { name: "Community Sponsorships", desc: "Sponsor local events and organizations", icon: "🤝" },
    { name: "Local Radio & TV", desc: "Traditional media that reaches local audiences", icon: "📻" },
    { name: "Direct Mail Campaigns", desc: "Targeted mailers to specific neighborhoods", icon: "📬" },
    { name: "Billboard & Outdoor", desc: "High-visibility outdoor advertising", icon: "🚗" },
  ];

  const services = [
    "Local market research",
    "Geo-fencing campaigns",
    "Google Local Services Ads",
    "Facebook local awareness ads",
    "Nextdoor advertising",
    "Local print advertising",
    "Radio spot production",
    "Community event sponsorships",
    "Local influencer partnerships",
    "Direct mail design & execution",
    "Billboard placement",
    "Performance tracking & ROI",
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageHeader 
          title="Local Advertisement"
          subtitle="Dominate Your Local Market & Drive Foot Traffic"
        />
        
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-cyan-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-4">
                  Local Market Domination
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Reach Your Local <span className="gradient-text">Customers Effectively</span>
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  For businesses that serve local customers, targeted local advertising is essential for growth. 
                  We create comprehensive advertising campaigns that reach your ideal customers right in your neighborhood, 
                  driving foot traffic, phone calls, and online orders.
                </p>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  From digital geo-targeting to traditional local media, community partnerships to direct mail, 
                  we leverage every effective channel to build your presence in your local market and keep customers coming back.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Start Advertising
                  </Link>
                  <Link href="/packages" className="btn-secondary">
                    View Options
                  </Link>
                </div>
              </div>
              <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
                    alt="Local business storefront with customers"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent"></div>
                </div>
                {/* Floating Reach Card */}
                <div className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4 shadow-xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center">
                      <FiMapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-800">25K+</p>
                      <p className="text-sm text-gray-600">Local Reach</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-500 to-teal-600">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-cyan-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Channels Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Multi-Channel Local <span className="gradient-text">Advertising</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Reach your local customers wherever they are—online and offline
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {channels.map((channel, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-2xl p-6 hover-lift animate-fade-in-up text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl mb-4">{channel.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{channel.name}</h3>
                  <p className="text-gray-600">{channel.desc}</p>
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
                Why Local Advertising <span className="gradient-text">Works</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-2xl p-6 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
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
                Our Local Advertising <span className="gradient-text">Approach</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Market Analysis", desc: "Research your local market and identify target demographics" },
                { step: "2", title: "Strategy Development", desc: "Create multi-channel advertising plan for maximum reach" },
                { step: "3", title: "Campaign Launch", desc: "Execute campaigns across digital and traditional channels" },
                { step: "4", title: "Track & Optimize", desc: "Monitor performance and optimize for best ROI" },
              ].map((item, index) => (
                <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="glass-card rounded-2xl p-6 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-cyan-300 text-3xl">
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
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Complete Local Advertising <span className="gradient-text">Solutions</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  We manage all aspects of your local advertising strategy:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FiCheckCircle className="text-cyan-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop"
                  alt="Local business marketing and advertising"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Digital vs Traditional */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Best of Both <span className="gradient-text">Worlds</span>
              </h2>
              <p className="text-gray-600 text-lg">
                We combine digital precision with traditional reach for maximum local impact
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Digital Advertising</h3>
                <ul className="space-y-4">
                  {[
                    { title: "Geo-Fencing", desc: "Target customers when they enter specific locations" },
                    { title: "Google Local Ads", desc: "Appear at the top of local search results" },
                    { title: "Social Media Local Ads", desc: "Reach locals on Facebook, Instagram, and Nextdoor" },
                    { title: "Programmatic Display", desc: "Banner ads shown only in your target zip codes" },
                  ].map((item, index) => (
                    <li key={index}>
                      <div className="font-semibold text-gray-800">{item.title}</div>
                      <div className="text-gray-600 text-sm">{item.desc}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Traditional Advertising</h3>
                <ul className="space-y-4">
                  {[
                    { title: "Local Print Media", desc: "Newspapers and community publications" },
                    { title: "Radio Advertising", desc: "Reach commuters during drive time" },
                    { title: "Direct Mail", desc: "Targeted mail to specific neighborhoods" },
                    { title: "Outdoor Advertising", desc: "Billboards and bus shelter ads" },
                  ].map((item, index) => (
                    <li key={index}>
                      <div className="font-semibold text-gray-800">{item.title}</div>
                      <div className="text-gray-600 text-sm">{item.desc}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="section-padding bg-gradient-to-r from-cyan-500 to-teal-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card-dark rounded-2xl p-8 md:p-12">
                <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-6">
                  Local Success Story
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  3 Locations to 8 Locations in 18 Months
                </h3>
                <p className="text-white/90 text-lg mb-6">
                  A regional restaurant chain wanted to dominate their local market. Our integrated local advertising campaign:
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Implemented geo-fenced ads targeting competitor locations",
                    "Launched hyperlocal social media campaigns for each location",
                    "Created direct mail campaigns to surrounding neighborhoods",
                    "Secured local radio sponsorships during peak commute times",
                    "Partnered with local schools and sports teams for community presence",
                    "Optimized Google Local Services Ads for \"near me\" searches",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/90">
                      <FiCheckCircle className="flex-shrink-0 mt-1" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-3 gap-6 border-t border-white/20 pt-6">
                  <div>
                    <p className="text-3xl font-bold text-white">+167%</p>
                    <p className="text-white/80 text-sm">Foot Traffic</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">5 New</p>
                    <p className="text-white/80 text-sm">Locations Opened</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">+210%</p>
                    <p className="text-white/80 text-sm">Brand Awareness</p>
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
                Local Advertising <span className="gradient-text">FAQs</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "What's the minimum budget for local advertising?", a: "We work with budgets starting from $2,000/month. We'll recommend a mix of channels based on your budget, market, and goals to maximize impact." },
                { q: "How do you target specific neighborhoods?", a: "We use geo-fencing, zip code targeting, radius targeting around your location, and demographic data to reach specific neighborhoods. For traditional media, we select placements with the right audience reach." },
                { q: "Can you track offline conversions?", a: "Yes! We use call tracking, unique promo codes, and customer surveys to attribute offline purchases to specific campaigns. For digital campaigns, we also track store visits through location data." },
                { q: "Is traditional advertising still effective?", a: "Absolutely! Local radio, print, and direct mail still deliver strong ROI for many businesses, especially when combined with digital campaigns. We recommend the best mix for your specific market." },
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
