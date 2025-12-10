import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      title: '员工绩效分析模型',
      description:
        '参与设计并独立实现员工绩效度量模型，使用 Pandas / NumPy / SQL 构建数据计算链路；从 数据库建模、后端接口到前端展示全流程深度参与，实现可解释性强、可灵活扩展的指标体系。对接 多源异构系统（OA、考勤、业务系统）；覆盖数据抽取、清洗标准化、指标生产、存储、可视化输出，全流程延迟控制在分钟级。',
      tags: ['Python', 'Pandas', 'SQL', 'Data Analysis', 'KPI System'],
      gradient: 'from-cyan-500 to-blue-500',
      icon: '📊',
      featured: true,
    },
    {
      title: '量化交易策略与回测系统',
      description:
        '围绕沪深 300 构建端到端量化交易体系。使用多源数据（行情、财务、技术指标）进行自动化抓取与清洗，构建数十维特征矩阵。采用随机森林模型进行选股并输出多维概率评分，结合阈值策略生成交易信号。依托 Backtrader 构建回测框架，实现仓位动态调整、滑点与交易成本模拟、风险控制（如最大回撤约束）。',
      tags: ['Python', 'Backtrader', 'Scikit-learn', 'Pandas', 'Machine Learning'],
      gradient: 'from-blue-500 to-purple-500',
      icon: '📈',
      featured: true,
      link: 'https://github.com/JinzeWang10/quant-learning',
    },
    {
      title: '心理量表测评平台',
      description:
        '自主设计并开发一个趣味心理测评平台，提供趣味测试与专业心理测评，支持量化测评、维度分布分析与数据统计。欢迎点击下方链接尝试。平台已具备产品级稳定性，可直接用于心理服务、教育、内容创作者的量表挂载与推广。',
      tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Web Development', 'Privacy-first Design'],
      gradient: 'from-purple-500 to-pink-500',
      icon: '🧠',
      featured: true,
      link: 'https://knowyourself.com.cn',
    },
    {
      title: '食品分类深度学习模型',
      description:
        '使用 Pandas 进行数据预处理，通过 NLTK 进行文本处理和 BERT tokenizer 向量化。基于 PySpark 进行网格搜索，处理时间减少 70%。使用 PyTorch 构建 CNN 模型，精确率达 89%，F1 分数 0.84。',
      tags: ['PyTorch', 'CNN', 'PySpark', 'BERT', 'NLP', 'Machine Learning'],
      gradient: 'from-pink-500 to-rose-500',
      icon: '🍕',
    },
    {
      title: 'Mini-Google 搜索引擎',
      description:
        '构建基于 Java Sockets 的动态 Web Server，实现可扩展的 路由系统、会话管理、异常处理机制，并集成 TLS/HTTPS 以支持安全通信；完成从协议解析到请求处理的端到端实现。设计分布式 Key-Value Store，采用 内存 + 磁盘的混合持久化 架构；实现类 RDD 的数据抽象层，支持 MapReduce 风格的分布式算子，具备故障恢复与水平扩展能力。开发分布式 Web Crawler，实现大规模网页抓取调度、URL 去重、任务分发等核心模块；基于抓取结果实现 PageRank 排序与检索功能，并将整体系统部署运行在 AWS 上。',
      tags: ['Java', 'Distributed Systems', 'MapReduce', 'AWS', 'PageRank'],
      gradient: 'from-rose-500 to-orange-500',
      icon: '🔍',
    },
    {
      title: 'Soccer Fun Facts Web App',
      description:
        'Conducted EDA on three overlapping datasets, designed an ER diagram, normalized tables to 3NF, and stored them on AWS. Wrote complex SQL queries and used explain plans for optimization. Built a full-stack web app with search and filtering features using React and Node.js.',
      tags: ['React', 'Node.js', 'AWS', 'SQL', 'Database Design', '3NF'],
      gradient: 'from-orange-500 to-amber-500',
      icon: '⚽',
    },
    {
      title: 'Multi-Label Feature Interaction Learning',
      description:
        'Developed a high-order, non-linear multi-label learning model with structured sparsity to identify meaningful feature interactions and improve generalization. Decomposed interaction tensors to reduce overfitting and applied L21-norm regularization. Demonstrated model effectiveness through experiments on real-world datasets.',
      tags: ['Machine Learning', 'Feature Engineering', 'Structured Sparsity', 'Research'],
      gradient: 'from-amber-500 to-yellow-500',
      icon: '🧠',
    },
    {
      title: '分布式监控系统',
      description:
        '使用 Python、SNMP、Kafka 和 Flask 构建分布式监控系统，实现告警处理、性能分析和实时数据查询服务。',
      tags: ['Python', 'Kafka', 'Flask', 'SNMP', 'Monitoring'],
      gradient: 'from-green-500 to-emerald-500',
      icon: '📡',
    },
    {
      title: 'Uber Data Pipeline',
      description:
        'Built an end-to-end data pipeline for Uber trip data: stored raw data on GCP Storage, created a Compute Engine VM, deployed Mage for transformation, connected via SSH, and loaded processed data into BigQuery. Finally, built an analytical dashboard on Looker Studio.',
      tags: ['GCP', 'Google Compute Engine', 'Mage', 'BigQuery', 'Looker Studio', 'ETL'],
      gradient: 'from-indigo-500 to-purple-500',
      icon: '🚗',
    },
    {
      title: '自动化 ETL 数据管道',
      description:
        '开发跨异构系统的自动化 ETL 管道，实现数据提取、清洗、指标计算和可视化，重构底层数据架构解决跨系统一致性问题。',
      tags: ['ETL', 'Python', 'Data Engineering', 'SQL'],
      gradient: 'from-teal-500 to-cyan-500',
      icon: '⚙️',
    },
    {
      title: '企业风险评估系统',
      description:
        '使用 Selenium 抓取财务数据，应用 Logistic Regression、Decision Tree 和 XGBoost 预测财务风险，使用 python-docx 自动生成报告。',
      tags: ['Machine Learning', 'XGBoost', 'Selenium', 'Automation'],
      gradient: 'from-red-500 to-pink-500',
      icon: '💼',
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20" ref={ref}>
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className="space-y-12"
      >
        {/* Section Title */}
        <motion.div variants={item} className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Projects <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">项目</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg">
            Selected projects showcasing data engineering, web development, and machine learning expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition-all duration-300 hover:shadow-xl hover:border-cyan-400 dark:hover:border-cyan-600 hover:-translate-y-1 group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              whileHover={{ y: -8 }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold
                             bg-gradient-to-r from-yellow-400 to-orange-500 text-white
                             shadow-lg"
                  >
                    ⭐ Featured
                  </span>
                </div>
              )}

              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0
                          group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium
                               bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300
                               border border-gray-200 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                {project.link && (
                  <div className="flex items-center space-x-3 text-sm">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-cyan-600 dark:text-cyan-400
                               hover:text-cyan-700 dark:hover:text-cyan-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>访问网站</span>
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div variants={item} className="text-center pt-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            More projects on GitHub
          </p>
          <motion.a
            href="https://github.com/JinzeWang10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl
                     bg-gray-900 dark:bg-white text-white dark:text-gray-900
                     font-semibold hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>View GitHub Profile</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
