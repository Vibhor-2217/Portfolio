import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin} from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [result, setResult] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResult('Sending...');

        // Create FormData object for Web3Forms
        const formDataObj = new FormData();
        formDataObj.append("access_key", "6b927365-f9ab-4d5c-8c7a-9fdfb3e2198f"); // Replace with your Web3Forms access key
        formDataObj.append("name", formData.name);
        formDataObj.append("email", formData.email);
        formDataObj.append("subject", formData.subject);
        formDataObj.append("message", formData.message);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataObj
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully!");
                // Reset form
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setResult("Something went wrong! Please try again.");
            }
        } catch (error) {
            setResult("Failed to send message. Please try again.");
        }

        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        Have a project in mind? Let's work together to create something amazing
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                Let's Connect
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                I'm always interested in hearing about new opportunities and interesting projects.
                                Whether you have a question or just want to say hi, feel free to reach out!
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                                    <Mail className="text-white" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Email</h4>
                                    <p className="text-slate-600 dark:text-slate-400">vibhorgupta22@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                                    <Phone className="text-white" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Phone</h4>
                                    <p className="text-slate-600 dark:text-slate-400">+91 9929244909</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                                    <MapPin className="text-white" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Location</h4>
                                    <p className="text-slate-600 dark:text-slate-400">New Delhi, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                                Follow Me
                            </h4>
                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com/Vibhor-2217"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white dark:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/vibhorgupta01/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white dark:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-300"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-300"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-300"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-300 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>

                            {result && (
                                <div className={`text-center font-medium p-4 rounded-lg transition-all duration-300 ${
                                    result.includes('success')
                                        ? 'text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900/30 border border-green-200 dark:border-green-800'
                                        : result.includes('Sending')
                                            ? 'text-blue-700 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800'
                                            : 'text-red-700 bg-red-100 dark:text-red-400 dark:bg-red-900/30 border border-red-200 dark:border-red-800'
                                }`}>
                                    {result}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
