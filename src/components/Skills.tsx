import { motion } from 'framer-motion';
import {
    Database,
    Layout,
    Server,
    Terminal,
    Smartphone,
    Apple
} from 'lucide-react';

const skills = [
    { name: 'React Native', icon: Smartphone, level: 'Advanced' },
    { name: 'React.js', icon: Layout, level: 'Intermediate' },
    { name: 'Node.js', icon: Server, level: 'Intermediate' },
    { name: 'MongoDB', icon: Database, level: 'Intermediate' },
    { name: 'Native iOS', icon: Apple, level: 'Basic' },
    { name: 'Native Android', icon: Terminal, level: 'Basic' },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-900 relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
                        Technical Skills
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A snapshot of the technologies and tools I work with to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass p-6 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                                    <skill.icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-200">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: skill.level === 'Advanced' ? '90%' : skill.level === 'Intermediate' ? '70%' : '50%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                                />
                            </div>
                            <p className="text-right text-xs text-gray-500 mt-2">{skill.level}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
