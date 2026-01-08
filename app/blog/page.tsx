import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import BlogCard from "../components/BlogCard";
import WhatsAppButton from "../components/WhatsAppButton";
import { blogPosts } from "../data/blogData";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Our Blog"
          subtitle="Insights, tips, and trends in digital marketing to help your business grow"
          breadcrumb="Blog"
        />

        {/* Blog Grid */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  author={post.author}
                  date={post.date}
                  category={post.category}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Subscribe to Our <span className="gradient-text">Newsletter</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Get the latest marketing insights and tips delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
