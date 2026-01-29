import Link from "next/link";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin, FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Packages", href: "/packages" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "GMB Management",
    "Reputation Management",
    "Social Media Management",
    "Event Management",
    "Digital Marketing",
    "Local Advertisement",
    "PR Management",
  ];

  const socialLinks = [
    { icon: FiFacebook, href: "#", label: "Facebook" },
    { icon: FiTwitter, href: "#", label: "Twitter" },
    { icon: FiInstagram, href: "#", label: "Instagram" },
    { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4f46e5]/50 to-transparent"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#4f46e5]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#06b6d4]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#4f46e5] to-[#06b6d4] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold text-white">Mediaflip</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in digital marketing and brand management. We help businesses grow their online presence and reputation.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-[#4f46e5] hover:to-[#06b6d4] hover:scale-110 transition-all duration-300 border border-gray-700/50"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-[#4f46e5] to-[#06b6d4] rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#06b6d4] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#06b6d4] transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-[#4f46e5] to-[#06b6d4] rounded-full"></span>
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-400 hover:text-gray-300 transition-colors cursor-default flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#4f46e5] rounded-full"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-[#4f46e5] to-[#06b6d4] rounded-full"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#06b6d4]/20 transition-colors">
                  <FiMapPin className="text-[#06b6d4]" size={16} />
                </div>
                <span className="text-gray-400">123 Business Avenue, Suite 100, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#06b6d4]/20 transition-colors">
                  <FiPhone className="text-[#06b6d4]" size={16} />
                </div>
                <a href="tel:+919117666123" className="text-gray-400 hover:text-[#06b6d4] transition-colors">
                  +91 9117666123
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#06b6d4]/20 transition-colors">
                  <FiMail className="text-[#06b6d4]" size={16} />
                </div>
                <a href="mailto:info@mediaflip.com" className="text-gray-400 hover:text-[#06b6d4] transition-colors">
                  info@mediaflip.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
            <div>
              <h4 className="text-white font-semibold text-lg mb-1">Subscribe to our newsletter</h4>
              <p className="text-gray-400 text-sm">Get the latest updates and offers directly in your inbox.</p>
            </div>
            <div className="flex gap-2 w-full lg:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 lg:w-64 px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20 outline-none transition-all text-white placeholder:text-gray-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#4f46e5] to-[#06b6d4] rounded-lg font-medium text-white hover:opacity-90 transition-opacity flex items-center gap-2 group">
                Subscribe
                <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Mediaflip. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-[#06b6d4] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#06b6d4] transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
