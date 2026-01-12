import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      year: '2023 - 2027',
      degree: 'B.Tech in Information Technology',
      institution: "Bract's Vishwakarma Institute Of Information Technology",
      location: 'Pune',
      grade: '7.85 GPA',
      description: 'Pursuing a Bachelor\'s degree in Information Technology with a strong foundation in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Web Development. Actively building full-stack projects and participating in hackathons.',
      current: true
    },
    {
      year: '2021 — 2023',
      degree: 'HSC (XII), General Science',
      institution: 'Narayana Secondary and Higher Secondary English School',
      location: 'Washim, Maharashtra',
      grade: '80.83%',
      description: 'Focused on Physics, Chemistry, Biology and Mathematics with a strong emphasis on logical problem solving.',
      current: false
    },
    {
      year: '2020',
      degree: 'SSC (X)',
      institution: 'Narayana Secondary and Higher Secondary English School',
      location: 'Washim, Maharashtra',
      grade: '87.60%',
      description: 'Achieved distinction with a focus on holistic development and foundation sciences.',
      current: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slideInUp">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              My <span className="gradient-text">Education</span>
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              My academic journey and educational milestones
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full"></div>
            
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 animate-slideInUp ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-0">
                  <div className={`w-6 h-6 rounded-full border-4 border-background ${
                    edu.current ? 'bg-accent animate-pulse' : 'bg-primary'
                  } shadow-glow`}></div>
                </div>
                
                {/* Content Card */}
                <div className={`ml-10 md:ml-0 w-full md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:mr-auto md:pl-0 md:pr-8' : 'md:ml-auto md:pl-8 md:pr-0'
                }`}>
                  <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card hover:shadow-float transition-all duration-500 card-hover">
                    {/* Year Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{edu.year}</span>
                      {edu.current && (
                        <span className="px-2 py-0.5 text-xs bg-accent/20 text-accent rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    
                    {/* Degree */}
                    <h3 className="text-xl font-semibold gradient-text-accent mb-2">
                      {edu.degree}
                    </h3>
                    
                    {/* Institution */}
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-4 h-4 text-foreground-muted" />
                      <span className="text-foreground-secondary font-medium">
                        {edu.institution}
                      </span>
                    </div>
                    
                    {/* Location */}
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-4 h-4 text-foreground-muted" />
                      <span className="text-sm text-foreground-muted">{edu.location}</span>
                    </div>
                    
                    {/* Grade */}
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-sm font-semibold text-accent">
                        Grade: {edu.grade}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-foreground-secondary leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;