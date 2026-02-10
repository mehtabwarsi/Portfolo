import { motion } from 'framer-motion';
import profileimg from '../assets/img/profile.jpg';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    {/* Image Side */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative aspect-square rounded-lg overflow-hidden glass border-0">
                            {/* Placeholder image */}
                            <img
                                src={profileimg}
                                alt="Profile"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            About Me
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            I am a specialized Mobile Application Developer with <strong>2 years</strong> of core experience in building cross-platform apps using <strong>React Native</strong>. Additionally, I have a solid <strong>6-month</strong> foundation in web development with <strong>React</strong>.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            My expertise extends to basic <strong>Native Android (Kotlin/Java)</strong> and <strong>iOS (Swift)</strong> development, allowing me to bridge the gap between shared logic and platform-specific features. I also have experience working with <strong>Node.js</strong> and <strong>MongoDB</strong> for creating scalable backend services.
                        </p>

                        <div className="pt-6 grid grid-cols-2 gap-4">
                            <div className="glass p-4 rounded-xl text-center">
                                <h3 className="text-3xl font-bold text-purple-400">2+</h3>
                                <p className="text-sm text-gray-400">Years in Mobile Dev</p>
                            </div>
                            <div className="glass p-4 rounded-xl text-center">
                                <h3 className="text-3xl font-bold text-pink-400">6+</h3>
                                <p className="text-sm text-gray-400">Months in Web Dev</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
