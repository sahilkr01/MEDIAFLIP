import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import CTA from "../../components/CTA";
import WhatsAppButton from "../../components/WhatsAppButton";
import { FiCalendar, FiCheckCircle, FiUsers, FiAward, FiCamera, FiTrendingUp, FiMic, FiMusic } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function EventManagement() {
  const benefits = [
    {
      icon: FiUsers,
      title: "End-to-End Planning",
      description: "From concept to execution, we handle every detail of your event."
    },
    {
      icon: FiAward,
      title: "Vendor Management",
      description: "Curated network of trusted vendors and seamless coordination."
    },
    {
      icon: FiCamera,
      title: "Professional Documentation",
      description: "High-quality photos and videos to capture every memorable moment."
    },
    {
      icon: FiTrendingUp,
      title: "Marketing & Promotion",
      description: "Strategic promotion to maximize attendance and engagement."
    },
    {
      icon: FiMic,
      title: "On-Site Management",
      description: "Dedicated team ensuring flawless execution on event day."
    },
    {
      icon: FiMusic,
      title: "Entertainment Coordination",
      description: "Professional entertainment options tailored to your audience."
    },
  ];

  const stats = [
    { value: "95%", label: "client satisfaction rate" },
    { value: "500+", label: "events successfully executed" },
    { value: "50K+", label: "attendees across all events" },
    { value: "98%", label: "on-time & on-budget delivery" },
  ];

  const eventTypes = [
    { title: "Corporate Events", desc: "Conferences, seminars, and team building", icon: "🏢" },
    { title: "Product Launches", desc: "Memorable reveals that create buzz", icon: "🚀" },
    { title: "Brand Activations", desc: "Experiential marketing campaigns", icon: "✨" },
    { title: "Trade Shows", desc: "Booth design and show management", icon: "🎪" },
    { title: "Private Functions", desc: "VIP events and celebrations", icon: "🎉" },
    { title: "Virtual Events", desc: "Hybrid and online event solutions", icon: "💻" },
  ];

  const services = [
    "Event concept development",
    "Venue selection & negotiation",
    "Budget planning & management",
    "Vendor sourcing & coordination",
    "Event design & décor",
    "Audio-visual production",
    "Catering & hospitality",
    "Registration & ticketing",
    "Marketing & promotion",
    "On-site event management",
    "Post-event analysis",
    "Photography & videography",
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageHeader 
          title="Event Management"
          subtitle="Create Unforgettable Experiences That Drive Results"
        />
        
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-green-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                  Flawless Event Execution
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Events That Create <span className="gradient-text">Lasting Impressions</span>
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Whether it's a corporate conference, product launch, or brand activation, your event is a powerful opportunity 
                  to connect with your audience and achieve your business objectives. We create and execute events that leave 
                  lasting impressions and deliver measurable results.
                </p>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  From intimate gatherings to large-scale productions, our experienced team manages every detail, 
                  ensuring your event runs flawlessly while you focus on connecting with your guests.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Plan Your Event
                  </Link>
                  <Link href="/packages" className="btn-secondary">
                    View Services
                  </Link>
                </div>
              </div>
              <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop"
                    alt="Professional corporate event with attendees"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
                </div>
                {/* Floating Success Card */}
                <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 shadow-xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <FiAward className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-800">500+</p>
                      <p className="text-sm text-gray-600">Events Delivered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-green-500 to-emerald-600">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-green-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Events We <span className="gradient-text">Specialize In</span>
              </h2>
              <p className="text-gray-600 text-lg">
                From corporate conferences to experiential marketing, we do it all
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventTypes.map((type, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-2xl p-6 hover-lift animate-fade-in-up text-center"
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

        {/* Benefits Grid */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Our Event <span className="gradient-text">Management</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-2xl p-6 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
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
                Our Event <span className="gradient-text">Process</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "1", title: "Discovery", desc: "Understanding your goals and vision" },
                { step: "2", title: "Planning", desc: "Detailed event planning and budgeting" },
                { step: "3", title: "Coordination", desc: "Vendor selection and logistics" },
                { step: "4", title: "Execution", desc: "Flawless on-site event management" },
                { step: "5", title: "Analysis", desc: "Post-event reporting and insights" },
              ].map((item, index) => (
                <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="glass-card rounded-2xl p-6 text-center h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
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
                  Comprehensive Event <span className="gradient-text">Services</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  We handle every aspect of your event from start to finish:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FiCheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop"
                  alt="Event planning and coordination"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="section-padding bg-gradient-to-r from-green-500 to-emerald-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card-dark rounded-2xl p-8 md:p-12">
                <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-6">
                  Featured Event
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Annual Tech Conference - 2,000+ Attendees
                </h3>
                <p className="text-white/90 text-lg mb-6">
                  A leading tech company needed to host their annual conference with hybrid (in-person and virtual) capabilities:
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Secured a premier convention center and negotiated favorable rates",
                    "Designed immersive booth experiences for 50+ sponsors",
                    "Coordinated 30+ speakers and breakout sessions",
                    "Implemented state-of-the-art AV and streaming technology",
                    "Managed registration for 2,000+ in-person and 5,000+ virtual attendees",
                    "Executed flawless three-day event with zero technical issues",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/90">
                      <FiCheckCircle className="flex-shrink-0 mt-1" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-3 gap-6 border-t border-white/20 pt-6">
                  <div>
                    <p className="text-3xl font-bold text-white">7,000+</p>
                    <p className="text-white/80 text-sm">Total Attendees</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">98%</p>
                    <p className="text-white/80 text-sm">Satisfaction Score</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">$0</p>
                    <p className="text-white/80 text-sm">Budget Overrun</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Events */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop"
                  alt="Virtual event and webinar setup"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Hybrid & Virtual <span className="gradient-text">Events</span>
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Reach global audiences with professional virtual and hybrid event solutions that create engagement and deliver results.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Professional Streaming", desc: "HD video streaming with interactive features" },
                    { title: "Virtual Networking", desc: "Breakout rooms and networking lounges" },
                    { title: "Engagement Tools", desc: "Polls, Q&A, and real-time chat" },
                    { title: "Analytics", desc: "Detailed attendee engagement data" },
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

        {/* FAQ Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Common Event <span className="gradient-text">Questions</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "How far in advance should we book?", a: "For major events, we recommend booking 6-12 months in advance to secure the best venues and vendors. However, we can also execute smaller events with 4-6 weeks notice." },
                { q: "Do you handle virtual and hybrid events?", a: "Yes! We specialize in creating engaging virtual and hybrid events with professional streaming, interactive features, and seamless integration between in-person and online experiences." },
                { q: "What if something goes wrong on event day?", a: "We have contingency plans for everything and an experienced on-site team ready to handle any situation. Our track record speaks for itself with 98% flawless execution rate." },
                { q: "Can you work within our budget?", a: "Absolutely. We create event plans that maximize impact within your budget constraints, negotiating with vendors and finding creative solutions to deliver exceptional events." },
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
