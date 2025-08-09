import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                            Vibhor Gupta
                        </h3>
                        <p className="text-slate-400 mt-2">
                            Developer and ML Enthusiast
                        </p>
                    </div>

                    <div className="border-t border-slate-800 pt-8">
                        <p className="text-slate-400 flex items-center justify-center space-x-1">
                            <span>Made with</span>
                            <Heart size={16} className="text-red-500 mx-1" />
                            <span>by Vibhor Gupta</span>
                        </p>
                        <p className="text-slate-500 text-sm mt-2">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;