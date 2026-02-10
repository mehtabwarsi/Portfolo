import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Download } from 'lucide-react';
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
        title: 'One PDF',
        description: 'A utility mobile app designed for seamless PDF management, including image-to-PDF conversion and merging.',
        tags: ['React Native', 'Native Modules', 'File System', 'Android'],
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?fit=crop&w=800&q=80',
        demo: '#', // Provide APK link here if available
        code: null, // Private Source
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
    return (
        <section id="projects" className="py-20 bg-slate-900">
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
                        Here are some of the projects I've worked on recently, spanning both Web and Mobile platforms.
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
                            className="glass rounded-xl overflow-hidden group border border-white/5 hover:border-purple-500/30 transition-all duration-300"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    {project.demo && project.demo !== '#' && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white rounded-full text-slate-900 hover:bg-purple-500 hover:text-white transition-colors flex items-center gap-2"
                                            title={project.isApk ? "Download APK" : "View Demo"}
                                        >
                                            {project.isApk ? <Download size={20} /> : <ExternalLink size={20} />}
                                        </a>
                                    )}
                                    {project.code && project.code !== '#' && (
                                        <a
                                            href={project.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white rounded-full text-slate-900 hover:bg-purple-500 hover:text-white transition-colors"
                                            title="View Code"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium bg-white/5 text-purple-300 rounded-full border border-purple-500/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/mehtabwarsi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                        View more on GitHub <ArrowUpRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
