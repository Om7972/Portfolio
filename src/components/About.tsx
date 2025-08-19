import React from 'react';

const About = () => {
  const skills = [
    { name: 'HTML', icon: '🌐', color: 'text-orange-500' },
    { name: 'CSS', icon: '🎨', color: 'text-blue-500' },
    { name: 'JavaScript', icon: '⚡', color: 'text-yellow-500' },
    { name: 'React', icon: '⚛️', color: 'text-cyan-500' },
    { name: 'Java', icon: '☕', color: 'text-red-500' },
    { name: 'Python', icon: '🐍', color: 'text-green-500' },
    { name: 'Node.js', icon: '🟢', color: 'text-green-600' },
    { name: 'Next.js', icon: '▲', color: 'text-white' },
    { name: 'DSA', icon: '🧮', color: 'text-purple-500' },
    { name: 'MongoDB', icon: '🍃', color: 'text-green-600' },
    { name: 'Git', icon: '📂', color: 'text-orange-600' },
    { name: 'Docker', icon: '🐳', color: 'text-blue-600' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slideInUp">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              I'm a passionate full-stack developer with a love for creating innovative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div className="animate-slideInLeft">
              <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card">
                <h3 className="text-2xl font-semibold mb-6 gradient-text-accent">My Story</h3>
                <div className="space-y-4 text-foreground-secondary">
                  <p>
                    I'm a dedicated full-stack developer with a passion for creating innovative web solutions 
                    and exploring the fascinating world of IoT technology. My journey began with curiosity 
                    about how things work, and it has evolved into a deep understanding of modern development 
                    practices.
                  </p>
                  <p>
                    Through my experience with the IoT Forum Club, I've gained valuable insights into 
                    connected systems, sensor networks, and the integration of hardware with software 
                    solutions. This experience has shaped my approach to building scalable, efficient applications.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and staying up-to-date with the latest 
                    technologies. My goal is to create solutions that not only work well but also provide 
                    exceptional user experiences.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">15+</div>
                    <div className="text-sm text-foreground-muted">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">2+</div>
                    <div className="text-sm text-foreground-muted">Years Exp</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">100%</div>
                    <div className="text-sm text-foreground-muted">Dedication</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="animate-slideInRight">
              <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
                <span className="gradient-text-accent">Skills & Technologies</span>
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`skill-badge card-hover animate-slideInUp`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>

              {/* Additional Skills */}
              <div className="mt-8 p-6 bg-card rounded-xl border border-border">
                <h4 className="font-semibold mb-4 text-primary">Also Working With</h4>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'Tailwind CSS', 'Firebase', 'PostgreSQL', 'AWS', 'REST APIs', 'GraphQL'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-background-tertiary rounded-full border border-border text-foreground-secondary"
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
    </section>
  );
};

export default About;