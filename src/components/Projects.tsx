import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Download, Play, X } from 'lucide-react';
import PehnavaHomePage from '../assets/img/pehanvahome.png';
import OneTapPdf1 from '../assets/img/OneTapPdf1.png';
import OneTapPDF2 from '../assets/img/OneTapPDF2.png';
import OneTapPdf3 from '../assets/img/OneTapPdf3.png';
import OneTapOcr1 from '../assets/img/OneTapOCR.png';


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
        description: 'A powerful utility app for complete PDF management. Features Image-to-PDF, Merge, Split, Compress, and Password Protection (AES) with a native-feel UI.',
        tags: ['React Native', 'Native Modules', 'PDF Processing', 'AES Encryption', 'File System'],
        images: [
            OneTapPdf1,
            OneTapPDF2,
            OneTapPdf3,
        ],
        image: OneTapPdf1,
        demo: 'https://drive.google.com/file/d/1FXGtlNdIbZJM9gxRnwIxZor8VTE6boRW/view?usp=sharing', // Direct Download Link
        video: 'https://www.youtube.com/embed/VZiHpTEsAww',
        code: null,
        isApk: true
    },
    {
        title: 'OneTapOCR',
        description: 'A native Android application leveraging Google ML Kit for high-accuracy text recognition. Scan text via live camera or gallery, extract content, and copy it instantly.',
        tags: ['Kotlin', 'Android SDK', 'Google ML Kit', 'CameraX', 'OCR'],
        images: [
            OneTapOcr1,
        ],
        image: OneTapOcr1,
        demo: 'https://drive.google.com/file/d/1hfBt6nHBWi6vBxn5g5tJw0GdL2vtcPT6/view?usp=sharing', // Placeholder for APK link
        video: 'https://www.youtube.com/embed/MtIH_ciPtYw',
        code: null,
        isApk: true
    },
];

const BentoGallery = ({ images }: { images: string[] }) => {
    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[300px] w-full group/bento">
            {/* Main Featured Image */}
            <motion.div
                className="col-span-2 row-span-2 rounded-2xl overflow-hidden border border-white/10 bg-slate-800 relative cursor-pointer"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.4 }}
            >
                <img
                    src={images[0]}
                    alt="Main Feature"
                    className="w-full h-full object-cover transform group-hover/bento:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Secondary Images */}
            {images.slice(1, 3).map((img, i) => (
                <motion.div
                    key={i}
                    className="rounded-xl overflow-hidden border border-white/10 bg-slate-800 relative cursor-pointer"
                    whileHover={{ scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                >
                    <img
                        src={img}
                        alt={`Detail ${i + 1}`}
                        className="w-full h-full object-cover transform group-hover/bento:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent" />
                </motion.div>
            ))}

            {/* If only 2 images, show a placeholder or empty slot */}
            {images.length === 2 && (
                <div className="rounded-xl border border-dashed border-white/10 flex items-center justify-center bg-white/5">
                    <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Preview</span>
                </div>
            )}
        </div>
    );
};

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
                        Innovative Projects
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A showcase of digital craftsmanship, blending robust engineering with intuitive user interfaces.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -8 }}
                            className="group relative flex flex-col h-full rounded-[2rem] bg-slate-900 border border-white/5 hover:border-purple-500/30 transition-all duration-500 shadow-2xl hover:shadow-purple-500/10 overflow-hidden"
                        >
                            {/* Visual Header */}
                            <div className="relative p-5 sm:p-6 bg-linear-to-b from-white/5 to-transparent">
                                {project.images && project.images.length > 1 ? (
                                    <BentoGallery images={project.images} />
                                ) : project.isApk ? (
                                    /* Single Mobile Screenshot Showcase */
                                    <div className="h-[300px] w-full rounded-2xl overflow-hidden border border-white/10 relative bg-slate-800/50 flex items-center justify-center p-4">
                                        <motion.div
                                            className="h-full aspect-9/19 relative z-10 shadow-2xl rounded-xl overflow-hidden border border-white/20"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <img
                                                src={project.image as any}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                            {/* Screen Shine */}
                                            <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent pointer-events-none" />
                                        </motion.div>

                                        {/* Background Blurred Version for depth */}
                                        <div className="absolute inset-0 opacity-20 blur-3xl scale-110 pointer-events-none">
                                            <img
                                                src={project.image as any}
                                                alt=""
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    /* Standard Web/Large Screenshot */
                                    <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 relative bg-slate-800">
                                        <img
                                            src={project.image as any}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />
                                    </div>
                                )}

                                {/* Overlay Actions */}
                                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 bg-slate-950/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    {project.video && (
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => setActiveVideo(project.video!)}
                                            className="w-14 h-14 bg-purple-500 flex items-center justify-center rounded-full text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] cursor-pointer"
                                        >
                                            <Play size={24} fill="currentColor" />
                                        </motion.button>
                                    )}
                                    {project.demo && (
                                        <motion.a
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-14 h-14 bg-white flex items-center justify-center rounded-full text-slate-900 shadow-xl"
                                        >
                                            {project.isApk ? <Download size={24} /> : <ExternalLink size={24} />}
                                        </motion.a>
                                    )}
                                    {project.code && project.code !== '#' && (
                                        <motion.a
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            href={project.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-14 h-14 bg-white/10 backdrop-blur-md flex items-center justify-center rounded-full text-white border border-white/20 shadow-xl"
                                        >
                                            <Github size={24} />
                                        </motion.a>
                                    )}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="px-8 pb-8 pt-2 flex flex-col grow">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors tracking-tight">
                                        {project.title}
                                    </h3>
                                    {project.isApk && (
                                        <div className="flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 rounded-full border border-purple-500/20">
                                            <div className="w-1 h-1 rounded-full bg-purple-500 animate-pulse" />
                                            <span className="text-[10px] uppercase tracking-tighter font-black text-purple-400">Android</span>
                                        </div>
                                    )}
                                </div>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed grow opacity-80">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-[10px] font-bold bg-white/3 text-slate-400 rounded-lg border border-white/5 transition-all group-hover:border-purple-500/20 group-hover:text-purple-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative line */}
                            <div className="absolute bottom-0 left-0 h-[3px] bg-linear-to-r from-purple-500/0 via-purple-500 to-purple-500/0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <a
                        href="https://github.com/mehtabwarsi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/3 border border-white/5 text-purple-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300 text-sm font-bold tracking-widest uppercase"
                    >
                        See More Collections <ArrowUpRight size={18} />
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
                        className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-2xl"
                        onClick={() => setActiveVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 40 }}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(168,85,247,0.3)] border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="absolute top-0 left-0 right-0 p-6 bg-linear-to-b from-black/90 to-transparent z-10 flex justify-between items-center">
                                <div className="flex flex-col ml-4 font-black text-white/90">
                                    <span className="text-[10px] uppercase tracking-widest text-purple-400">Live Demo</span>
                                    <span className="text-sm tracking-tight opacity-70">Project Showreel</span>
                                </div>
                                <button
                                    onClick={() => setActiveVideo(null)}
                                    className="p-3 bg-white/10 text-white rounded-full hover:bg-red-500/80 transition-all duration-300"
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

                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                                <a
                                    href={activeVideo.replace('embed/', 'watch?v=')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[3px] shadow-2xl transition-all inline-block text-center whitespace-nowrap"
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
