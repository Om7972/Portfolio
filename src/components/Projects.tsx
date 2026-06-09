import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import project1Image from '@/assets/project1.jpg';
import project2Image from '@/assets/project2.jpg';
import project3Image from '@/assets/project3.jpg';
import project4Image from '@/assets/project4.jpg';
import project5Image from '@/assets/project5.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  features: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'OmePilot Auto AI',
      description: 'An intelligent automation platform powered by AI for streamlined workflows and productivity.',
      fullDescription: 'OmePilot Auto AI is a cutting-edge automation platform that uses artificial intelligence to automate repetitive tasks and streamline workflows. Built with modern web technologies, it provides an intuitive interface for creating and managing automated processes.',
      technologies: ['React', 'TypeScript', 'AI Integration', 'vercel', 'postgreSQL', 'Supabase', 'Framer Motion'],
      image: project1Image,
      liveUrl: 'https://omepilot-auto-ai.vercel.app/',
      githubUrl: 'https://github.com/Om7972/omepilot-auto-ai',
      features: [
        'AI-powered task automation',
        'Workflow builder interface',
        'Real-time process monitoring',
        'Custom automation triggers',
        'Integration capabilities',
        'Analytics dashboard'
      ]
    },
    {
      id: 2,
      title: 'Narayana Kids',
      description: 'An engaging and interactive educational platform designed specifically for young learners.',
      fullDescription: 'Narayana Kids provides a safe, fun, and interactive environment for children to learn and grow. Featuring various educational games, progress tracking, and engaging content, it makes learning an enjoyable experience.',
      technologies: ['React', 'Node.js', 'Tailwind CSS', 'vercel', 'Nodemailer'],
      image: project2Image,
      liveUrl: 'https://narayana-kids.vercel.app/',
      githubUrl: 'https://github.com/Om7972',
      features: [
        'Interactive learning modules',
        'Child-friendly interface',
        'Progress tracking for parents',
        'Engaging animations',
        'Educational games',
        'Secure environment'
      ]
    },
    {
      id: 3,
      title: 'EcoWardrobeAI',
      description: 'An AI-powered sustainable fashion platform that helps users make eco-friendly wardrobe choices.',
      fullDescription: 'EcoWardrobeAI is an innovative platform that leverages artificial intelligence to promote sustainable fashion choices. The application analyzes clothing items, suggests eco-friendly alternatives, and helps users build a more sustainable wardrobe while reducing fashion waste.',
      technologies: ['React', 'Typescript', 'JWT', 'Tailwind CSS', 'Node.js'],
      image: project3Image,
      liveUrl: 'https://ecowardrobe-ai.onrender.com/',
      githubUrl: 'https://github.com/Om7972/EcoWardrobeAI',
      features: [
        'AI-powered clothing analysis',
        'Sustainable fashion recommendations',
        'Wardrobe management system',
        'Eco-impact tracking',
        'Personalized style suggestions',
        'Community sharing features'
      ]
    },
    {
      id: 4,
      title: 'MediGuide Sage',
      description: 'A comprehensive healthcare platform connecting patients with medical professionals effortlessly.',
      fullDescription: 'MediGuide Sage is an advanced healthcare solution designed to simplify the process of finding and consulting with medical professionals. It features an intuitive booking system, secure medical records management, and telehealth capabilities.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Kaggle', 'ML'],
      image: project4Image,
      liveUrl: 'https://mediguide-sage.vercel.app/',
      githubUrl: 'https://github.com/Om7972',
      features: [
        'Doctor discovery and booking',
        'Secure telemedicine consultations',
        'Digital health records',
        'Prescription management',
        'Real-time notifications',
        'Patient dashboard'
      ]
    },
    {
      id: 5,
      title: 'LoveSome-Summaries',
      description: 'A smart reading assistant that provides concise, intelligent summaries of articles and documents.',
      fullDescription: 'LoveSome-Summaries is a powerful application that helps users save time by generating accurate summaries of long texts. Built with modern web technologies, it offers a seamless reading experience and efficient information extraction.',
      technologies: ['TypeScript', 'React.js', 'Tailwind CSS', 'PostgreSQL', 'Supabase', 'GitHub', 'Render'],
      image: project5Image,
      liveUrl: 'https://lovesome-summaries.onrender.com/',
      githubUrl: 'https://github.com/Om7972/lovesome-summaries',
      features: [
        'Automated text summarization',
        'Clean and readable interface',
        'User authentication and history',
        'Cloud-based storage',
        'Real-time processing',
        'Responsive design'
      ]
    }
  ];

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slideInUp">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card animate-slideInUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-foreground-secondary mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-border rounded-full text-foreground-muted">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      onClick={() => openProjectModal(project)}
                      className="flex-1 bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300"
                    >
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      className="p-2 hover:bg-card hover:border-primary transition-all duration-300"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Button
              variant="outline"
              className="px-8 py-3 text-lg font-semibold rounded-full border-border hover:border-primary hover:bg-card hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="https://github.com/Om7972" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl border border-border max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-float">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-2xl font-bold gradient-text">
                {selectedProject.title}
              </h3>
              <Button
                onClick={closeModal}
                variant="outline"
                className="p-2 hover:bg-background-secondary"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Project Image */}
                <div className="space-y-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full rounded-xl border border-border"
                  />
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      className="flex-1 bg-gradient-primary hover:shadow-glow"
                      asChild
                    >
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 hover:bg-card hover:border-primary"
                      asChild
                    >
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Description</h4>
                    <p className="text-foreground-secondary leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-foreground-secondary">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;