import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import project1Image from '@/assets/project1.jpg';
import project2Image from '@/assets/project2.jpg';
import project3Image from '@/assets/project3.jpg';

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
      title: 'Modern Dashboard Analytics',
      description: 'A comprehensive analytics dashboard with real-time data visualization and user management.',
      fullDescription: 'A comprehensive analytics dashboard built with React and Node.js that provides real-time data visualization, user management, and advanced reporting features. The application includes interactive charts, data filtering, and export functionality.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Tailwind CSS'],
      image: project1Image,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      features: [
        'Real-time data visualization',
        'Interactive charts and graphs',
        'User role management',
        'Data export functionality',
        'Responsive design',
        'Dark/Light theme support'
      ]
    },
    {
      id: 2,
      title: 'IoT Sensor Dashboard',
      description: 'Smart IoT dashboard for monitoring and controlling connected devices with real-time updates.',
      fullDescription: 'An intelligent IoT dashboard that connects and monitors various sensors and devices. Built with modern web technologies and real-time communication protocols to provide instant updates and control capabilities.',
      technologies: ['Next.js', 'Python', 'WebSocket', 'PostgreSQL', 'Docker'],
      image: project2Image,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      features: [
        'Real-time sensor monitoring',
        'Device control interface',
        'Historical data analysis',
        'Alert and notification system',
        'Mobile-responsive design',
        'Multi-device support'
      ]
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and inventory management.',
      fullDescription: 'A complete e-commerce platform featuring user authentication, product catalog, shopping cart, payment processing, and administrative dashboard for inventory management.',
      technologies: ['React', 'Express.js', 'Stripe', 'Redis', 'AWS'],
      image: project3Image,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      features: [
        'User authentication & profiles',
        'Product catalog with search',
        'Shopping cart & checkout',
        'Payment processing',
        'Order tracking',
        'Admin dashboard'
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
            >
              View All Projects
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