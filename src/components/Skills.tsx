import React from 'react';
import {Code, Palette, Database, Bot} from 'lucide-react';

const Skills: React.FC = () => {
    const skillCategories = [
        {
            icon: Code,
            title: 'Frontend Development',
            skills: [
                { name: 'React', level: 95 },
                { name: 'TypeScript', level: 90 },
                { name: 'Next.js', level: 85 },
                { name: 'Tailwind CSS', level: 92 }
            ]
        },
        {
            icon: Database,
            title: 'Backend Development',
            skills: [
                { name: 'Python', level: 94 },
                { name: 'MySQL', level: 85 },
                { name: 'MongoDB', level: 80 }
            ]
        },
        {
            icon: Palette,
            title: 'Design & Tools',
            skills: [
                { name: 'Postman', level: 75 },
                { name: 'Git', level: 93 },
                { name: 'Docker', level: 78 }
            ]
        },
        {
            icon: Bot, // or Bot + Settings2
            title: 'Machine Learning',
            skills: [
                { name: 'Scikit-learn', level: 85 },
                { name: 'TensorFlow', level: 80 },
                { name: 'PyTorch', level: 78 },
                { name: 'Pandas & NumPy', level: 88 },
                { name: 'Matplotlib & Seaborn', level: 75 },
                { name: 'Deep Learning', level: 70 },
                {name: 'Time Series Forecasting', level: 82},
                { name: 'Model Deployment (Flask, FastAPI, Streamlit)', level: 75 },
                { name: 'Data Cleaning & Feature Engineering', level: 90 },
            ]
        }

    ];

    return (
        <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Skills & Expertise
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                            <div className="flex items-center mb-6">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg mr-4">
                                    <category.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {skill.name}
                      </span>
                                            <span className="text-slate-500 dark:text-slate-400 text-sm">
                        {skill.level}%
                      </span>
                                        </div>
                                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
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