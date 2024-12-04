import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-blue-600 font-semibold">👋 Welcome to my portfolio</p>
              <h1 className="text-5xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Your Name
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                A passionate full-stack developer crafting beautiful and functional web experiences
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg flex items-center hover:opacity-90 transition-all duration-300"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-[300px] h-[300px] mx-auto">
              {/* Circular gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-white"></div>
              </div>
              {/* Profile image */}
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                alt="Your profile"
                className="absolute inset-[6px] rounded-full object-cover border-4 border-white"
              />
              {/* Floating cards */}
              <div className="absolute -right-8 top-0 bg-white p-4 rounded-lg shadow-lg transform rotate-6 animate-float">
                <p className="text-sm font-semibold">Full Stack Developer</p>
              </div>
              <div className="absolute -left-8 bottom-0 bg-white p-4 rounded-lg shadow-lg transform -rotate-6 animate-float-delayed">
                <p className="text-sm font-semibold">5+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}