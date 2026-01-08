import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";
import WhatsAppButton from "../components/WhatsAppButton";
import { FiMapPin, FiStar, FiShare2, FiCalendar, FiTrendingUp, FiRadio, FiMic, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { GridPattern } from "../components/SVGDecorations";

const services = [
  {
    icon: FiMapPin,
    title: "GMB Management",
    description: "Optimize your Google My Business profile to increase local visibility and attract more customers to your business.",
    color: "from-blue-500 to-blue-600",
    link: "/services/gmb-management",
    features: ["Profile Optimization", "Review Management", "Local SEO", "Analytics & Insights"],
  },
  {
    icon: FiStar,
    title: "Reputation Management",
    description: "Build and maintain a positive online reputation through strategic review management and brand monitoring.",
    color: "from-yellow-500 to-orange-500",
    link: "/services/reputation-management",
    features: ["Review Monitoring", "Brand Protection", "Crisis Management", "Sentiment Analysis"],
  },
  {
    icon: FiShare2,
    title: "Social Media Management",
    description: "Engage your audience with compelling content and strategic social media campaigns across all platforms.",
    color: "from-pink-500 to-rose-500",
    link: "/services/social-media-management",
    features: ["Content Creation", "Community Management", "Paid Campaigns", "Analytics Reporting"],
  },
  {
    icon: FiCalendar,
    title: "Event Management",
    description: "Plan and execute memorable events that create lasting impressions and drive brand awareness.",
    color: "from-green-500 to-emerald-500",
    link: "/services/event-management",
    features: ["Event Planning", "Vendor Coordination", "On-site Management", "Post-event Analysis"],
  },
  {
    icon: FiTrendingUp,
    title: "Digital Marketing",
    description: "Drive growth with data-driven digital marketing strategies including SEO, PPC, and content marketing.",
    color: "from-purple-500 to-indigo-500",
    link: "/services/digital-marketing",
    features: ["SEO & SEM", "PPC Campaigns", "Content Marketing", "Email Marketing"],
  },
  {
    icon: FiRadio,
    title: "Local Advertisement",
    description: "Reach your local audience with targeted advertising campaigns that drive foot traffic and sales.",
    color: "from-cyan-500 to-teal-500",
    link: "/services/local-advertisement",
    features: ["Geo-targeted Ads", "Local Partnerships", "Community Engagement", "ROI Tracking"],
  },
  {
    icon: FiMic,
    title: "PR Management",
    description: "Shape public perception with strategic PR campaigns, media relations, and crisis management.",
    color: "from-red-500 to-pink-500",
    link: "/services/pr-management",
    features: ["Media Relations", "Press Releases", "Influencer Outreach", "Brand Storytelling"],
  },
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "1000+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We analyze your business, goals, and target audience to understand your unique needs.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Our experts create a customized plan tailored to achieve your specific objectives.",
  },
  {
    step: "03",
    title: "Execution",
    description: "We implement the strategy with precision, keeping you informed at every step.",
  },
  {
    step: "04",
    title: "Optimization",
    description: "Continuous monitoring and refinement ensure maximum results and ROI.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader 
          title="Our Services"
          subtitle="Comprehensive digital solutions to help your business grow and succeed in the digital landscape"
        />

        {/* Services Grid Section */}
        <section className="section-padding relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-200/40 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-200/40 rounded-full blur-3xl animate-blob delay-300"></div>
            <GridPattern className="absolute inset-0 w-full h-full opacity-30" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-8 hover-lift group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-[#4f46e5] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <FiCheckCircle className="text-green-500 flex-shrink-0" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-[#4f46e5] font-semibold group-hover:gap-3 transition-all"
                  >
                    Learn More <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-[#4f46e5] font-medium text-sm mb-4">
                How We Work
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Our <span className="gradient-text-animated">Process</span>
              </h2>
              <p className="text-gray-600 text-lg">
                We follow a proven methodology to deliver exceptional results for every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div 
                  key={index} 
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Connector Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#4f46e5] to-transparent"></div>
                  )}
                  
                  <div className="glass-card rounded-2xl p-6 text-center hover-lift h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-white font-bold text-xl">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <span className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-[#4f46e5] font-medium text-sm mb-4">
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  We&apos;re <span className="gradient-text-animated">Different</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  We don&apos;t just provide services – we become your strategic partners invested in your success. Here&apos;s what sets us apart:
                </p>
                
                <div className="space-y-4">
                  {[
                    "Customized strategies tailored to your unique business goals",
                    "Transparent reporting with measurable results",
                    "Dedicated account managers for personalized attention",
                    "Cutting-edge tools and proven methodologies",
                    "24/7 support and continuous optimization",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FiCheckCircle className="text-white" size={14} />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Get Started Today <FiArrowRight />
                </Link>
              </div>

              <div className="relative animate-fade-in-up delay-200">
                <div className="glass-card rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                      <div className="text-3xl font-bold text-[#4f46e5] mb-1">10+</div>
                      <div className="text-gray-600 text-sm">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                      <div className="text-3xl font-bold text-[#7c3aed] mb-1">50+</div>
                      <div className="text-gray-600 text-sm">Expert Team</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                      <div className="text-3xl font-bold text-emerald-500 mb-1">500+</div>
                      <div className="text-gray-600 text-sm">Clients Served</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl">
                      <div className="text-3xl font-bold text-orange-500 mb-1">95%</div>
                      <div className="text-gray-600 text-sm">Retention Rate</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-[#4f46e5]/5 to-[#7c3aed]/5 rounded-xl border border-[#4f46e5]/10">
                    <p className="text-gray-700 italic text-center">
                      &quot;MediaFlip transformed our digital presence completely. Their team&apos;s expertise and dedication are unmatched.&quot;
                    </p>
                    <p className="text-[#4f46e5] font-medium text-center mt-2">— Happy Client</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-gradient-to-br from-[#4f46e5]/20 to-[#7c3aed]/20 rounded-2xl"></div>
              </div>
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
