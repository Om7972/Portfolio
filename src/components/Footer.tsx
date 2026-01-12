import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Om7972", label: 'GitHub' },
    { icon: Linkedin, href: "https://www.linkedin.com/in/om-dhumkekar-9b1865295/", label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:odhumkekar.@gmail.com', label: 'Email' },
  ];

  const skills = [
    'HTML','CSS','React', 'Node.js', 'TypeScript', 'Python', 'Java', 'Next.js'
  ];

  return (
    <footer className="relative bg-background-secondary border-t border-border overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Your Name
                </h3>
                <p className="text-foreground-secondary leading-relaxed max-w-md">
                  Full Stack Developer passionate about creating innovative web solutions 
                  and exploring IoT technologies. Always learning, always building.
                </p>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-foreground">
                  Connect with me
                </h4>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background-tertiary rounded-lg border border-border hover:border-primary hover:bg-card hover:scale-110 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-foreground-secondary group-hover:text-primary transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-foreground-secondary hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills & Technologies */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-background-tertiary text-foreground-secondary rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-card p-8 rounded-2xl border border-border mb-12">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 gradient-text-accent">
                Stay Updated
              </h3>
              <p className="text-foreground-secondary mb-6">
                Get notified about my latest projects and tech insights. No spam, just valuable content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors duration-300"
                />
                <Button className="bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
            <div className="flex items-center gap-2 text-foreground-secondary mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by Your Name © {currentYear}</span>
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-sm text-foreground-muted">
                Built with React & Tailwind CSS
              </span>
              <Button
                onClick={scrollToTop}
                variant="outline"
                className="p-2 hover:bg-card hover:border-primary hover:scale-110 transition-all duration-300"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary-dark shadow-glow hover:scale-110 transition-all duration-300 z-40 rounded-full"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </footer>
  );
};

export default Footer;