import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
import WhatsAppButton from "../../components/WhatsAppButton";
import { caseStudies, getCaseStudyBySlug } from "../../data/caseStudiesData";
import { FiArrowLeft, FiArrowRight, FiCheck, FiClock, FiBriefcase, FiLayers } from "react-icons/fi";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  // Find next and previous case studies
  const currentIndex = caseStudies.findIndex((s) => s.slug === slug);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 md:pt-24">
          <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
            <Image
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <div className="container mx-auto">
                <Link 
                  href="/about#case-studies" 
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
                >
                  <FiArrowLeft /> Back to Case Studies
                </Link>
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseStudy.services.map((service, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  {caseStudy.title}
                </h1>
                <p className="text-white/80 text-lg md:text-xl max-w-2xl">
                  {caseStudy.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Info */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] rounded-xl flex items-center justify-center">
                  <FiBriefcase className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Client</p>
                  <p className="font-semibold text-gray-800">{caseStudy.client}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] rounded-xl flex items-center justify-center">
                  <FiLayers className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Industry</p>
                  <p className="font-semibold text-gray-800">{caseStudy.industry}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] rounded-xl flex items-center justify-center">
                  <FiClock className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Duration</p>
                  <p className="font-semibold text-gray-800">{caseStudy.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <FiCheck className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Status</p>
                  <p className="font-semibold text-green-600">Completed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Challenge */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">The Challenge</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
              </div>

              {/* Solution */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Our Solution</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">{caseStudy.solution}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-gradient-to-r from-[#4f46e5] to-[#7c3aed]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Results</h2>
              <p className="text-white/80 text-lg">Measurable outcomes that made a real difference</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">{result.value}</p>
                  <p className="text-white font-medium mb-1">{result.label}</p>
                  <p className="text-white/70 text-sm">{result.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <span className="text-6xl text-[#4f46e5]">&ldquo;</span>
              </div>
              <blockquote className="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed mb-8">
                {caseStudy.testimonial.quote}
              </blockquote>
              <div>
                <p className="font-bold text-gray-800 text-lg">{caseStudy.testimonial.author}</p>
                <p className="text-gray-500">{caseStudy.testimonial.role}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudy.gallery.map((image, index) => (
                <div key={index} className="relative h-64 rounded-2xl overflow-hidden group">
                  <Image
                    src={image}
                    alt={`${caseStudy.title} gallery ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 bg-white border-t">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              {prevStudy ? (
                <Link 
                  href={`/case-studies/${prevStudy.slug}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#4f46e5] transition-colors">
                    <FiArrowLeft className="text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="hidden md:block">
                    <p className="text-sm text-gray-500">Previous</p>
                    <p className="font-medium text-gray-800 group-hover:text-[#4f46e5] transition-colors">{prevStudy.title}</p>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}
              
              <Link 
                href="/about"
                className="px-6 py-3 border border-gray-200 rounded-full text-gray-600 hover:bg-gray-50 transition-colors"
              >
                All Case Studies
              </Link>
              
              {nextStudy ? (
                <Link 
                  href={`/case-studies/${nextStudy.slug}`}
                  className="flex items-center gap-3 group text-right"
                >
                  <div className="hidden md:block">
                    <p className="text-sm text-gray-500">Next</p>
                    <p className="font-medium text-gray-800 group-hover:text-[#4f46e5] transition-colors">{nextStudy.title}</p>
                  </div>
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#4f46e5] transition-colors">
                    <FiArrowRight className="text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                </Link>
              ) : (
                <div></div>
              )}
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
