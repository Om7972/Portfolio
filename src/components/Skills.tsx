import React from 'react';
import {
  Code,
  Wrench,
  BookOpen,
  Users,
  Terminal,
  Coffee,
  Flame,
  Database,
  Server,
  Monitor,
  Zap,
  GitBranch,
  Cloud,
  Grid3x3,
  Palette,
  Brain,
  MessageSquare,
  Target,
  Clock,
  Lightbulb,
  Users2,
  Presentation,
  Cpu,
  LucideIcon,
  Layers,
  Shield,
  Network,
  Package,
  Settings,
  PenTool,
  Smartphone,
  BarChart,
  Lock,
  Braces,
} from 'lucide-react';

interface SkillItemProps {
  name: string;
  color: string;
}

const getSkillColor = (skillName: string): string => {
  const colorMap: { [key: string]: string } = {
    'Java': 'from-orange-500 to-red-500',
    'Python': 'from-blue-500 to-yellow-500',
    'C++': 'from-blue-600 to-cyan-500',
    'JavaScript (ES6+)': 'from-yellow-400 to-orange-500',
    'HTML5': 'from-orange-500 to-red-600',
    'CSS3': 'from-blue-500 to-indigo-500',
    'SQL': 'from-red-500 to-pink-500',
    'React.js': 'from-cyan-400 to-blue-500',
    'Next.js': 'from-gray-600 to-gray-900',
    'Node.js': 'from-green-500 to-emerald-600',
    'Express.js': 'from-gray-500 to-gray-700',
    'MongoDB': 'from-green-400 to-emerald-500',
    'MySQL': 'from-blue-600 to-cyan-600',
    'REST APIs': 'from-purple-500 to-indigo-500',
    'Authentication (JWT & Sessions)': 'from-pink-500 to-rose-600',
    'Git': 'from-orange-600 to-red-600',
    'GitHub': 'from-gray-700 to-gray-900',
    'Vercel': 'from-gray-800 to-gray-900',
    'Render': 'from-indigo-500 to-purple-600',
    'VS Code': 'from-blue-600 to-cyan-500',
    'Postman': 'from-orange-500 to-red-500',
    'Bootstrap': 'from-purple-600 to-violet-500',
    'Tailwind CSS': 'from-cyan-400 to-blue-500',
    'Material UI': 'from-blue-600 to-cyan-500',
    'shadcn/ui': 'from-slate-600 to-slate-800',
    'Figma': 'from-purple-500 to-pink-500',
    'Canva': 'from-cyan-500 to-blue-400',
    'IntelliJ IDEA': 'from-orange-500 to-red-600',
    'Eclipse': 'from-purple-600 to-indigo-700',
    'Data Structures and Algorithm': 'from-blue-500 to-cyan-500',
    'Operating System': 'from-purple-500 to-pink-500',
    'DBMS': 'from-red-500 to-pink-600',
    'OOPS': 'from-indigo-500 to-blue-600',
    'Mainframe Technology': 'from-gray-700 to-gray-900',
    'Meta Back-End Developer': 'from-blue-600 to-cyan-500',
    'Machine Learning': 'from-orange-500 to-red-500',
    'Gen AI': 'from-yellow-400 to-orange-500',
    'Computer Network': 'from-cyan-500 to-blue-600',
    'Full-stack Development': 'from-purple-500 to-indigo-600',
    'Database Management': 'from-green-500 to-emerald-600',
    'Problem Solving': 'from-cyan-500 to-blue-500',
    'Team Collaboration': 'from-blue-500 to-purple-600',
    'Leadership': 'from-purple-500 to-pink-600',
    'Communication': 'from-green-500 to-teal-500',
    'Time Management': 'from-orange-500 to-red-500',
    'Adaptability': 'from-yellow-500 to-orange-500',
    'Continuous Learning': 'from-indigo-500 to-purple-600',
    'Presentation Skills': 'from-pink-500 to-rose-600',
    'CLAUDE Code': 'from-slate-600 to-slate-900',
    'Supabase': 'from-green-500 to-emerald-600',
    'Turborepo': 'from-indigo-600 to-purple-700',
  };

  return colorMap[skillName] || 'from-primary to-secondary';
};

const Skills = () => {
  interface Skill {
    name: string;
    icon: LucideIcon;
  }

  interface SkillCategory {
    title: string;
    icon: LucideIcon;
    skills: Skill[];
  }

  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: Code,
      skills: [
        { name: 'Java', icon: Coffee },
        { name: 'Python', icon: Flame },
        { name: 'JavaScript (ES6+)', icon: Zap },
        { name: 'HTML5', icon: Code },
        { name: 'CSS3', icon: Palette },
        { name: 'SQL', icon: Database },
      ]
    },
    {
      title: 'Technologies',
      icon: Terminal,
      skills: [
        { name: 'React.js', icon: Zap },
        { name: 'Next.js', icon: Server },
        { name: 'Node.js', icon: Terminal },
        { name: 'Express.js', icon: Server },
        { name: 'MongoDB', icon: Database },
        { name: 'MySQL', icon: Database },
        { name: 'REST APIs', icon: Cpu },
        { name: 'Authentication (JWT & Sessions)', icon: Zap },
        { name: 'Git', icon: GitBranch },
        { name: 'GitHub', icon: GitBranch },
        { name: 'Vercel', icon: Cloud },
        { name: 'Render', icon: Cloud },
      ]
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: [
        { name: 'VS Code', icon: Monitor },
        { name: 'CLAUDE Code', icon: Code },
        { name: 'Postman', icon: Cpu },
        { name: 'Supabase', icon: Database },
        { name: 'Bootstrap', icon: Grid3x3 },
        { name: 'Tailwind CSS', icon: Palette },
        { name: 'Material UI', icon: Palette },
        { name: 'shadcn/ui', icon: Grid3x3 },
        { name: 'Turborepo', icon: Terminal },
        { name: 'Figma', icon: Palette },
        { name: 'Canva', icon: Palette },
        { name: 'IntelliJ IDEA', icon: Monitor },
        { name: 'Eclipse', icon: Monitor },
        { name: 'MongoDB', icon: Database },
        { name: 'Spyder', icon: Monitor },
      ]
    },
    {
      title: 'Coursework',
      icon: BookOpen,
      skills: [
        { name: 'Data Structures and Algorithm', icon: Brain },
        { name: 'Operating System', icon: Cpu },
        { name: 'DBMS', icon: Database },
        { name: 'OOPS', icon: Code },
        { name: 'Mainframe Technology', icon: Terminal },
        { name: 'Meta Back-End Developer', icon: Server },
        { name: 'Machine Learning', icon: Brain },
        { name: 'Gen AI', icon: Lightbulb },
        { name: 'Computer Network', icon: Cpu },
      ]
    },
    {
      title: 'Development Practices',
      icon: Code,
      skills: [
        { name: 'Full-stack Development', icon: Code },
        { name: 'Database Management', icon: Database },
      ]
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: [
        { name: 'Problem Solving', icon: Target },
        { name: 'Team Collaboration', icon: Users2 },
        { name: 'Leadership', icon: Users2 },
        { name: 'Communication', icon: MessageSquare },
        { name: 'Time Management', icon: Clock },
        { name: 'Adaptability', icon: Zap },
        { name: 'Continuous Learning', icon: Lightbulb },
        { name: 'Presentation Skills', icon: Presentation },
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
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const colorGradient = getSkillColor(skill.name);
                    return (
                      <div
                        key={skill.name}
                        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900/40 border border-slate-700/50 hover:border-primary/60 transition-all duration-300 cursor-pointer animate-slideInUp backdrop-blur-sm hover:bg-slate-900/60"
                        style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                      >
                        {/* Icon Container with Gradient Background */}
                        <div className={`flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br ${colorGradient} group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                          <skill.icon className="w-4 h-4 text-white" />
                        </div>

                        {/* Text Container */}
                        <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
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