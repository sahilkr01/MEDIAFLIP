// Decorative SVG shapes for the website

export const CirclePattern = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="80" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="10 5" opacity="0.5"/>
    <circle cx="100" cy="100" r="60" stroke="url(#gradient1)" strokeWidth="1.5" opacity="0.3"/>
    <circle cx="100" cy="100" r="40" stroke="url(#gradient1)" strokeWidth="1" opacity="0.2"/>
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4f46e5"/>
        <stop offset="100%" stopColor="#06b6d4"/>
      </linearGradient>
    </defs>
  </svg>
);

export const WavePattern = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      fill="url(#waveGradient)" 
      fillOpacity="0.1"
      d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    />
    <defs>
      <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#4f46e5"/>
        <stop offset="100%" stopColor="#06b6d4"/>
      </linearGradient>
    </defs>
  </svg>
);

export const GridPattern = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(79, 70, 229, 0.1)" strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="400" height="400" fill="url(#grid)"/>
  </svg>
);

export const FloatingShapes = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="20" fill="url(#shapeGrad1)" opacity="0.6" className="animate-float"/>
    <circle cx="350" cy="100" r="15" fill="url(#shapeGrad2)" opacity="0.5" className="animate-float-reverse"/>
    <rect x="300" y="300" width="30" height="30" rx="5" fill="url(#shapeGrad1)" opacity="0.4" className="animate-float" transform="rotate(45 315 315)"/>
    <polygon points="80,350 100,310 120,350" fill="url(#shapeGrad2)" opacity="0.5" className="animate-float-reverse"/>
    <defs>
      <linearGradient id="shapeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4f46e5"/>
        <stop offset="100%" stopColor="#818cf8"/>
      </linearGradient>
      <linearGradient id="shapeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4"/>
        <stop offset="100%" stopColor="#22d3ee"/>
      </linearGradient>
    </defs>
  </svg>
);

export const AbstractShape = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M100,10 Q150,50 190,100 Q150,150 100,190 Q50,150 10,100 Q50,50 100,10" 
      fill="url(#abstractGrad)" 
      opacity="0.15"
      className="animate-blob"
    />
    <defs>
      <linearGradient id="abstractGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4f46e5"/>
        <stop offset="50%" stopColor="#06b6d4"/>
        <stop offset="100%" stopColor="#4f46e5"/>
      </linearGradient>
    </defs>
  </svg>
);

export const RocketIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 4C32 4 16 16 16 36C16 44 20 52 32 60C44 52 48 44 48 36C48 16 32 4 32 4Z" fill="url(#rocketGrad)" />
    <circle cx="32" cy="28" r="6" fill="white"/>
    <path d="M10 40C10 40 14 44 16 36" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round"/>
    <path d="M54 40C54 40 50 44 48 36" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28 52L32 60L36 52" fill="#f59e0b"/>
    <defs>
      <linearGradient id="rocketGrad" x1="16" y1="4" x2="48" y2="60">
        <stop offset="0%" stopColor="#4f46e5"/>
        <stop offset="100%" stopColor="#06b6d4"/>
      </linearGradient>
    </defs>
  </svg>
);

export const ChartIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="40" width="10" height="16" rx="2" fill="#06b6d4"/>
    <rect x="22" y="28" width="10" height="28" rx="2" fill="#4f46e5"/>
    <rect x="36" y="20" width="10" height="36" rx="2" fill="#06b6d4"/>
    <rect x="50" y="8" width="10" height="48" rx="2" fill="#4f46e5"/>
    <path d="M8 60H60" stroke="#1f2937" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const StarIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M32 4L39.5 24.5H61L43.5 37.5L51 58L32 45L13 58L20.5 37.5L3 24.5H24.5L32 4Z" 
      fill="url(#starGrad)"
    />
    <defs>
      <linearGradient id="starGrad" x1="3" y1="4" x2="61" y2="58">
        <stop offset="0%" stopColor="#f59e0b"/>
        <stop offset="100%" stopColor="#fbbf24"/>
      </linearGradient>
    </defs>
  </svg>
);

export const TargetIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" stroke="#4f46e5" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="32" r="20" stroke="#06b6d4" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="32" r="12" stroke="#4f46e5" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="32" r="5" fill="url(#targetGrad)"/>
    <defs>
      <linearGradient id="targetGrad" x1="27" y1="27" x2="37" y2="37">
        <stop offset="0%" stopColor="#4f46e5"/>
        <stop offset="100%" stopColor="#06b6d4"/>
      </linearGradient>
    </defs>
  </svg>
);

export const GlobeIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" stroke="url(#globeGrad)" strokeWidth="2" fill="rgba(79, 70, 229, 0.1)"/>
    <ellipse cx="32" cy="32" rx="28" ry="12" stroke="url(#globeGrad)" strokeWidth="1.5" fill="none"/>
    <ellipse cx="32" cy="32" rx="12" ry="28" stroke="url(#globeGrad)" strokeWidth="1.5" fill="none"/>
    <line x1="4" y1="32" x2="60" y2="32" stroke="url(#globeGrad)" strokeWidth="1"/>
    <line x1="32" y1="4" x2="32" y2="60" stroke="url(#globeGrad)" strokeWidth="1"/>
    <defs>
      <linearGradient id="globeGrad" x1="4" y1="4" x2="60" y2="60">
        <stop offset="0%" stopColor="#4f46e5"/>
        <stop offset="100%" stopColor="#06b6d4"/>
      </linearGradient>
    </defs>
  </svg>
);

export const SparklesIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 4L35 20L51 17L35 24L44 40L28 28L12 44L24 28L8 24L24 20L20 4L28 18L32 4Z" fill="url(#sparkleGrad)"/>
    <circle cx="50" cy="50" r="4" fill="#f59e0b" className="animate-pulse-slow"/>
    <circle cx="14" cy="54" r="3" fill="#06b6d4" className="animate-pulse-slow delay-200"/>
    <circle cx="54" cy="14" r="2" fill="#4f46e5" className="animate-pulse-slow delay-400"/>
    <defs>
      <linearGradient id="sparkleGrad" x1="8" y1="4" x2="51" y2="44">
        <stop offset="0%" stopColor="#f59e0b"/>
        <stop offset="50%" stopColor="#4f46e5"/>
        <stop offset="100%" stopColor="#06b6d4"/>
      </linearGradient>
    </defs>
  </svg>
);

export const ArrowUpRight = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CheckCircle = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="url(#checkGrad)" opacity="0.2"/>
    <circle cx="12" cy="12" r="10" stroke="url(#checkGrad)" strokeWidth="2"/>
    <path d="M8 12L11 15L16 9" stroke="url(#checkGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="checkGrad" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#10b981"/>
        <stop offset="100%" stopColor="#059669"/>
      </linearGradient>
    </defs>
  </svg>
);
