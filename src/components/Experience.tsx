import React from 'react';
import { Calendar, MapPin, Users, Award } from 'lucide-react';

const Experience = () => {
  const experience = {
    organization: 'IoT Forum Club',
    position: 'Publicity Team Member',
    duration: 'November 2024 – Present',
    location: 'VIIT, Pune',
    type: 'Leadership & Volunteer',
    description: 'Contributing to the IoT Forum Club by actively promoting events, workshops, and activities related to Internet of Things technologies. Working collaboratively with team members to increase club visibility and engagement across the campus.',
    achievements: [
      'Designed and distributed promotional content for IoT workshops and hackathons',
      'Coordinated with team members to organize successful club events',
      'Increased club social media engagement through creative campaigns',
      'Collaborated on technical documentation and event coverage',
      'Mentored junior members on effective communication strategies'
    ],
    skills: [
      'Self Development',
      'Team Collaboration',
      'Problem Solving',
      'Technical Writing',
      'Marketing',
      'Event Management',
      'Communication',
      'Leadership'
    ]
  };

  return (
    <section id="experience" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slideInUp">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              My <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Leadership and volunteer experiences that shaped my professional journey
            </p>
          </div>

          {/* Experience Card */}
          <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card hover:shadow-float transition-all duration-500 animate-slideInUp">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Experience Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-muted">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {experience.type}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold gradient-text-accent mb-2">
                      {experience.position}
                    </h3>
                    <h4 className="text-xl text-primary font-semibold mb-4">
                      {experience.organization}
                    </h4>
                    <p className="text-foreground-secondary leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h5 className="text-lg font-semibold mb-4 flex items-center gap-2 text-primary">
                    <Award className="w-5 h-5" />
                    Key Contributions
                  </h5>
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, index) => (
                      <li 
                        key={index} 
                        className="flex items-start gap-3 text-foreground-secondary animate-slideInLeft"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Skills Sidebar */}
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h5 className="text-lg font-semibold mb-4 gradient-text-accent">
                    Skills Developed
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, index) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-sm bg-background-tertiary text-foreground-secondary rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 animate-slideInRight"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact Stats */}
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h5 className="text-lg font-semibold mb-4 gradient-text-accent">
                    Impact
                  </h5>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">10+</div>
                      <div className="text-xs text-foreground-muted">Events Organized</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">Team</div>
                      <div className="text-xs text-foreground-muted">Collaboration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold gradient-text">July 2024 – September 2025</div>
                      <div className="text-xs text-foreground-muted">Timeline</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;