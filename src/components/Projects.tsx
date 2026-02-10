import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Download, Play, X } from 'lucide-react';
import PehnavaHomePage from '../assets/img/pehanvahome.png'

const projects = [
    {
        title: 'Pehnava',
        description: 'A full-stack e-commerce website featuring a modern UI, product management, and secure authentication.',
        tags: ['React', 'Node.js', 'MongoDB', 'Firebase Auth', 'Tailwind CSS', 'TanStack Query', 'Redux'],
        image: PehnavaHomePage,
        demo: 'https://pehnava-frontend.vercel.app/',
        code: 'https://github.com/mehtabwarsi/Pehnava-frontend.git',
    },
    {
        title: 'One Tap Pdf',
        description: 'A utility mobile app designed for seamless PDF management, including image-to-PDF conversion and merging.',
        tags: ['React Native', 'Native Modules', 'File System', 'Android'],
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?fit=crop&w=800&q=80',
        demo: 'https://drive.google.com/file/d/1FXGtlNdIbZJM9gxRnwIxZor8VTE6boRW/view?usp=drive_link', // Placeholder for actual APK link
        video: 'https://www.youtube.com/embed/VZiHpTEsAww', // Converted from Shorts to Embed format
        code: null,
        isApk: true
    },
    {
        title: 'Social Connect',
        description: 'A real-time social networking mobile app featuring chat, post sharing, and discovery of nearby communities.',
        tags: ['React Native', 'Node.js', 'Socket.io', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?fit=crop&w=800&q=80',
        demo: '#',
        code: '#',
    },
];

const Projects = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <section id="projects" className="py-20 bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A curated selection of my professional work and personal experiments in mobile and web development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="glass group rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/40 transition-all duration-500 shadow-lg hover:shadow-purple-500/10"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image as any}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-5">
                                    {project.video && project.video !== '#' && (
                                        <button
                                            onClick={() => setActiveVideo(project.video!)}
                                            className="p-4 bg-purple-500 rounded-full text-white hover:bg-purple-600 transition-all duration-300 scale-90 group-hover:scale-100 shadow-xl cursor-pointer"
                                            title="Watch Demo Video"
                                        >
                                            <Play size={24} fill="currentColor" />
                                        </button>
                                    )}
                                    {project.demo && project.demo !== '#' && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-4 bg-white rounded-full text-slate-900 hover:bg-purple-500 hover:text-white transition-all duration-300 scale-90 group-hover:scale-100 shadow-xl"
                                            title={project.isApk ? "Download APK" : "View Demo"}
                                        >
                                            {project.isApk ? <Download size={24} /> : <ExternalLink size={24} />}
                                        </a>
                                    )}
                                    {project.code && project.code !== '#' && (
                                        <a
                                            href={project.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-4 bg-white rounded-full text-slate-900 hover:bg-purple-500 hover:text-white transition-all duration-300 scale-90 group-hover:scale-100 shadow-xl"
                                            title="View Code"
                                        >
                                            <Github size={24} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-7">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    {project.isApk && (
                                        <span className="text-[10px] uppercase tracking-widest px-2 py-1 bg-purple-500/20 text-purple-400 rounded-md border border-purple-500/20">
                                            Mobile App
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-[11px] font-medium bg-white/5 text-purple-300/80 rounded-lg border border-white/5 group-hover:border-purple-500/20 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a
                        href="https://github.com/mehtabwarsi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-purple-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300"
                    >
                        Explore More on GitHub <ArrowUpRight size={18} />
                    </a>
                </div>
            </div>

            {/* Enhanced Video Modal */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md"
                        onClick={() => setActiveVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.2)] border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="absolute top-0 left-0 right-0 p-4 bg-linear-to-b from-black/80 to-transparent z-10 flex justify-between items-center">
                                <span className="text-white/60 text-sm font-medium px-4">Project Demo Video</span>
                                <button
                                    onClick={() => setActiveVideo(null)}
                                    className="p-2 bg-white/10 text-white rounded-full hover:bg-red-500 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <iframe
                                src={`${activeVideo}?autoplay=1&rel=0`}
                                className="w-full h-full"
                                title="Project Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity">
                                <a
                                    href={activeVideo.replace('embed/', 'watch?v=')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg"
                                >
                                    Open on YouTube
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
