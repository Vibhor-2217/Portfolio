import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'fullstack' | 'mobile' | 'backend' | 'ai'>('all');

    const projects = [
        {
            id: 1,
            title: 'QNN-GNN Movie Recommender',
            description:
                'A hybrid recommendation system using Quantum Neural Networks (QNN) and Graph Neural Networks (GNN) for personalized movie suggestions.',
            image: 'https://images.pexels.com/photos/799137/pexels-photo-799137.jpeg?auto=compress&cs=tinysrgb&w=1200',
            tags: ['Quantum Neural Networks', 'Graph Neural Networks', 'Recommender Systems', 'PyTorch', 'Graph Data',
                   'Embeddings', 'API', 'Deployment', 'Movies', 'Personalization'],
            category: 'fullstack',
            github: 'https://github.com/Vibhor-2217/QNN_GNN_MovieRecommender',
            live: 'https://example.com',
        },
        {
            id: 2,
            title: 'Sentiment Analysis for Financial News',
            description:
                'Real-time sentiment analysis on financial news using FinBERT and BiLSTM-CNN ensemble models to support stock market predictions.',
            image: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1200',
            tags: ['FinBERT', 'Sentiment Analysis', 'BiLSTM', 'CNN', 'Ensemble', 'Transformers', 'Real-time', 'Streaming', 'API', 'Finance', 'News'],
            category: ['backend', 'ai'], // multiple categories
            github: 'https://github.com/Vibhor-2217/Sentiment-Analysis-for-Financial-News',
            live: 'https://example.com',
        },
        {
            id: 3,
            title: 'Face Detection',
            description:
                'Facial detection done using Siamese Neural Network and deep learning techniques in Jupyter notebooks.',
            image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1200',
            tags: ['Siamese Network', 'Face Detection', 'Face Verification', 'OpenCV', 'Deep Learning', 'PyTorch', 'Image Preprocessing', 'Augmentation', 'Jupyter'],
            category: 'ai',
            github: 'https://github.com/Vibhor-2217/FaceDetection',
            live: 'https://example.com',
        },
        {
            id: 4,
            title: 'Fall Detection',
            description:
                'Built using a YOLO pretrained model and OpenCV on Arduino ESP32 to detect human falls in real-time for safety monitoring.',
            image: '/elderly.png',
            tags: ['YOLO', 'Object Detection', 'Real-time', 'OpenCV', 'ESP32', 'Arduino', 'Edge AI', 'Safety', 'Monitoring'],
            category: 'mobile',
            github: 'https://github.com/Vibhor-2217/Fall_Detection_Arduino',
            live: 'https://example.com',
        },
        {
            id: 5,
            title: 'Nepal Tourist Website',
            description:
                'Web apps built using HTML, CSS, and JavaScript to showcase frontend and UI development skills.',
            image: '/nepal.png',
            tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Accessibility', 'SEO', 'UI/UX', 'Animations', 'Travel', 'Tourism'],
            category: 'frontend',
            github: 'https://github.com/Vibhor-2217/my-web-app',
            live: 'https://example.com',
        },
    ];

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'fullstack', label: 'Full Stack' },
        { id: 'mobile', label: 'Mobile' },
        { id: 'backend', label: 'Backend' },
        { id: 'ai', label: 'AI/ML' },
    ] as const;

    // Updated filtering logic to support string or string[]
    const filteredProjects =
        activeFilter === 'all'
            ? projects
            : projects.filter((project) =>
                Array.isArray(project.category)
                    ? project.category.includes(activeFilter)
                    : project.category === activeFilter
            );

    return (
        <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        A showcase of my recent work and side projects
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <Filter size={20} className="text-slate-500 dark:text-slate-400 mt-2" />
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeFilter === filter.id
                                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                                        >
                                            <Github size={18} />
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Fallback when no projects match the selected filter */}
                    {filteredProjects.length === 0 && (
                        <div className="col-span-full text-center text-slate-600 dark:text-slate-400">
                            No projects found for this category.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
