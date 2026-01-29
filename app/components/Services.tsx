import Link from "next/link";
import { FiMapPin, FiStar, FiShare2, FiCalendar, FiTrendingUp, FiRadio, FiMic, FiUsers } from "react-icons/fi";
import { GridPattern, TargetIcon } from "./SVGDecorations";

const services = [
  {
    icon: FiMapPin,
    title: "GMB Management",
    description: "Optimize your Google My Business profile to increase local visibility and attract more customers to your business.",
    color: "from-blue-500 to-blue-600",
    link: "/services/gmb-management",
    includes: ["Profile Optimization", "Photo & Post Updates", "Review Management", "Insights & Analytics"],
  },
  {
    icon: FiStar,
    title: "Reputation Management",
    description: "Build and maintain a positive online reputation through strategic review management and brand monitoring.",
    color: "from-yellow-500 to-orange-500",
    link: "/services/reputation-management",
    includes: ["Review Monitoring", "Response Management", "Brand Sentiment Analysis", "Crisis Handling"],
  },
  {
    icon: FiShare2,
    title: "Social Media Management",
    description: "Engage your audience with compelling content and strategic social media campaigns across all platforms.",
    color: "from-pink-500 to-rose-500",
    link: "/services/social-media-management",
    includes: ["Content Creation", "Scheduling & Posting", "Community Management", "Performance Reports"],
  },
  {
    icon: FiCalendar,
    title: "Event Management",
    description: "Plan and execute memorable events that create lasting impressions and drive brand awareness.",
    color: "from-green-500 to-emerald-500",
    link: "/services/event-management",
    includes: ["Event Planning", "Vendor Coordination", "On-site Management", "Post-event Analysis"],
  },
  {
    icon: FiTrendingUp,
    title: "Digital Marketing",
    description: "Drive growth with data-driven digital marketing strategies including SEO, PPC, and content marketing.",
    color: "from-purple-500 to-indigo-500",
    link: "/services/digital-marketing",
    includes: ["SEO Optimization", "PPC Campaigns", "Content Marketing", "Conversion Tracking"],
  },
  {
    icon: FiRadio,
    title: "Local Advertisement",
    description: "Reach your local audience with targeted advertising campaigns that drive foot traffic and sales.",
    color: "from-cyan-500 to-teal-500",
    link: "/services/local-advertisement",
    includes: ["Geo-targeted Ads", "Local SEO", "Flyer & Banner Design", "Radio & Print Ads"],
  },
  {
    icon: FiMic,
    title: "PR Management",
    description: "Shape public perception with strategic PR campaigns, media relations, and crisis management.",
    color: "from-red-500 to-pink-500",
    link: "/services/pr-management",
    includes: ["Press Releases", "Media Outreach", "Brand Storytelling", "Crisis Management"],
  },
  {
    icon: FiUsers,
    title: "Influencer & Promotion Marketing",
    description: "Leverage the power of influencers and strategic promotions to amplify your brand reach and engagement.",
    color: "from-violet-500 to-fuchsia-500",
    link: "/services/influencer-marketing",
    includes: ["Influencer Partnerships", "Campaign Strategy", "Content Collaboration", "ROI Tracking"],
  },
];

const Services = () => {
  return (
    <section className="section-padding relative overflow-hidden" id="services">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-200/40 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-200/40 rounded-full blur-3xl animate-blob delay-300"></div>
        <GridPattern className="absolute inset-0 w-full h-full opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-[#4f46e5] font-medium text-sm mb-4">
            <TargetIcon className="w-5 h-5" />
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Comprehensive <span className="gradient-text-animated">Digital Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We offer a full suite of digital marketing and management services to help your business thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className={`glass-card rounded-2xl p-6 hover-lift group animate-fade-in-up block`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                <service.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-[#4f46e5] transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">{service.description}</p>
              
              {/* What's Included */}
              <div className="border-t border-gray-200 pt-4 mt-auto">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">What&apos;s Included:</p>
                <ul className="space-y-1.5">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-4 flex items-center text-[#4f46e5] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
