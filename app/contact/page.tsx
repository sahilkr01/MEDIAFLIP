import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import WhatsAppButton from "../components/WhatsAppButton";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

const contactInfo = [
  {
    icon: FiMapPin,
    title: "Visit Us",
    details: ["123 Business Avenue, Suite 100", "New York, NY 10001"],
  },
  {
    icon: FiPhone,
    title: "Call Us",
    details: ["+91 9117666123"],
  },
  {
    icon: FiMail,
    title: "Email Us",
    details: ["info@mediaflip.com", "support@mediaflip.com"],
  },
  {
    icon: FiClock,
    title: "Working Hours",
    details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Contact Us"
          subtitle="Have a question or ready to start your project? We'd love to hear from you!"
          breadcrumb="Contact"
        />

        {/* Contact Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Get In <span className="gradient-text">Touch</span>
                  </h2>
                  <p className="text-gray-600">
                    Ready to take your business to the next level? Reach out to us through any of the following channels or fill out the form.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#4f46e5] to-[#06b6d4] rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-[#4f46e5] to-[#06b6d4]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let&apos;s Start a Conversation
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Schedule a free 30-minute consultation to discuss your business goals and how we can help you achieve them.
              </p>
              <a
                href="tel:+919117666123"
                className="inline-flex items-center gap-2 bg-white text-[#4f46e5] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                <FiPhone />
                Call Now: +91 9117666123
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
