import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import WhatsAppButton from "../components/WhatsAppButton";
import { FiFileText, FiShield, FiAlertCircle, FiLock, FiRefreshCw, FiMail } from "react-icons/fi";

export default function TermsPage() {
  const lastUpdated = "January 19, 2026";

  const sections = [
    {
      id: "acceptance",
      icon: FiFileText,
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using the Mediaflip website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.",
        "If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and your continued use of our services constitutes acceptance of any changes.",
        "These terms apply to all visitors, users, and clients who access or use our services, including but not limited to digital marketing, social media management, reputation management, and event management services.",
      ],
    },
    {
      id: "services",
      icon: FiShield,
      title: "2. Services Description",
      content: [
        "Mediaflip provides digital marketing and brand management services including but not limited to: Google My Business (GMB) Management, Reputation Management, Social Media Management, Event Management, Digital Marketing, Local Advertisement, and PR Management.",
        "The scope of services will be defined in individual service agreements or contracts between Mediaflip and the client. Any services not explicitly included in the agreement are outside the scope of our obligations.",
        "We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice to affected clients.",
      ],
    },
    {
      id: "client-obligations",
      icon: FiAlertCircle,
      title: "3. Client Obligations",
      content: [
        "Clients agree to provide accurate, current, and complete information as required for the provision of services. This includes business information, access credentials, brand assets, and any other materials necessary for service delivery.",
        "Clients are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under their account.",
        "Clients must not use our services for any unlawful purpose or in violation of any applicable laws, regulations, or third-party rights.",
        "Clients agree to respond to communications from Mediaflip in a timely manner to ensure smooth service delivery.",
      ],
    },
    {
      id: "payment",
      icon: FiRefreshCw,
      title: "4. Payment Terms",
      content: [
        "All fees for services are as specified in the service agreement or invoice provided to the client. Prices are subject to change with prior notice.",
        "Payment is due according to the terms specified in the invoice. Late payments may incur additional charges and may result in suspension of services.",
        "All payments are non-refundable unless otherwise specified in the service agreement or required by applicable law.",
        "Clients are responsible for all taxes applicable to the services, excluding taxes based on Mediaflip's net income.",
      ],
    },
    {
      id: "intellectual-property",
      icon: FiLock,
      title: "5. Intellectual Property Rights",
      content: [
        "All content, trademarks, logos, and intellectual property displayed on the Mediaflip website are the property of Mediaflip or its licensors and are protected by intellectual property laws.",
        "Upon full payment for services, clients receive a license to use deliverables created specifically for them. Mediaflip retains the right to use such work in portfolios and case studies unless otherwise agreed.",
        "Clients grant Mediaflip a license to use their brand assets, content, and materials solely for the purpose of providing the agreed services.",
        "Neither party may use the other's intellectual property beyond the scope permitted by these terms without prior written consent.",
      ],
    },
    {
      id: "confidentiality",
      icon: FiLock,
      title: "6. Confidentiality",
      content: [
        "Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of the business relationship.",
        "Confidential information includes, but is not limited to, business strategies, customer data, pricing information, and technical processes.",
        "This confidentiality obligation survives the termination of any service agreement between the parties.",
        "Confidential information may be disclosed if required by law, provided the disclosing party gives reasonable prior notice when legally permitted.",
      ],
    },
    {
      id: "limitation",
      icon: FiAlertCircle,
      title: "7. Limitation of Liability",
      content: [
        "To the maximum extent permitted by law, Mediaflip shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to the use of our services.",
        "Our total liability for any claims arising from services shall not exceed the amount paid by the client for the specific services giving rise to the claim.",
        "Mediaflip does not guarantee specific results from marketing services, as outcomes depend on numerous factors beyond our control, including market conditions, competition, and client cooperation.",
        "We are not responsible for any third-party platforms' policy changes, algorithm updates, or service interruptions that may affect the delivery of our services.",
      ],
    },
    {
      id: "termination",
      icon: FiRefreshCw,
      title: "8. Termination",
      content: [
        "Either party may terminate services with written notice as specified in the service agreement. In the absence of specific terms, 30 days written notice is required.",
        "Mediaflip reserves the right to immediately terminate services if the client breaches these terms, engages in fraudulent activity, or uses services for illegal purposes.",
        "Upon termination, clients remain responsible for payment of all services rendered up to the termination date.",
        "Provisions regarding intellectual property, confidentiality, and limitation of liability survive termination of services.",
      ],
    },
    {
      id: "privacy",
      icon: FiShield,
      title: "9. Privacy Policy",
      content: [
        "Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms and Conditions by reference.",
        "By using our services, you consent to the collection, use, and sharing of your information as described in our Privacy Policy.",
        "We implement appropriate technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction.",
      ],
    },
    {
      id: "dispute",
      icon: FiFileText,
      title: "10. Dispute Resolution",
      content: [
        "Any disputes arising from these terms or our services shall first be attempted to be resolved through good-faith negotiation between the parties.",
        "If negotiation fails, disputes shall be resolved through binding arbitration in accordance with applicable arbitration rules.",
        "These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Mediaflip operates, without regard to conflict of law principles.",
      ],
    },
    {
      id: "modifications",
      icon: FiRefreshCw,
      title: "11. Modifications to Terms",
      content: [
        "Mediaflip reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website.",
        "We will make reasonable efforts to notify clients of significant changes through email or website announcements.",
        "Your continued use of our services after changes are posted constitutes acceptance of the modified terms.",
      ],
    },
    {
      id: "contact",
      icon: FiMail,
      title: "12. Contact Information",
      content: [
        "If you have any questions about these Terms and Conditions, please contact us at:",
        "Email: legal@mediaflip.com",
        "We aim to respond to all inquiries within 2 business days.",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Terms and Conditions"
          subtitle="Please read these terms carefully before using our services"
          breadcrumb="Terms & Conditions"
        />

        {/* Last Updated Notice */}
        <section className="py-6 bg-gradient-to-r from-[#4f46e5]/5 to-[#06b6d4]/5">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <FiFileText className="text-[#4f46e5]" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Welcome to Mediaflip</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  These Terms and Conditions (&quot;Terms&quot;) govern your use of the Mediaflip website and services. 
                  By accessing our website or engaging our services, you agree to comply with and be bound by these Terms.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We encourage you to read these Terms carefully. If you have any questions, please don&apos;t hesitate 
                  to contact us before using our services.
                </p>
              </div>

              {/* Quick Navigation */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-12">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Navigation</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="text-sm text-gray-600 hover:text-[#4f46e5] transition-colors flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50"
                    >
                      <section.icon className="w-4 h-4 text-[#4f46e5]" />
                      <span className="truncate">{section.title.replace(/^\d+\.\s*/, "")}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Terms Sections */}
              <div className="space-y-10">
                {sections.map((section, index) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24 animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#4f46e5] to-[#06b6d4] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-2">
                        {section.title}
                      </h2>
                    </div>
                    <div className="pl-16 space-y-4">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-600 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {index < sections.length - 1 && (
                      <div className="mt-8 border-b border-gray-100"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Agreement Notice */}
              <div className="mt-16 bg-gradient-to-r from-[#4f46e5]/10 to-[#06b6d4]/10 rounded-2xl p-8 border border-[#4f46e5]/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4f46e5] to-[#06b6d4] rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiShield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Your Agreement</h3>
                    <p className="text-gray-600 leading-relaxed">
                      By using Mediaflip&apos;s services, you acknowledge that you have read, understood, and agree to be 
                      bound by these Terms and Conditions. If you do not agree with any part of these terms, you should 
                      not use our services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">Have questions about our Terms and Conditions?</p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4f46e5] to-[#06b6d4] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-[#4f46e5]/25 transition-all duration-300"
                >
                  <FiMail className="w-5 h-5" />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
