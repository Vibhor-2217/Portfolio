import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [result, setResult] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult('Sending...');

        const formData = new FormData(event.target as HTMLFormElement);
        formData.append("access_key", "6b927365-f9ab-4d5c-8c7a-9fdfb3e2198f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message sent successfully!");
            (event.target as HTMLFormElement).reset();
        } else {
            setResult("Something went wrong!");
        }

        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        Have a project in mind? Let's work together to create something amazing
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                            Let's Connect
                        </h3>
                        {/* Your existing contact info */}
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                required
                                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows={5}
                                required
                                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>

                        {result && (
                            <p className={`text-center font-medium ${result.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                                {result}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
