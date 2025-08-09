import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20"></div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-500"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                        Hi, I'm{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Vibhor Gupta
            </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                        Full Stack Developer & ML Engineer & Data Scientist
                    </p>

                    <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        I create beautiful, functional, and user-centered digital experiences.
                        Passionate about clean code, innovative design, and solving complex problems.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            View My Work
                        </button>

                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-105 transition-all duration-300"
                        >
                            Get In Touch
                        </button>
                    </div>

                    <div className="flex justify-center space-x-6 mb-16">
                        <a
                            href="https://github.com/Vibhor-2217"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/vibhorgupta01/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="mailto:vibhorgupta22@gmail.com"
                            className="p-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
                        >
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <button
                    onClick={() => scrollToSection('about')}
                    className="animate-bounce text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                    <ChevronDown size={32} />
                </button>
            </div>
        </section>
    );
};

export default Hero;