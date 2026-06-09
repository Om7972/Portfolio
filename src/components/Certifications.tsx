import React, { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink, Calendar, Building2 } from 'lucide-react';

const certifications = [
  {
    title: 'Meta Back-End Development',
    org: 'Coursera (Meta)',
    year: '2024',
    description: 'Professional certificate covering Django, APIs, databases, and back-end architecture by Meta.',
    certificate: '/certificates/meta-backend.pdf',
    icon: '🎓',
    accent: 'primary',
  },
  {
    title: 'Java & DSA Specialization',
    org: 'Unstop',
    year: '2024',
    description: 'Mastered Java programming with advanced Data Structures & Algorithms. Best in problem solving.',
    certificate: '/certificates/java-dsa.pdf',
    icon: '☕',
    accent: 'secondary',
  },
  {
    title: 'CCNA: Introduction to Networks',
    org: 'CISCO',
    year: '2024',
    description: 'Fundamentals of networking, IP addressing, routing, and switching from Cisco Networking Academy.',
    certificate: '/certificates/ccna-networks.pdf',
    icon: '🌐',
    accent: 'accent',
  },
  {
    title: 'Python Bootcamp',
    org: 'Udemy',
    year: '2023',
    description: 'Comprehensive Python programming covering OOP, automation, data analysis and web scraping.',
    certificate: '/certificates/python-bootcamp.pdf',
    icon: '🐍',
    accent: 'primary',
  },
  {
    title: 'Six Sigma Green Belt',
    org: 'LinkedIn Learning',
    year: '2024',
    description: 'Lean Six Sigma methodology for process improvement, quality management and data-driven decisions.',
    certificate: '/certificates/six-sigma.pdf',
    icon: '📊',
    accent: 'secondary',
  },
  {
    title: 'Auction House 7.O',
    org: 'College Fest',
    year: '2024',
    description: 'Achievement award from college-level tech fest showcasing innovation and competitive spirit.',
    certificate: '/certificates/auction-house.pdf',
    icon: '🏆',
    accent: 'accent',
  },
];

const accentMap: Record<string, { border: string; glow: string; text: string }> = {
  primary: {
    border: 'hover:border-primary/60',
    glow: 'hover:shadow-[0_0_30px_hsl(199_89%_48%/0.3)]',
    text: 'text-primary',
  },
  secondary: {
    border: 'hover:border-secondary/60',
    glow: 'hover:shadow-[0_0_30px_hsl(270_91%_65%/0.3)]',
    text: 'text-secondary',
  },
  accent: {
    border: 'hover:border-accent/60',
    glow: 'hover:shadow-[0_0_30px_hsl(142_76%_36%/0.3)]',
    text: 'text-accent',
  },
};

const CertCard = ({ cert, index }: { cert: typeof certifications[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const colors = accentMap[cert.accent];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        group relative rounded-2xl border border-border/40
        bg-card/30 backdrop-blur-xl
        p-6 transition-all duration-500
        hover:scale-[1.05] hover:-translate-y-2
        ${colors.border} ${colors.glow}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{
        transitionDelay: isVisible ? `${index * 120}ms` : '0ms',
        animation: isVisible ? 'float-subtle 6s ease-in-out infinite' : 'none',
        animationDelay: `${index * 0.5}s`,
      }}
    >
      {/* Gradient border overlay */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, hsl(199 89% 48% / 0.08), hsl(270 91% 65% / 0.08))',
        }}
      />

      {/* Icon */}
      <div className="text-4xl mb-4">{cert.icon}</div>

      {/* Title */}
      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
        {cert.title}
      </h3>

      {/* Org */}
      <div className="flex items-center gap-2 mb-1">
        <Building2 className={`w-3.5 h-3.5 ${colors.text}`} />
        <span className="text-sm text-foreground-secondary">{cert.org}</span>
      </div>

      {/* Year */}
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-3.5 h-3.5 text-foreground-muted" />
        <span className="text-xs text-foreground-muted">{cert.year}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-foreground-muted leading-relaxed mb-5">
        {cert.description}
      </p>

      {/* Button */}
      <a
        href={cert.certificate}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
          border border-border bg-background/50 backdrop-blur
          hover:bg-primary/10 hover:border-primary/40 hover:text-primary
          transition-all duration-300
        `}
      >
        <Award className="w-4 h-4" />
        View Certificate
        <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  );
};

const Certifications = () => (
  <section id="certifications" className="py-20 relative overflow-hidden">
    {/* BG effects */}
    <div className="absolute inset-0 bg-grid opacity-5" />
    <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-secondary/8 rounded-full blur-3xl" />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Certifications & <span className="gradient-text">Achievements</span>
        </h2>
        <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
          Professional certifications and accomplishments that showcase my continuous learning journey
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certifications.map((cert, i) => (
          <CertCard key={cert.title} cert={cert} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
