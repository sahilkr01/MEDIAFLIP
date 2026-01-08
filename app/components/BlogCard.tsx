import Link from "next/link";
import Image from "next/image";
import { FiCalendar, FiUser, FiArrowRight, FiClock } from "react-icons/fi";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  delay?: number;
}

const BlogCard = ({ slug, title, excerpt, image, author, date, category, delay = 0 }: BlogCardProps) => {
  return (
    <Link href={`/blog/${slug}`} className="block group">
      <article 
        className="glass-card rounded-2xl overflow-hidden hover-lift h-full animate-fade-in-up"
        style={{ animationDelay: `${delay}ms` }}
      >
        {/* Image */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-[#4f46e5] to-[#06b6d4] text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg">
              {category}
            </span>
          </div>
          
          {/* Reading time badge */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="flex items-center gap-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              <FiClock size={12} />
              5 min read
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1 group-hover:text-[#4f46e5] transition-colors">
              <FiCalendar size={14} />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <FiUser size={14} />
              <span>{author}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#4f46e5] transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 mb-4 line-clamp-3">
            {excerpt}
          </p>

          {/* Read More */}
          <div className="flex items-center gap-2 text-[#4f46e5] font-medium">
            <span className="relative">
              Read More
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4f46e5] group-hover:w-full transition-all duration-300"></span>
            </span>
            <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
