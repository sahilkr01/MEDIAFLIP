export const caseStudies = [
  {
    slug: "ecommerce-brand-growth",
    title: "E-commerce Brand Growth",
    client: "Fashion Retailer",
    industry: "E-commerce / Fashion",
    duration: "6 Months",
    services: ["Digital Marketing", "Social Media Management", "SEO", "PPC Advertising"],
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    description: "Transformed a struggling e-commerce store into a thriving online business through strategic digital marketing.",
    challenge: "Our client, a mid-sized fashion retailer, was struggling to compete in the crowded e-commerce space. Despite having quality products, their online presence was minimal, and they were losing market share to larger competitors. Their website traffic was stagnant, conversion rates were below industry average, and customer acquisition costs were unsustainably high.",
    solution: "We developed a comprehensive digital marketing strategy that addressed every aspect of their online presence. Our approach included a complete SEO overhaul to improve organic visibility, targeted PPC campaigns on Google and social media platforms, a content marketing strategy featuring fashion guides and style tips, influencer partnerships to expand brand reach, and email marketing automation to nurture leads and drive repeat purchases.",
    results: [
      { label: "Revenue Increase", value: "340%", description: "Year-over-year revenue growth" },
      { label: "ROAS", value: "5.2x", description: "Return on ad spend" },
      { label: "New Customers", value: "12K+", description: "New customer acquisitions" },
      { label: "Organic Traffic", value: "+280%", description: "Increase in organic search traffic" },
    ],
    testimonial: {
      quote: "Mediaflip completely transformed our business. Their strategic approach and attention to detail helped us achieve results we never thought possible. They're not just a vendor – they're a true partner in our success.",
      author: "Sarah Mitchell",
      role: "CEO, Fashion Forward",
    },
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    ],
  },
  {
    slug: "local-business-domination",
    title: "Local Business Domination",
    client: "Restaurant Chain",
    industry: "Food & Beverage",
    duration: "8 Months",
    services: ["GMB Management", "Reputation Management", "Local SEO", "Social Media"],
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    description: "Helped a local restaurant chain dominate local search and build a stellar online reputation.",
    challenge: "A growing restaurant chain with 5 locations was struggling with inconsistent online visibility across their locations. Their Google My Business profiles were incomplete, they had a mix of positive and negative reviews with no response strategy, and they were losing customers to competitors who appeared higher in local search results.",
    solution: "We implemented a comprehensive local marketing strategy starting with complete optimization of all GMB profiles. We developed a reputation management system to monitor and respond to all reviews, created location-specific content strategies, launched geo-targeted social media campaigns, and implemented a customer feedback program to proactively gather positive reviews.",
    results: [
      { label: "GMB Views", value: "500%", description: "Increase in profile views" },
      { label: "Foot Traffic", value: "+85%", description: "Increase in store visits" },
      { label: "5-Star Reviews", value: "200+", description: "New positive reviews" },
      { label: "Local Ranking", value: "#1", description: "In local pack for key terms" },
    ],
    testimonial: {
      quote: "Our restaurants are now the first thing people see when they search for dining options in our area. The increase in foot traffic has been incredible, and our reputation has never been stronger.",
      author: "Michael Torres",
      role: "Owner, Taste of Home Restaurants",
    },
    gallery: [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
    ],
  },
  {
    slug: "b2b-lead-generation",
    title: "B2B Lead Generation",
    client: "SaaS Company",
    industry: "Technology / SaaS",
    duration: "12 Months",
    services: ["Digital Marketing", "Content Marketing", "LinkedIn Advertising", "Marketing Automation"],
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    description: "Developed a comprehensive B2B marketing strategy that tripled qualified leads while reducing costs.",
    challenge: "A B2B SaaS company was struggling to generate quality leads. Their sales team was spending too much time on unqualified prospects, cost per lead was high, and their marketing efforts lacked focus. They needed a systematic approach to attract decision-makers and convert them into qualified opportunities.",
    solution: "We built a full-funnel B2B marketing machine. This included developing detailed buyer personas and customer journey maps, creating high-value content assets like whitepapers and case studies, implementing LinkedIn advertising campaigns targeting specific job titles, setting up marketing automation workflows for lead nurturing, and integrating everything with their CRM for seamless sales handoff.",
    results: [
      { label: "Qualified Leads", value: "3x", description: "Increase in qualified leads" },
      { label: "Cost per Lead", value: "-60%", description: "Reduction in acquisition cost" },
      { label: "Conversion Rate", value: "+45%", description: "Lead to opportunity rate" },
      { label: "Sales Cycle", value: "-30%", description: "Shorter sales cycle" },
    ],
    testimonial: {
      quote: "The quality of leads we're getting now is phenomenal. Our sales team is more productive, and we're closing deals faster than ever. Mediaflip's strategic approach has been a game-changer for our business.",
      author: "David Chen",
      role: "VP of Marketing, TechFlow Solutions",
    },
    gallery: [
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    ],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs() {
  return caseStudies.map((study) => study.slug);
}
