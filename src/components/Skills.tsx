import React from 'react';
import {
  Code,
  Database,
  Terminal,
  Cloud,
  Settings,
  Layout,
  Server,
  Wrench,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layout className="h-6 w-6" />,
    skills: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Redux'],
  },
  {
    title: 'Backend',
    icon: <Server className="h-6 w-6" />,
    skills: ['Node.js', 'Express', 'Python', 'Django', 'GraphQL', 'C', 'C++'],
  },
  {
    title: 'Database',
    icon: <Database className="h-6 w-6" />,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
  {
    title: 'DevOps',
    icon: <Settings className="h-6 w-6" />,
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'Jenkins'],
  },
  {
    title: 'Cloud',
    icon: <Cloud className="h-6 w-6" />,
    skills: ['AWS', 'GCP', 'Azure'],
  },
  {
    title: 'Tools',
    icon: <Wrench className="h-6 w-6" />,
    skills: ['Git', 'Jira', 'Figma', 'VS Code'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="text-indigo-600 mr-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
