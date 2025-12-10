import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Code, Database, TrendingUp } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // 按时间段组织的经历
  const timelinePeriods = [
    {
      period: '2024 - Present',
      left: {
        icon: Briefcase,
        title: 'PICC',
        subtitle: 'Data Engineer (Full-time)',
        period: 'Aug 2024 – Present',
        location: 'Beijing, China',
        color: 'from-cyan-500 to-blue-500',
        achievements: [
          '管理内部 KPI 平台，负责需求分析、跨团队协调和项目执行',
          '使用 Pandas 构建员工绩效模型，参与数据库和前端设计',
          '开发跨异构系统的自动化 ETL 管道',
          '使用 Python、SNMP、Kafka 和 Flask 构建分布式监控系统',
        ],
      },
      right: null, // 当前没有对应的实习/项目
    },
    {
      period: '2022 - 2024',
      left: {
        icon: GraduationCap,
        title: 'University of Pennsylvania',
        subtitle: 'Master of Science in Data Science',
        period: 'Aug 2022 – May 2024',
        location: 'Philadelphia, PA',
        color: 'from-blue-500 to-purple-500',
        achievements: [
          'GPA: 3.95/4.0',
          'TA for MUSA550-Geospatial Data Science in Python',
          'Research Assistant at Upenn Design School, responsible for geospatial data manipulation.',
          'Core Courses: Database And Information System, Big Data Analysis, Deep Learning, Applied Machine Learning, Internet & Web Systems',
        ],
      },
      right: {
        icon: Code,
        title: 'Souscout',
        subtitle: 'Data Engineer Intern',
        period: 'May 2023 – Aug 2023',
        location: 'New York, NY',
        color: 'from-cyan-500 to-blue-500',
        achievements: [
          '使用 Selenium 抓取足球数据，通过多进程优化将运行时间减少 60%',
          '设计球员实体匹配逻辑，使用特征向量、规则和相似度评分',
          '应用 OpenAI API 过滤弱匹配，生成高质量的球员映射数据',
        ],
      },
    },
    {
      period: '2018 - 2022',
      left: {
        icon: GraduationCap,
        title: 'ShanghaiTech University',
        subtitle: 'Bachelor of Science in Computer Science',
        period: 'Sep 2018 – Jul 2022',
        location: 'Shanghai, China',
        color: 'from-purple-500 to-pink-500',
        achievements: [
          'GPA: 3.7/4.0',
          '上海科技大学优秀学生、三好学生、优秀毕业生',
          '上海科技大学足球校队主力中锋、金靴奖',
          'Core Courses: Data Structures and Algorithms, Linear Algebra, Operating System, Computer Vision, Computer Architecture, Artificial Intelligence',
        ],
      },
      right: [
        {
          icon: Code,
          title: 'Orka',
          subtitle: 'Software Engineer Intern',
          period: 'Feb 2022 – June 2022',
          location: 'Shanghai, China',
          color: 'from-blue-500 to-purple-500',
          achievements: [
            '使用 Django REST framework 和 React 开发维护公司网站后端',
            '使用 Django/PostgreSQL 构建 RESTful API',
            '应用 Celery 处理多个后端任务，响应时间减少 50%',
          ],
        },
        {
          icon: Database,
          title: 'Deloitte',
          subtitle: 'Data Scientist Intern',
          period: 'Aug 2021 – Nov 2021',
          location: 'Shanghai, China',
          color: 'from-purple-500 to-pink-500',
          achievements: [
            '参与企业风险评估自动查询系统项目',
            '使用 Logistic Regression、Decision Tree 和 XGBoost 预测财务风险',
            '使用 python-docx 自动生成报告，每季度节省 20 小时人工',
          ],
        },
        {
          icon: TrendingUp,
          title: 'Central China Securities',
          subtitle: 'Financial Analyst Intern',
          period: 'Feb 2021 – Apr 2021',
          location: 'Henan, China',
          color: 'from-pink-500 to-rose-500',
          achievements: [
            '参与郑州名扬窗饰材料有限公司 IPO 项目',
            '负责准备招股说明书等必要材料',
          ],
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 dark:bg-gray-900/50"
      ref={ref}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className="space-y-12"
      >
        {/* Section Title */}
        <motion.div variants={item} className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Experience <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">过往经历</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg">
            Academic background and professional experience
          </p>
        </motion.div>

        {/* Timeline by Period */}
        <div className="space-y-16">
          {timelinePeriods.map((periodData, periodIndex) => (
            <motion.div
              key={periodIndex}
              variants={item}
              className="relative"
            >
              {/* Period Label */}
              <div className="flex items-center justify-center mb-8">
                <div className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg shadow-lg">
                  {periodData.period}
                </div>
              </div>

              {/* Two Column Layout */}
              <div className="relative">
                {/* Center Vertical Line */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-300 via-purple-300 to-pink-300 dark:from-cyan-700 dark:via-purple-700 dark:to-pink-700 transform -translate-x-1/2" />

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                  {/* Left Column: Education + Full-time */}
                  <div className="relative">
                    {/* Timeline Dot */}
                    <div className="hidden lg:block absolute -right-[2.1rem] top-8 w-4 h-4 rounded-full bg-white dark:bg-gray-950 border-4 border-cyan-500 z-10" />

                    {periodData.left && (
                      <motion.div
                        className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition-all duration-300 hover:shadow-xl hover:border-cyan-400 dark:hover:border-cyan-600 hover:-translate-y-1"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-start space-x-4 mb-4">
                          <div
                            className={`p-3 rounded-xl bg-gradient-to-br ${periodData.left.color} flex-shrink-0`}
                          >
                            <periodData.left.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                              {periodData.left.title}
                            </h4>
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              {periodData.left.subtitle}
                            </p>
                            <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">
                              {periodData.left.period}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              {periodData.left.location}
                            </p>
                          </div>
                        </div>

                        <ul className="space-y-2">
                          {periodData.left.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start space-x-2 text-gray-600 dark:text-gray-400"
                            >
                              <span className="text-cyan-500 mt-1 flex-shrink-0">▸</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>

                  {/* Right Column: Internships + Projects */}
                  <div className="space-y-6">
                    {periodData.right && (
                      <>
                        {Array.isArray(periodData.right) ? (
                          periodData.right.map((internship, idx) => (
                            <div key={idx} className="relative">
                              {/* Timeline Dot */}
                              <div className="hidden lg:block absolute -left-[2.1rem] top-8 w-4 h-4 rounded-full bg-white dark:bg-gray-950 border-4 border-purple-500 z-10" />

                              <motion.div
                                className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition-all duration-300 hover:shadow-xl hover:border-purple-400 dark:hover:border-purple-600 hover:-translate-y-1"
                                whileHover={{ scale: 1.02 }}
                              >
                                <div className="flex items-start space-x-4 mb-4">
                                  <div
                                    className={`p-3 rounded-xl bg-gradient-to-br ${internship.color} flex-shrink-0`}
                                  >
                                    <internship.icon className="w-6 h-6 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                                      {internship.title}
                                    </h4>
                                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                      {internship.subtitle}
                                    </p>
                                    <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                                      {internship.period}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                      {internship.location}
                                    </p>
                                  </div>
                                </div>

                                <ul className="space-y-2">
                                  {internship.achievements.map((achievement, i) => (
                                    <li
                                      key={i}
                                      className="flex items-start space-x-2 text-gray-600 dark:text-gray-400"
                                    >
                                      <span className="text-purple-500 mt-1 flex-shrink-0">▸</span>
                                      <span>{achievement}</span>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            </div>
                          ))
                        ) : (
                          <div className="relative">
                            {/* Timeline Dot */}
                            <div className="hidden lg:block absolute -left-[2.1rem] top-8 w-4 h-4 rounded-full bg-white dark:bg-gray-950 border-4 border-purple-500 z-10" />

                            <motion.div
                              className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition-all duration-300 hover:shadow-xl hover:border-purple-400 dark:hover:border-purple-600 hover:-translate-y-1"
                              whileHover={{ scale: 1.02 }}
                            >
                              <div className="flex items-start space-x-4 mb-4">
                                <div
                                  className={`p-3 rounded-xl bg-gradient-to-br ${periodData.right.color} flex-shrink-0`}
                                >
                                  <periodData.right.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                                    {periodData.right.title}
                                  </h4>
                                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    {periodData.right.subtitle}
                                  </p>
                                  <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                                    {periodData.right.period}
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    {periodData.right.location}
                                  </p>
                                </div>
                              </div>

                              <ul className="space-y-2">
                                {periodData.right.achievements.map((achievement, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start space-x-2 text-gray-600 dark:text-gray-400"
                                  >
                                    <span className="text-purple-500 mt-1 flex-shrink-0">▸</span>
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div variants={item} className="flex justify-center space-x-8 pt-8">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">教育 & 全职</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">实习 & 项目</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
