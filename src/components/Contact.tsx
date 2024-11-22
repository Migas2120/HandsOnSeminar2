import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Get In Touch
          </h2>
          
          <p className="text-lg text-gray-600 mb-12">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out!
          </p>
          
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:contact@example.com"
              className="flex flex-col items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail className="h-8 w-8 mb-2" />
              <span>Email</span>
            </a>
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="h-8 w-8 mb-2" />
              <span>GitHub</span>
            </a>
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin className="h-8 w-8 mb-2" />
              <span>LinkedIn</span>
            </a>
            
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Twitter className="h-8 w-8 mb-2" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;