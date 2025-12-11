import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, GraduationCap, Brain } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const activities = [
    {
      icon: GraduationCap,
      title: '🎓 A Learner',
      description:
        'I am a lifelong learner driven by curiosity and a strong desire to understand how things work.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Brain,
      title: '🤔 A Thinker',
      description:
        'I constantly challenge assumptions and ask: How can this be done better? Why does this solution matter?',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: Sparkles,
      title: '✨ A Creator',
      description:
        'I enjoy building new things—pushing ideas into reality through experimentation, iteration, and innovation.',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const values = [
    'Always question to uncover better solutions',
    'Think Harder > Work Harder',
    'Real-world impact matters more than theoretical elegance',
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20" ref={ref}>
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className="space-y-16"
      >
        {/* Section Title */}
        <motion.div variants={item} className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            关于我 <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Introduction with Photos */}
        <motion.div
          variants={item}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {/* Photo Gallery */}
            <div className="md:col-span-1 space-y-4">
              <motion.div
                variants={item}
                className="relative overflow-hidden rounded-xl aspect-square group"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="./images/wjz1.jpg"
                  alt="Jinze Wang - Photo 1"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>

            {/* Text Content */}
            <div className="md:col-span-2">
              <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 transition-all duration-300 hover:shadow-xl hover:border-cyan-400 dark:hover:border-cyan-600 hover:-translate-y-1 h-full flex flex-col justify-center">
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  你好，我是{' '}
                  <span className="font-bold text-cyan-600 dark:text-cyan-400">
                    王金泽（Jinze Wang）
                  </span>
                  。24 年毕业于宾夕法尼亚大学，数据科学硕士，目前从事数据工程师工作。对我来说，技术是杠杆，驱动我前进的是{' '}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    创造价值、解决问题、推动事情向前发展
                  </span>
                  {' '}的成就感。
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-medium">
                  享受通过数据分析与第一性原理洞察问题，通过各种技术寻找解决方案，寻找各种途径将方案落地的全过程。热爱足球、羽毛球。
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What I Do */}
        <motion.div variants={item}>
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
            Who am I? <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">关于我</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition-all duration-300 hover:shadow-xl hover:border-cyan-400 dark:hover:border-cyan-600 hover:-translate-y-1 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${activity.color}
                              flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <activity.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                      {activity.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div variants={item}>
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
            My Values <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">我的价值观</span>
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex items-start space-x-3 p-4 rounded-lg
                         bg-gray-50 dark:bg-gray-900/50 border-l-4 border-cyan-500
                         hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                whileHover={{ x: 10 }}
              >
                <span className="text-cyan-500 font-bold text-lg">✓</span>
                <p className="text-lg text-gray-700 dark:text-gray-300">{value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
