import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const WhatsAppButton = () => {
  const phoneNumber = "919117666123";
  const message = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const callNumber = "919117666123";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <a
        href={`tel:+${callNumber}`}
        className="relative w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-110 transition-all duration-300 group"
        aria-label="Call Us"
      >
        {/* Glow ping effect */}
        <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-30"></span>
        <span className="absolute inset-0 rounded-full bg-blue-400/50 animate-pulse"></span>
        <FiPhone size={24} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
      </a>
      
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:scale-110 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        {/* Glow ping effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>
        <span className="absolute inset-0 rounded-full bg-green-400/50 animate-pulse"></span>
        <FaWhatsapp size={28} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
