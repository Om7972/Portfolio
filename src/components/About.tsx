import React from 'react';
import { Code, GraduationCap, Heart } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import aboutBg from '../assets/about-bg.png';
import { useTypingEffect } from '../hooks/useTypingEffect';

const About = () => {
  const { displayedText } = useTypingEffect("Driven by curiosity and fueled by passion for technology", 50);

  return (
    <section
      id="about"
      className="py-20 bg-gradient-subtle relative overflow-hidden"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary/20 rounded-full blur-xl float-3d delay-100"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-secondary/20 rounded-full blur-xl float-3d delay-200"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-accent/20 rounded-full blur-xl float-3d delay-300"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/30 rounded-full blur-xl rotate-3d"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slideInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto min-h-[1.75rem]">
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="order-2 lg:order-1 animate-slideInLeft delay-200">
            <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 gradient-text-accent">My Story</h3>
              <div className="space-y-4 text-foreground-secondary leading-relaxed text-justify">
                <p className="animate-fadeIn delay-300 opacity-0 animate-fill-forwards">
                  I'm <span className="text-primary font-semibold">Om Ajit Dhumkekar</span>, a passionate Third Year Computer Engineering student at Vishwakarma Institute of Information Technology, Pune. With a strong foundation in full-stack development, I specialize in building scalable web applications using modern technologies like React.js, Next.js, Node.js, and various database systems.
                </p>
                <p className="animate-fadeIn delay-400 opacity-0 animate-fill-forwards">
                  My journey in technology started with a curiosity about how digital systems work, which evolved into a deep expertise in Data Structures & Algorithms, Object-Oriented Programming, and Database Management Systems. I actively participate in hackathons and continuously work on projects that solve real-world problems.
                </p>
                <p className="animate-fadeIn delay-500 opacity-0 animate-fill-forwards">
                  Beyond coding, I'm actively involved in the <span className="text-accent font-semibold">IoT Forum Club</span> as a Publicity Team Member, where I contribute to spreading awareness about Internet of Things technologies and collaborate with like-minded enthusiasts. This experience has enhanced my leadership, communication, and event management skills.
                </p>
                <p className="animate-fadeIn delay-600 opacity-0 animate-fill-forwards">
                  I believe in continuous learning and staying updated with emerging technologies like Machine Learning, Generative AI, and Cloud Computing. My goal is to create innovative solutions that make a positive impact while growing as a well-rounded software engineer.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border animate-slideInUp delay-700 opacity-0 animate-fill-forwards">
                <div className="text-center p-4 rounded-xl bg-background-tertiary/50 hover:bg-background-tertiary transition-colors group">
                  <div className="flex justify-center mb-2 text-primary group-hover:scale-110 transition-transform">
                    <Code size={24} />
                  </div>
                  <div className="text-2xl font-bold gradient-text">15+</div>
                  <div className="text-sm text-foreground-muted">Projects Built</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-background-tertiary/50 hover:bg-background-tertiary transition-colors group">
                  <div className="flex justify-center mb-2 text-secondary group-hover:scale-110 transition-transform">
                    <GraduationCap size={24} />
                  </div>
                  <div className="text-2xl font-bold gradient-text">7.85</div>
                  <div className="text-sm text-foreground-muted">Current GPA</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-background-tertiary/50 hover:bg-background-tertiary transition-colors group">
                  <div className="flex justify-center mb-2 text-accent group-hover:scale-110 transition-transform">
                    <Heart size={24} />
                  </div>
                  <div className="text-2xl font-bold gradient-text">100%</div>
                  <div className="text-sm text-foreground-muted">Dedication</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-slideInRight delay-300">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 float-3d">
                <img
                  src={profileImg}
                  alt="Om Ajit Dhumkekar"
                  className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-medium tracking-wide">Ready to Innovate</span>
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