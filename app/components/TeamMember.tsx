import Image from "next/image";
import { FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}

const TeamMember = ({ name, role, image, twitter, linkedin, instagram }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover group">
      <div className="relative h-64 md:h-72 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Social Links Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#4f46e5]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <div className="flex gap-3">
            {twitter && (
              <a
                href={twitter}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#4f46e5] hover:bg-[#06b6d4] hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter size={18} />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#4f46e5] hover:bg-[#06b6d4] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
            )}
            {instagram && (
              <a
                href={instagram}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#4f46e5] hover:bg-[#06b6d4] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-[#4f46e5] text-sm">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;
