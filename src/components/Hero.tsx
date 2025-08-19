import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
      
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary/20 rounded-full blur-xl float-3d delay-100"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-secondary/20 rounded-full blur-xl float-3d delay-200"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-accent/20 rounded-full blur-xl float-3d delay-300"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/30 rounded-full blur-xl rotate-3d"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-slideInUp">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-lg sm:text-xl text-foreground-secondary mb-4 animate-fadeIn delay-100">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slideInUp delay-200">
            <span className="gradient-text">Your Name</span>
          </h1>
          
          {/* Title */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground-secondary mb-8 animate-slideInUp delay-300">
            Full Stack Developer & IoT Enthusiast
          </h2>
          
          {/* Description */}
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto mb-12 leading-relaxed animate-slideInUp delay-400">
            Passionate about creating innovative web solutions and IoT systems. 
            I build scalable applications with modern technologies and clean, efficient code.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slideInUp delay-500">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-full"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-border hover:border-primary hover:bg-card hover:scale-105 transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-full"
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-16 animate-slideInUp delay-600">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-card hover:scale-110 transition-all duration-300 glow-effect"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-card hover:scale-110 transition-all duration-300 glow-effect"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-card hover:scale-110 transition-all duration-300 glow-effect"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-foreground-muted hover:text-primary transition-colors duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;