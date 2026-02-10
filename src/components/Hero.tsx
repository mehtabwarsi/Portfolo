
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-scroll';
import resume from '../assets/img/resume.pdf'

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl text-purple-400 font-medium mb-4">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            {/* Replace with your actual name */}
                            Mehtab Alam Warsi
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        A specialized Mobile Developer with 2+ years of experience in React Native and Web Development.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-2 group"
                        >
                            View Work
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                            href={resume}
                            download
                            className="px-8 py-3 glass rounded-full text-white font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
                        >
                            Download CV
                            <Download size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
                    <motion.div
                        animate={{
                            y: [0, 12, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-auto"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
