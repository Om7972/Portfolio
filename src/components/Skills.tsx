import React from 'react';
import { Code, Wrench, BookOpen, Users, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['Java', 'Python', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SQL']
    },
    {
      title: 'Technologies',
      icon: Terminal,
      skills: [
        'React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL',
        'REST APIs', 'Authentication (JWT & Sessions)', 'Git', 'GitHub', 'Vercel', 'Render'
      ]
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: [
        'VS Code', 'CLAUDE Code', 'Postman', 'Supabase', 'Bootstrap', 'Tailwind CSS',
        'Material UI', 'shadcn/ui', 'Turborepo', 'Figma', 'Canva', 'IntelliJ IDEA',
        'Eclipse', 'MongoDB', 'Spyder'
      ]
    },
    {
      title: 'Coursework',
      icon: BookOpen,
      skills: [
        'Data Structures and Algorithm', 'Operating System', 'DBMS', 'OOPS',
        'Mainframe Technology', 'Meta Back-End Developer', 'Machine Learning',
        'Gen AI', 'Computer Network'
      ]
    },
    {
      title: 'Development Practices',
      icon: Code,
      skills: ['Full-stack Development', 'Database Management']
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: [
        'Problem Solving', 'Team Collaboration', 'Leadership', 'Communication',
        'Time Management', 'Adaptability', 'Continuous Learning', 'Presentation Skills'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slideInUp">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and professional capabilities
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card card-hover animate-slideInUp"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text-accent">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-background-tertiary text-foreground-secondary rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 animate-slideInUp"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;