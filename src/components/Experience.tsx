import React from 'react';
import { Calendar, MapPin, Users, Award } from 'lucide-react';

const Experience = () => {
  const experience = {
    organization: 'IoT Forum Club',
    position: 'Active Member & Developer',
    duration: '2022 - Present',
    location: 'University Campus',
    type: 'Volunteer Experience',
    description: 'Active participant in IoT Forum Club, contributing to various Internet of Things projects and learning about connected systems, sensor networks, and smart device integration.',
    achievements: [
      'Developed IoT sensor monitoring systems using Arduino and Raspberry Pi',
      'Collaborated on smart home automation projects',
      'Participated in IoT workshops and technical sessions',
      'Contributed to club\'s open-source IoT projects',
      'Mentored junior members in IoT development basics'
    ],
    skills: [
      'IoT Development',
      'Arduino Programming',
      'Raspberry Pi',
      'Sensor Integration',
      'MQTT Protocol',
      'Hardware-Software Integration'
    ],
    projects: [
      {
        name: 'Smart Environmental Monitor',
        description: 'Developed a sensor system to monitor temperature, humidity, and air quality'
      },
      {
        name: 'Home Automation System',
        description: 'Created a smart home control system with mobile app integration'
      },
      {
        name: 'IoT Weather Station',
        description: 'Built a comprehensive weather monitoring station with data logging'
      }
    ]
  };

  return (
    <section id="experience" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slideInUp">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              My <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Professional and volunteer experiences that shaped my technical journey
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
                    Key Achievements
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

                {/* IoT Projects */}
                <div>
                  <h5 className="text-lg font-semibold mb-4 text-primary">Notable Projects</h5>
                  <div className="grid gap-4">
                    {experience.projects.map((project, index) => (
                      <div 
                        key={index}
                        className="p-4 bg-background-tertiary rounded-lg border border-border hover:border-primary/50 transition-all duration-300 animate-slideInUp"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <h6 className="font-semibold text-foreground mb-2">{project.name}</h6>
                        <p className="text-sm text-foreground-secondary">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills Sidebar */}
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h5 className="text-lg font-semibold mb-4 gradient-text-accent">
                    Skills Gained
                  </h5>
                  <div className="space-y-3">
                    {experience.skills.map((skill, index) => (
                      <div 
                        key={skill}
                        className="flex items-center gap-3 animate-slideInRight"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-foreground-secondary">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Stats */}
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h5 className="text-lg font-semibold mb-4 gradient-text-accent">
                    Impact & Stats
                  </h5>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">5+</div>
                      <div className="text-xs text-foreground-muted">IoT Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">20+</div>
                      <div className="text-xs text-foreground-muted">Workshop Hours</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">10+</div>
                      <div className="text-xs text-foreground-muted">Team Collaborations</div>
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