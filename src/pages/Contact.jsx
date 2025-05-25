import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

function ContactForm() {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_napvlen',
                'template_twj60rt',
                form.current,
                'Y7540MI5nTZ9IB91u'
            )
            .then(
                () => {
                    setIsSent(true);
                    form.current.reset();

                    // ✳️ גבול ירוק זמני לשדות
                    const inputs = form.current.querySelectorAll("input, textarea");
                    inputs.forEach(el => {
                        el.classList.add("border-green-400");
                        setTimeout(() => el.classList.remove("border-green-400"), 2000);
                    });
                },
                (err) => {
                    setError(err.text);
                }
            );
    };

    return (
        <div className="p-6 sm:p-10 min-h-screen bg-[#0d1117] text-white">
            <h2 className="text-3xl font-bold mb-4 sm:mb-6">Contact Me</h2>

            <motion.p
                className="text-base sm:text-lg text-gray-300 mb-6 max-w-xl"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Got a question, an opportunity, or just want to say hi? I'm always happy to connect - drop me a message and I’ll get back to you as soon as I can!
            </motion.p>

            <form ref={form} onSubmit={sendEmail} className="max-w-xl space-y-4 w-full">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    required
                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email*"
                    required
                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
                />

                <input
                    type="text"
                    name="title"
                    placeholder="Subject*"
                    required
                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
                />

                <textarea
                    name="message"
                    placeholder="Your Message*"
                    required
                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600 h-32"
                ></textarea>

                <button
                    type="submit"
                    className="mt-6 inline-block border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded hover:bg-white hover:text-black transition text-lg font-medium"
                >
                    Send
                </button>

                {isSent && (
                    <motion.p
                        className="text-green-400 mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Message sent successfully!
                    </motion.p>
                )}

                {error && <p className="text-red-500 mt-2">Error: {error}</p>}
            </form>
        </div>
    );
}

export default ContactForm;
