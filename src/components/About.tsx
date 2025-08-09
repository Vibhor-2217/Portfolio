import React from 'react';
import { Download, Award, Users, Coffee } from 'lucide-react';

const About: React.FC = () => {
    const stats = [
        { icon: Award, label: 'Experience', value: '2 months' },
        { icon: Users, label: 'Projects Completed', value: '4+' },
        { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    ];

    return (
        <section id="about" aria-labelledby="about-title" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 id="about-title" className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        Passionate developer and ML enthusiast who loves crafting exceptional digital experiences—whether
                        that’s a sleek web app, a smart model, or anything in between.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                            Hello! I’m Vibhor, a New Delhi–based ML Engineer and full‑stack developer. I blend machine learning, data science,
                            and modern web frameworks to turn ideas into polished, performant products.
                        </p>

                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                            I don’t claim to know everything—and I’m far from knowing nothing. I thrive in the middle, where learning happens:
                            researching, iterating, and pushing through the tricky parts to deliver.
                        </p>

                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                            My goal is to ship experiences that feel fast, look refined, and work beautifully—while continuously exploring
                            new tools and techniques to stay ahead of the curve.
                        </p>

                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                            When I’m not building, I’m hiking, exploring new tech ideas, or experimenting in the kitchen—often turning
                            recipes into mini science projects. If you’re building something ambitious and need someone who can think in models
                            and ship in code, let’s make it happen.
                        </p>

                        <div className="pt-4">
                            <a
                                href="/VibhorGupta_Resume.pdf"
                                download
                                aria-label="Download Vibhor Gupta Resume PDF"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 transform motion-safe:hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 dark:focus:ring-offset-slate-900"
                            >
                                <Download size={20} className="mr-2" />
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl p-1">
                            <div className="w-full h-full bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden">
                                <img
                                    src="/self_image.jpg"
                                    alt="Vibhor Gupta"
                                    className="w-full h-full object-cover"   // fill + crop
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transform motion-safe:hover:scale-105 transition-all duration-300"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full mb-4">
                                <stat.icon size={24} aria-hidden="true" />
                            </div>
                            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                                {stat.value}
                            </div>
                            <div className="text-slate-600 dark:text-slate-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
