import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Database,
  Terminal,
  Brain,
  Zap,
  Users,
  Lightbulb,
} from 'lucide-react';

const Skills = () => {
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
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  const technicalSkills = [
    {
      category: 'Data Scraping',
      icon: Terminal,
      color: 'from-cyan-500 to-blue-500',
      skills: ['Selenium', 'BeautifulSoup', '多线程爬取', 'API & 异构数据源采集'],
    },
    {
      category: 'Data Manipulation',
      icon: Database,
      color: 'from-blue-500 to-purple-500',
      skills: ['SQL', 'Pandas', 'Spark'],
    },
    {
      category: 'Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      skills: ['Scikit-learn', 'PyTorch', 'PySpark MLlib'],
    },
    {
      category: 'Database Management',
      icon: Database,
      color: 'from-pink-500 to-rose-500',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
    },
  ];

  const softSkills = [
    {
      name: '快速学习',
      icon: Zap,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      name: '跨团队协作',
      icon: Users,
      color: 'from-blue-500 to-purple-500',
    },
    {
      name: '问题解决能力',
      icon: Lightbulb,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: '创新思维',
      icon: Brain,
      color: 'from-pink-500 to-rose-500',
    },
    {
      name: '执行力',
      icon: Zap,
      color: 'from-rose-500 to-orange-500',
    },
    {
      name: '抗压能力',
      icon: Brain,
      color: 'from-orange-500 to-amber-500',
    },
  ];

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 dark:bg-gray-900/50"
      ref={ref}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className="space-y-16"
      >
        {/* Section Title */}
        <motion.div variants={item} className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            My Expertise <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">技能专长</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Technical Skills */}
        <div>
          <motion.h3
            variants={item}
            className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200"
          >
            Technical Skills <span className="text-cyan-500">技术能力</span>
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition-all duration-300 hover:shadow-xl hover:border-cyan-400 dark:hover:border-cyan-600 hover:-translate-y-1 group"
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skillGroup.color}
                            mb-4 group-hover:scale-110 transition-transform`}
                >
                  <skillGroup.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-3 text-gray-800 dark:text-gray-200">
                  {skillGroup.category}
                </h4>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="flex items-start space-x-2 text-gray-600 dark:text-gray-400"
                    >
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <motion.h3
            variants={item}
            className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200"
          >
            软技能 <span className="text-purple-500">Soft Skills</span>
          </motion.h3>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition-all duration-300 hover:shadow-xl hover:border-cyan-400 dark:hover:border-cyan-600 hover:-translate-y-1 flex flex-col items-center text-center p-8 cursor-pointer"
                  >
                    {/* Background Gradient on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color}
                                opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    {/* Icon */}
                    <motion.div
                      className={`relative p-4 rounded-full bg-gradient-to-br ${skill.color} mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <skill.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Skill Name */}
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 relative z-10">
                      {skill.name}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          variants={item}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition-all duration-300 hover:shadow-xl hover:border-cyan-400 dark:hover:border-cyan-600 hover:-translate-y-1 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border-0">
            <p className="text-xl font-medium text-gray-700 dark:text-gray-300 italic">
              "I think it's important to reason from first principles rather than by analogy."
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              — Elon Musk
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
