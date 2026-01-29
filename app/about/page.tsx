import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import TeamMember from "../components/TeamMember";
import CTA from "../components/CTA";
import WhatsAppButton from "../components/WhatsAppButton";
import { FiCheck, FiTarget, FiEye, FiHeart, FiArrowRight, FiTrendingUp, FiUsers, FiStar } from "react-icons/fi";

const caseStudies = [
  {
    slug: "ecommerce-brand-growth",
    title: "E-commerce Brand Growth",
    client: "Fashion Retailer",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    description: "Transformed a struggling e-commerce store into a thriving online business through strategic digital marketing.",
  },
  {
    slug: "local-business-domination",
    title: "Local Business Domination",
    client: "Restaurant Chain",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    description: "Helped a local restaurant chain dominate local search and build a stellar online reputation.",
  },
  {
    slug: "b2b-lead-generation",
    title: "B2B Lead Generation",
    client: "SaaS Company",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    description: "Developed a comprehensive B2B marketing strategy that tripled qualified leads while reducing costs.",
  },
];

const values = [
  {
    icon: FiTarget,
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes that directly impact your bottom line.",
  },
  {
    icon: FiEye,
    title: "Transparency",
    description: "Clear communication and honest reporting keep you informed every step of the way.",
  },
  {
    icon: FiHeart,
    title: "Client-First",
    description: "Your success is our priority. We treat your business goals as our own.",
  },
];

const team = [
  {
    name: "John Anderson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Michael Chen",
    role: "Head of Digital",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="About Mediaflip"
          subtitle="Your trusted partner in digital transformation and brand growth"
          breadcrumb="About Us"
        />

        {/* Our Story Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative">
                <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
                    alt="Our Story"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <span className="inline-block px-4 py-2 bg-purple-100 rounded-full text-[#4f46e5] font-medium text-sm">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold">
                  From Humble Beginnings to <span className="gradient-text">Industry Leader</span>
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Mediaflip started as a small team of passionate digital marketers with a vision to help local businesses thrive in the digital age. What began as a three-person operation has grown into a full-service digital marketing agency serving clients across the globe.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Over the years, we&apos;ve helped hundreds of businesses transform their online presence, build stronger reputations, and achieve sustainable growth. Our success is built on our commitment to innovation, transparency, and delivering real results for our clients.
                </p>
                <ul className="space-y-3">
                  {["Industry-leading expertise", "Cutting-edge strategies", "Dedicated support team", "Proven track record"].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <FiCheck className="text-green-600" size={12} />
                      </div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-2 bg-purple-100 rounded-full text-[#4f46e5] font-medium text-sm mb-4">
                Case Studies
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Success Stories</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Real results from real clients. See how we&apos;ve helped businesses like yours achieve remarkable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white/80 text-sm">{study.client}</p>
                      <h3 className="text-white font-bold text-lg">{study.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    <Link 
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-2 text-[#4f46e5] font-semibold hover:gap-3 transition-all duration-300"
                    >
                      View Case Study <FiArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-2 bg-purple-100 rounded-full text-[#4f46e5] font-medium text-sm mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What <span className="gradient-text">Drives Us</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Our core values guide everything we do, from how we work with clients to how we build our team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl text-center card-hover">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4f46e5] to-[#06b6d4] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-2 bg-purple-100 rounded-full text-[#4f46e5] font-medium text-sm mb-4">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet the <span className="gradient-text">Experts</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Our talented team brings together diverse expertise to deliver exceptional results for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <TeamMember key={index} {...member} />
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
