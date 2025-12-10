import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden
                 bg-gradient-to-br from-white via-cyan-50 to-blue-50
                 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10"
      >
        <motion.div variants={item} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium
                         bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300
                         border border-cyan-200 dark:border-cyan-800">
            👋 Hi, I'm Jinze
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-gray-100"
        >
          <span className="block mb-2">Data Engineer,</span>
          <span className="block mb-2">Data Scientist &</span>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">AIGC Explorer</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
        >
          Turning data, systems and ideas into{' '}
          <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
            reliable, scalable
          </span>{' '}
          and{' '}
          <span className="text-purple-600 dark:text-purple-400 font-semibold">
            intelligent products
          </span>
          .
        </motion.p>

        <motion.p
          variants={item}
          className="text-lg text-gray-500 dark:text-gray-500 mb-12 max-w-2xl mx-auto
                   italic border-l-4 border-cyan-400 pl-4"
        >
          I design data systems, build intelligent pipelines, and explore how AI reshapes the way people experience products.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#about"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600
                     text-white font-semibold shadow-lg hover:shadow-xl
                     transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          </motion.a>

          <motion.a
            href="#projects"
            className="px-8 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-700
                     text-gray-700 dark:text-gray-300 font-semibold
                     hover:border-cyan-500 dark:hover:border-cyan-500
                     transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a
          href="#about"
          className="flex flex-col items-center text-gray-500 dark:text-gray-500 hover:text-cyan-500 dark:hover:text-cyan-400"
        >
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
