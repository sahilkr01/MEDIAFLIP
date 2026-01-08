import { CirclePattern } from "./SVGDecorations";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

const PageHeader = ({ title, subtitle, breadcrumb }: PageHeaderProps) => {
  return (
    <section className="pt-24 md:pt-28 pb-12 md:pb-16 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-72 h-72 bg-purple-300/40 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-cyan-300/30 rounded-full blur-3xl animate-blob delay-300"></div>
        <CirclePattern className="absolute top-10 right-10 w-32 h-32 opacity-20 hidden lg:block svg-float" />
        <CirclePattern className="absolute bottom-0 left-10 w-24 h-24 opacity-10 hidden lg:block" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
          {breadcrumb && (
            <p className="text-[#4f46e5] font-medium mb-2 flex items-center justify-center gap-2">
              <span className="hover:underline cursor-pointer">Home</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>{breadcrumb}</span>
            </p>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title.split(" ").map((word, index, arr) => 
              index === arr.length - 1 ? (
                <span key={index} className="gradient-text-animated">{word}</span>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </h1>
          {subtitle && (
            <p className="text-gray-600 text-lg animate-fade-in-up delay-100">{subtitle}</p>
          )}
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path 
            d="M0,30 Q360,60 720,30 T1440,30 V60 H0 Z" 
            fill="rgba(79, 70, 229, 0.03)"
          />
        </svg>
      </div>
    </section>
  );
};

export default PageHeader;
