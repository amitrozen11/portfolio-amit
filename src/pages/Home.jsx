import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function TypingText({ text, speed = 30 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <p className="text-cyan-400 mt-4 text-lg max-w-xl font-light font-mono">
      <span className="text-accent text-sm font-mono tracking-tight leading-none">&lt;p&gt;</span>{' '}
      {displayedText}
      <span className="text-cyan-400 animate-pulse ml-1">|</span>
      <span className="text-accent text-sm font-mono tracking-tight leading-none ml-1">&lt;/p&gt;</span>
    </p>
  );
}

function Home() {
  return (
    <div className="relative min-h-screen bg-[#0d1117] text-white flex flex-col lg:flex-row items-start px-6 sm:px-10 lg:px-16">
      <div className="w-full lg:w-2/3 max-w-4xl text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl lg:text-8xl font-extrabold leading-tight text-white mb-4 font-sans"
        >
          <p className="text-accent text-sm mb-2 font-mono tracking-tight leading-none">&lt;h1&gt;</p>
          <span className="text-accent text-sm font-['Fira_Code'] align-top"></span>{' '}
          HI!<br /> I’m <span className="text-cyan-400">Amit</span>,<br />
          And I'm much more than just a developer{' '}
          <span className="text-accent text-sm mb-2 font-mono tracking-tight leading-none">&lt;/h1&gt;</span>
        </motion.h1>
        <br />
        <TypingText text="I built this portfolio to show more than just a pretty face :) I’m a proud honors student, a former IDF officer. I solve problems with code, lead with purpose, and professional ice cream taster on emotionally complex days." />

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          href="/public/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block border-2 border-cyan-400 text-cyan-400 px-6 py-2 rounded hover:bg-white hover:text-black transition text-base sm:text-lg font-medium"
        >
          Download My CV
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/3 flex justify-center mt-10 lg:mt-0"
      >
        <div className="relative group">
          <img
            src="/profile.png"
            alt="Amit Rozen"
            className="rounded-2xl w-64 sm:w-80 lg:w-96 h-auto object-cover border border-gray-700"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap z-10 shadow-md">
            Nice to meet you! 👋
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
