import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import PricingCard from "../components/PricingCard";
import CTA from "../components/CTA";
import WhatsAppButton from "../components/WhatsAppButton";
import { FiCheck } from "react-icons/fi";

const pricingPlans = [
  {
    name: "Starter",
    price: "$499",
    description: "Perfect for small businesses just getting started",
    features: [
      "Google My Business Setup & Optimization",
      "Basic Social Media Management (2 platforms)",
      "Monthly Performance Report",
      "5 Blog Posts per Month",
      "Basic Reputation Monitoring",
      "Email Support",
    ],
    isPopular: false,
  },
  {
    name: "Professional",
    price: "$999",
    description: "Ideal for growing businesses seeking expansion",
    features: [
      "Everything in Starter, plus:",
      "Advanced GMB Management",
      "Social Media Management (4 platforms)",
      "Weekly Performance Reports",
      "10 Blog Posts per Month",
      "Review Management & Response",
      "Local SEO Optimization",
      "Priority Support",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "$1,999",
    description: "For established businesses needing full service",
    features: [
      "Everything in Professional, plus:",
      "Full Digital Marketing Suite",
      "Unlimited Social Platforms",
      "Daily Analytics & Reporting",
      "20 Blog Posts per Month",
      "Advanced Reputation Management",
      "PR & Media Outreach",
      "Event Marketing Support",
      "Dedicated Account Manager",
      "24/7 Priority Support",
    ],
    isPopular: false,
  },
];

const customServices = [
  {
    title: "Event Management",
    description: "Full-service event planning and promotion",
    price: "Starting at $2,500",
  },
  {
    title: "PR Campaign",
    description: "Strategic PR and media relations",
    price: "Starting at $3,000",
  },
  {
    title: "Local Advertising",
    description: "Targeted local ad campaigns",
    price: "Starting at $1,500",
  },
  {
    title: "Website Development",
    description: "Custom website design and development",
    price: "Starting at $5,000",
  },
];

const faq = [
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades will apply at the start of your next billing cycle.",
  },
  {
    question: "Is there a contract or commitment?",
    answer: "Our plans are month-to-month with no long-term commitment required. We believe in earning your business every month through results.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers. Enterprise clients can also request invoice-based billing.",
  },
  {
    question: "Do you offer custom packages?",
    answer: "Absolutely! We understand that every business is unique. Contact us to discuss a customized package tailored to your specific needs.",
  },
];

export default function PackagesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Our Packages"
          subtitle="Flexible pricing plans designed to fit your business needs and budget"
          breadcrumb="Packages"
        />

        {/* Pricing Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <PricingCard key={index} {...plan} />
              ))}
            </div>
          </div>
        </section>

        {/* Custom Services Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-2 bg-purple-100 rounded-full text-[#4f46e5] font-medium text-sm mb-4">
                À La Carte Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Additional <span className="gradient-text">Services</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Need something specific? Add these services to any plan or purchase them standalone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {customServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 card-hover text-center">
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{service.description}</p>
                  <p className="text-[#4f46e5] font-bold">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-2 bg-purple-100 rounded-full text-[#4f46e5] font-medium text-sm mb-4">
                All Plans Include
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Standard <span className="gradient-text">Features</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                "Dedicated Project Manager",
                "Strategy Consultation",
                "Monthly Strategy Call",
                "Competitor Analysis",
                "Performance Dashboard",
                "Content Calendar",
                "Brand Guidelines",
                "24-Hour Response Time",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiCheck className="text-green-600" size={14} />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-2 bg-purple-100 rounded-full text-[#4f46e5] font-medium text-sm mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faq.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
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
