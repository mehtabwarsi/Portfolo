import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formResult, setFormResult] = useState<{ success: boolean; message: string } | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormResult(null);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "62681534-118c-4e89-a359-86ec1694f29a", // Placeholder - User can change this later
                    ...formData,
                    subject: `New Portfolio Message from ${formData.name}`,
                    from_name: "Portfolio Contact Form",
                }),
            });

            const result = await response.json();
            if (result.success) {
                setFormResult({
                    success: true,
                    message: "Badiya! Aapka message mil gaya hai. Main aapse jald hi contact karunga. ✨"
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setFormResult({
                    success: false,
                    message: "Oops! Kuch gadbad ho gayi. Please thodi der baad try karein."
                });
            }
        } catch (error) {
            setFormResult({
                success: false,
                message: "Network error! Please apna internet check karein."
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-purple-400">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                                <p className="text-gray-400">mehtabwarsi3@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-pink-400">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                                <p className="text-gray-400">+91 7709247485</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-blue-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                                <p className="text-gray-400">Mumbai, Maharashtra</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass p-8 rounded-xl border border-white/5 relative"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white placeholder-gray-500 transition-all"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white placeholder-gray-500 transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white placeholder-gray-500 transition-all resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 rounded-lg text-white font-medium transition-all flex items-center justify-center gap-2 ${isSubmitting
                                        ? 'bg-slate-700 cursor-not-allowed opacity-70'
                                        : 'bg-linear-to-r from-purple-600 to-pink-600 hover:opacity-90 shadow-lg shadow-purple-500/20'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Bheja ja raha hai...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} />
                                    </>
                                )}
                            </button>

                            {/* Status Message */}
                            <AnimatePresence mode="wait">
                                {formResult && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className={`p-4 rounded-lg flex items-center gap-3 ${formResult.success
                                                ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                                                : 'bg-red-500/10 border border-red-500/20 text-red-400'
                                            }`}
                                    >
                                        {formResult.success ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                                        <p className="text-sm font-medium">{formResult.message}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
