import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogCard from "../../components/BlogCard";
import WhatsAppButton from "../../components/WhatsAppButton";
import { blogPosts, getBlogBySlug, getAllBlogSlugs } from "../../data/blogData";
import { FiCalendar, FiClock, FiArrowLeft, FiShare2, FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const post = getBlogBySlug(resolvedParams.slug);
  
  if (!post) {
    return {
      title: "Post Not Found | Mediaflip Blog",
    };
  }

  return {
    title: `${post.title} | Mediaflip Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = getBlogBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-12 md:pb-16">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
              >
                <FiArrowLeft />
                Back to Blog
              </Link>
              <span className="inline-block bg-[#4f46e5] text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl">
                {post.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-gray-200 mb-8">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{post.author}</p>
                    <p className="text-sm text-gray-500">Author</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <FiCalendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <FiClock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Article Body */}
              <article
                className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-[#4f46e5] prose-strong:text-gray-800"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <FiShare2 className="text-gray-500" size={20} />
                    <span className="text-gray-600 font-medium">Share this article:</span>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <FiFacebook size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <FiTwitter size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <FiLinkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Related <span className="gradient-text">Articles</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <BlogCard
                  key={relatedPost.slug}
                  slug={relatedPost.slug}
                  title={relatedPost.title}
                  excerpt={relatedPost.excerpt}
                  image={relatedPost.image}
                  author={relatedPost.author}
                  date={relatedPost.date}
                  category={relatedPost.category}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
