import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slideInUp">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Driven by curiosity and fueled by passion for technology
            </p>
          </div>

          <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card animate-slideInUp">
            <h3 className="text-2xl font-semibold mb-6 gradient-text-accent">My Story</h3>
            <div className="space-y-4 text-foreground-secondary leading-relaxed">
              <p>
                I'm <span className="text-primary font-semibold">Om Dhumkekar</span>, a passionate B.Tech Information Technology student at Vishwakarma Institute of Information Technology, Pune. With a strong foundation in full-stack development, I specialize in building scalable web applications using modern technologies like React.js, Next.js, Node.js, and various database systems.
              </p>
              <p>
                My journey in technology started with a curiosity about how digital systems work, which evolved into a deep expertise in Data Structures & Algorithms, Object-Oriented Programming, and Database Management Systems. I actively participate in hackathons and continuously work on projects that solve real-world problems.
              </p>
              <p>
                Beyond coding, I'm actively involved in the <span className="text-accent font-semibold">IoT Forum Club</span> as a Publicity Team Member, where I contribute to spreading awareness about Internet of Things technologies and collaborate with like-minded enthusiasts. This experience has enhanced my leadership, communication, and event management skills.
              </p>
              <p>
                I believe in continuous learning and staying updated with emerging technologies like Machine Learning, Generative AI, and Cloud Computing. My goal is to create innovative solutions that make a positive impact while growing as a well-rounded software engineer.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">15+</div>
                <div className="text-sm text-foreground-muted">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">7.85</div>
                <div className="text-sm text-foreground-muted">Current GPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-sm text-foreground-muted">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;