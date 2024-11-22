import React from 'react';
import { Code2, Laptop, Brain, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            About Me
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              I'm a passionate software engineer with expertise in full-stack development,
              specializing in building scalable web applications and microservices.
              With over 5 years of experience, I've worked on projects ranging from
              startup MVPs to enterprise-level systems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex items-start space-x-4">
                <Code2 className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Technical Expertise</h3>
                  <p className="mt-2">
                    Proficient in modern web technologies including React, Node.js,
                    and cloud platforms like AWS.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Laptop className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Problem Solving</h3>
                  <p className="mt-2">
                    Strong analytical skills with a focus on writing clean,
                    maintainable code and optimal solutions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Brain className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Continuous Learning</h3>
                  <p className="mt-2">
                    Always staying updated with the latest technologies and best practices
                    in software development.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Coffee className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Work Philosophy</h3>
                  <p className="mt-2">
                    Believe in writing clean code, thorough testing, and maintaining
                    clear documentation.
                  </p>
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